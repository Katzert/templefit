/**
 * TEMPLEFIT Dashboard Logic - Santa Cruz Pilot Edition
 * Fixed: Scope, Visibility, and Chart Initialization
 */

const FALLBACK_DATA = [
    { "Mes": "Mayo", "Total Ingresos": "10500", "Total Gastos": "9200", "Flujo Acumulado": "1300" },
    { "Mes": "Junio", "Total Ingresos": "10500", "Total Gastos": "9200", "Flujo Acumulado": "2600" },
    { "Mes": "Julio", "Total Ingresos": "10500", "Total Gastos": "9200", "Flujo Acumulado": "3900" },
    { "Mes": "Agosto", "Total Ingresos": "10500", "Total Gastos": "9200", "Flujo Acumulado": "5200" },
    { "Mes": "Septiembre", "Total Ingresos": "10500", "Total Gastos": "9200", "Flujo Acumulado": "6500" },
    { "Mes": "Octubre", "Total Ingresos": "10500", "Total Gastos": "9200", "Flujo Acumulado": "7800" },
    { "Mes": "Noviembre", "Total Ingresos": "10500", "Total Gastos": "9200", "Flujo Acumulado": "9100" },
    { "Mes": "Diciembre", "Total Ingresos": "10500", "Total Gastos": "9200", "Flujo Acumulado": "10400" }
];

const BRAND = {
    navy: '#002147',
    gold: '#C5A059',
    red: '#D32F2F',
    cream: '#F9F6F0'
};

const INCOME_CATEGORIES = [
    { id: 'reto', name: 'Reto 21 Días', field: 'Inscripcion Reto 21 Dias', color: '#002147' },
    { id: 'bebidas', name: 'Bebidas', field: 'Venta de Bebidas', color: '#C5A059' },
    { id: 'snacks', name: 'Snacks', field: 'Venta de Snacks', color: '#D32F2F' },
    { id: 'medicos', name: 'Comisiones Médicas', field: 'Comisiones Medicas', color: '#5D6D7E' },
    { id: 'suplementos', name: 'Suplementos', field: 'Venta de Suplementos', color: '#A04000' },
    { id: 'souvenirs', name: 'Souvenirs', field: 'Ingresos de Souvenirs', color: '#1D8348' }
];

let financialData = [];
let charts = {};

// --- FUNCIONES DE CÁLCULO ---

function calculateScaling(months) {
    if (!financialData || financialData.length === 0) return;
    
    const totalInc = financialData.reduce((acc, d) => acc + parseFloat((d['Total Ingresos'] || '0').toString().replace(/[Bs.,\s]/g, '')), 0);
    const totalExp = financialData.reduce((acc, d) => acc + parseFloat((d['Total Gastos'] || '0').toString().replace(/[Bs.,\s]/g, '')), 0);
    const avgProfit = (totalInc - totalExp) / financialData.length;
    
    const profitDisplay = document.getElementById('scaledProfit');
    const athletesDisplay = document.getElementById('scaledAthletes');

    if (profitDisplay) profitDisplay.innerText = `${Math.round(avgProfit * months).toLocaleString()} Bs.`;
    if (athletesDisplay) athletesDisplay.innerText = Math.round(65 * months).toLocaleString();

    document.querySelectorAll('.phase-card').forEach(c => c.classList.remove('active'));
    let phaseId = 1;
    if (months > 1) phaseId = 2;
    if (months > 6) phaseId = 3;
    const phaseEl = document.getElementById(`phase-${phaseId}`);
    if (phaseEl) phaseEl.classList.add('active');
}

