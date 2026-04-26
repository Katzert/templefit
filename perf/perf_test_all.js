const http = require('http');
const { performance } = require('perf_hooks');

const BASE_URL = 'http://localhost:3000/templefit';
const ROUTES = ['/', '/alianzas/', '/tienda/', '/dashboard/index.html'];
const ITERATIONS_PER_ROUTE = 5;

async function measureRequest(url) {
    return new Promise((resolve, reject) => {
        const start = performance.now();
        http.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                const end = performance.now();
                resolve({
                    duration: end - start,
                    statusCode: res.statusCode,
                    size: data.length
                });
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function runTest() {
    console.log(`Starting comprehensive performance test...`);
    
    const allResults = {};

    for (const route of ROUTES) {
        const url = `${BASE_URL}${route}`;
        console.log(`Testing route: ${url}`);
        const results = [];
        
        // Warm up
        await measureRequest(url);

        for (let i = 0; i < ITERATIONS_PER_ROUTE; i++) {
            const res = await measureRequest(url);
            results.push(res);
            process.stdout.write('.');
        }
        console.log(' Done');
        allResults[route] = results;
    }

    console.log('\n--- Final Summary ---');
    console.table(Object.keys(allResults).map(route => {
        const results = allResults[route];
        const durations = results.map(r => r.duration);
        return {
            Route: route,
            'Avg (ms)': (durations.reduce((a, b) => a + b, 0) / durations.length).toFixed(2),
            'Min (ms)': Math.min(...durations).toFixed(2),
            'Max (ms)': Math.max(...durations).toFixed(2),
            'Size (bytes)': results[0].size
        };
    }));
}

runTest().catch(console.error);
