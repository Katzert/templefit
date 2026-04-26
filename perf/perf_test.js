const http = require('http');
const { performance } = require('perf_hooks');

const TARGET_URL = 'http://localhost:3000/templefit/';
const ITERATIONS = 10;
const CONCURRENCY = 2;

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
    console.log(`Starting performance test on ${TARGET_URL}...`);
    console.log(`Iterations: ${ITERATIONS}, Concurrency: ${CONCURRENCY}\n`);

    const results = [];
    
    // Warm up
    try {
        await measureRequest(TARGET_URL);
    } catch (e) {
        console.error('Server is not reachable. Make sure "npm run dev" is running.');
        process.exit(1);
    }

    for (let i = 0; i < ITERATIONS; i += CONCURRENCY) {
        const batch = [];
        for (let j = 0; j < CONCURRENCY && (i + j) < ITERATIONS; j++) {
            batch.push(measureRequest(TARGET_URL));
        }
        
        const batchResults = await Promise.all(batch);
        results.push(...batchResults);
        process.stdout.write('.');
    }

    console.log('\n\n--- Results ---');
    const durations = results.map(r => r.duration);
    const avg = durations.reduce((a, b) => a + b, 0) / durations.length;
    const min = Math.min(...durations);
    const max = Math.max(...durations);

    console.log(`Average Response Time: ${avg.toFixed(2)}ms`);
    console.log(`Min Response Time: ${min.toFixed(2)}ms`);
    console.log(`Max Response Time: ${max.toFixed(2)}ms`);
    console.log(`Total Requests: ${results.length}`);
    const statusCodes = [...new Set(results.map(r => r.statusCode))];
    console.log(`Status Codes found: ${statusCodes.join(', ')}`);
    console.log(`Successful Requests (200): ${results.filter(r => r.statusCode === 200).length}`);
}

runTest().catch(console.error);