function calculateInitialTotal() {
    if (!financialData || financialData.length === 0) return;
    const totalInc = financialData.reduce((acc, d) => acc + parseFloat((d['Total Ingresos'] || '0').toString().replace(/[Bs.,\s]/g, '')), 0);
    const totalExp = financialData.reduce((acc, d) => acc + parseFloat((d['Total Gastos'] || '0').toString().replace(/[Bs.,\s]/g, '')), 0);
    const avgInc = totalInc / financialData.length;
    const efficiency = (totalInc > 0) ? (1 - (totalExp / totalInc)) * 100 : 0;

    const mainDisplay = document.getElementById('totalIncomeDisplay');
    if (mainDisplay) mainDisplay.innerText = `${Math.round(totalInc).toLocaleString()} Bs.`;
    
    const indicators = document.querySelectorAll('.indicador-valor');
    if (indicators.length >= 2) {
        indicators[0].innerText = `${(avgInc / 1000).toFixed(1)}K`;
        indicators[1].innerText = `${Math.round(efficiency)}%`;
    }
}

// --- FUNCIONES DE UI ---

function setupCharts() {
    if (!financialData.length) return;
    
    const months = financialData.map(d => d.Mes);
    const incomes = financialData.map(d => parseFloat((d['Total Ingresos'] || '0').toString().replace(/[Bs.,\s]/g, '')));
    const expenses = financialData.map(d => parseFloat((d['Total Gastos'] || '0').toString().replace(/[Bs.,\s]/g, '')));
    const accumulated = financialData.map(d => parseFloat((d['Flujo Acumulado'] || '0').toString().replace(/[Bs.,\s]/g, '')));

    // Chart.js global config
    Chart.defaults.color = BRAND.navy;
    Chart.defaults.font.family = "'Outfit', sans-serif";
    Chart.defaults.font.weight = '900';

    const canvas1 = document.getElementById('incomeExpenseChart');
    if (canvas1) {
        if (charts.incomeExpense) charts.incomeExpense.destroy();
        charts.incomeExpense = new Chart(canvas1.getContext('2d'), {
            type: 'bar',
            data: {
                labels: months,
                datasets: [
                    { label: 'Ingresos (Bs.)', data: incomes, backgroundColor: BRAND.gold },
                    { label: 'Gastos (Bs.)', data: expenses, backgroundColor: BRAND.navy }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const canvas2 = document.getElementById('cashFlowChart');
    if (canvas2) {
        if (charts.cashFlow) charts.cashFlow.destroy();
        charts.cashFlow = new Chart(canvas2.getContext('2d'), {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Capital Acumulado (Bs.)',
                    data: accumulated,
                    borderColor: BRAND.red,
                    backgroundColor: 'rgba(211, 47, 47, 0.05)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
}

function setupProfitSimulator() {
    const canvas = document.getElementById('profitDistributionChart');
    const display = document.getElementById('profitPoolValue');
    const legend = document.getElementById('distributionLegend');
    if (!canvas || !display || !legend) return;

    if (charts.profitPie) charts.profitPie.destroy();
    charts.profitPie = new Chart(canvas.getContext('2d'), {
        type: 'doughnut',
        data: { labels: [], datasets: [{ data: [], backgroundColor: INCOME_CATEGORIES.map(c => c.color), hoverOffset: 30 }] },
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            cutout: '70%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    backgroundColor: BRAND.navy,
                    titleColor: '#FFF',
                    bodyColor: '#FFF',
                    padding: 15,
                    callbacks: {
                        label: (ctx) => `${ctx.label}: ${Math.round(ctx.parsed).toLocaleString()} Bs.`
                    }
                }
            }
        }
    });

    const updateBreakdown = () => {
        const totalInc = financialData.reduce((acc, d) => acc + parseFloat((d['Total Ingresos'] || '0').toString().replace(/[Bs.,\s]/g, '')), 0);
        const avgMonthly = totalInc / financialData.length;

        const categoryData = INCOME_CATEGORIES.map(cat => {
            const sum = financialData.reduce((acc, d) => {
                const val = parseFloat((d[cat.field] || '0').toString().replace(/[Bs.,\s]/g, ''));
                return acc + (val || 0);
            }, 0);
            return { ...cat, amount: sum / financialData.length };
        });

        display.innerHTML = `${Math.round(avgMonthly).toLocaleString()} <span class="text-3xl text-temple-gold">Bs.</span>`;
        
        charts.profitPie.data.labels = categoryData.map(c => c.name);
        charts.profitPie.data.datasets[0].data = categoryData.map(c => c.amount);
        charts.profitPie.update();

        legend.innerHTML = '';
        categoryData.forEach(cat => {
            const item = document.createElement('div');
            item.className = 'text-center p-4 border-b border-temple-navy/5';
            item.innerHTML = `
                <div class="w-3 h-3 mx-auto mb-2 rounded-full" style="background-color: ${cat.color}"></div>
                <p class="text-[10px] font-black uppercase text-temple-navy mb-1">${cat.name}</p>
                <p class="text-2xl font-black text-temple-navy italic-sport">${Math.round(cat.amount).toLocaleString()} <span class="text-xs opacity-50">Bs.</span></p>
            `;
            legend.appendChild(item);
        });
    };

    window.refreshProfitPool = updateBreakdown;
    updateBreakdown();
}

function setupCorrectionForm() {
    const form = document.getElementById('correctionForm');
    if (!form) return;
    form.innerHTML = '';
    financialData.forEach((row, i) => {
        const val = parseFloat((row['Total Ingresos'] || '0').toString().replace(/[Bs.,\s]/g, ''));
        const div = document.createElement('div');
        div.className = 'bg-temple-cream/50 p-6 border-l-4 border-temple-gold';
        div.innerHTML = `
            <label class="text-[9px] font-black uppercase text-temple-navy/60 mb-2 block">${row.Mes} 2026</label>
            <input type="number" value="${val}" class="w-full bg-transparent text-temple-navy font-black text-3xl focus:outline-none"
                   oninput="updateData(${i}, this.value)">
        `;
        form.appendChild(div);
    });
}

function updateData(index, newValue) {
    financialData[index]['Total Ingresos'] = newValue;
    
    let acc = 0;
    financialData.forEach((d, i) => {
        const inc = parseFloat((d['Total Ingresos'] || '0').toString().replace(/[Bs.,\s]/g, ''));
        const exp = parseFloat((d['Total Gastos'] || '9200').toString().replace(/[Bs.,\s]/g, ''));
        acc += (inc - exp);
        d['Flujo Acumulado'] = acc.toString();
    });

    setupCharts();
    calculateInitialTotal();
    if (window.refreshProfitPool) window.refreshProfitPool();
    calculateScaling(1);
}

// --- INICIALIZACIÓN ---

function startDashboard() {
    setupCharts();
    setupCorrectionForm();
    calculateInitialTotal();
    setupProfitSimulator();
    calculateScaling(1);
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

async function init() {
    try {
        const res = await fetch('templefit_finanzas_v2.csv');
        if (!res.ok) throw new Error("CSV not found");
        const text = await res.text();
        Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                financialData = results.data.map(row => {
                    const clean = {};
                    Object.keys(row).forEach(k => clean[k.trim()] = row[k]);
                    return clean;
                });
                startDashboard();
            }
        });
    } catch (e) {
        console.warn("Using fallback data", e);
        financialData = JSON.parse(JSON.stringify(FALLBACK_DATA));
        startDashboard();
    }
}

document.addEventListener('DOMContentLoaded', init);

// Global Phase Update for onclick
window.updatePhase = (id, img) => {
    const phaseImage = document.getElementById('phaseImage');
    if (phaseImage) {
        phaseImage.style.opacity = '0';
        setTimeout(() => {
            phaseImage.src = img;
            phaseImage.style.opacity = '1';
        }, 300);
    }
    const monthsMap = { 1: 1, 2: 5, 3: 12 };
    calculateScaling(monthsMap[id]);
};
