/**
 * TEMPLEFIT Dashboard Logic - Pure Spanish & Dynamic Edition
 */

const FALLBACK_DATA = [
    { "Mes": "Abril", "Total Ingresos": "67400", "Total Gastos": "10500", "Flujo Acumulado": "56900" },
    { "Mes": "Mayo", "Total Ingresos": "67400", "Total Gastos": "10500", "Flujo Acumulado": "113800" },
    { "Mes": "Junio", "Total Ingresos": "72000", "Total Gastos": "11000", "Flujo Acumulado": "174800" },
    { "Mes": "Julio", "Total Ingresos": "75000", "Total Gastos": "11500", "Flujo Acumulado": "238300" },
    { "Mes": "Agosto", "Total Ingresos": "80000", "Total Gastos": "12000", "Flujo Acumulado": "306300" },
    { "Mes": "Septiembre", "Total Ingresos": "85000", "Total Gastos": "12500", "Flujo Acumulado": "378800" },
    { "Mes": "Octubre", "Total Ingresos": "90000", "Total Gastos": "13000", "Flujo Acumulado": "455800" },
    { "Mes": "Noviembre", "Total Ingresos": "95000", "Total Gastos": "13500", "Flujo Acumulado": "537300" }
];

let financialData = [];
let charts = {};

const BRAND = {
    navy: '#002147',
    gold: '#C5A059',
    red: '#D32F2F',
    cream: '#F9F6F0'
};

const ROLES_CONFIG = [
    { id: 'founder', name: 'Fundador', percentage: 25, type: 'Estratégico', icon: '👑' },
    { id: 'knowhow', name: 'Know How', percentage: 10, type: 'Regalía', icon: '🧠' },
    { id: 'operator', name: 'Gerencia', percentage: 10, type: 'Fijo', icon: '⚙️' },
    { id: 'marketing', name: 'Marketing', percentage: 5, type: 'Variable', icon: '📢' },
    { id: 'sales', name: 'Ventas', percentage: 10, type: 'Variable', icon: '🤝' },
    { id: 'production', name: 'Producción', percentage: 10, type: 'Variable', icon: '🥗' },
    { id: 'instructors', name: 'Instructores', percentage: 10, type: 'Variable', icon: '🏋️' },
    { id: 'teamfund', name: 'Fondo Equipo', percentage: 5, type: 'Bonos', icon: '⭐' },
    { id: 'reserve', name: 'Reinversión', percentage: 15, type: 'Reserva', icon: '🛡️' }
];

document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
});

async function initDashboard() {
    try {
        const response = await fetch('Ingresos y Gastos - Hoja 1.csv');
        if (!response.ok) throw new Error("CSV no encontrado");
        const csvText = await response.text();
        Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                financialData = results.data;
                startDashboardFlow();
            }
        });
    } catch (error) {
        financialData = JSON.parse(JSON.stringify(FALLBACK_DATA));
        startDashboardFlow();
    }
}

function startDashboardFlow() {
    setupCharts();
    setupCorrectionForm();
    calculateInitialTotal();
    setupProfitSimulator();
    calculateScaling(1);
    
    // Smooth Scrolling para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function setupCharts() {
    const months = financialData.map(d => d.Mes);
    const incomes = financialData.map(d => parseFloat(d['Total Ingresos'].toString().replace(',', '')));
    const expenses = financialData.map(d => parseFloat(d['Total Gastos'] ? d['Total Gastos'].toString().replace(',', '') : '10500'));
    const accumulated = financialData.map(d => parseFloat(d['Flujo Acumulado'].toString().replace(',', '')));

    Chart.defaults.color = BRAND.navy;
    Chart.defaults.font.family = "'Outfit', sans-serif";
    Chart.defaults.font.weight = '900';

    const ctx1 = document.getElementById('incomeExpenseChart').getContext('2d');
    charts.incomeExpense = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                { label: 'Ingresos (Bs.)', data: incomes, backgroundColor: BRAND.gold, barThickness: 30 },
                { label: 'Gastos (Bs.)', data: expenses, backgroundColor: BRAND.navy, barThickness: 30 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 10 } } },
            scales: {
                y: { grid: { color: 'rgba(0, 33, 71, 0.05)' } },
                x: { grid: { display: false } }
            }
        }
    });

    const ctx2 = document.getElementById('cashFlowChart').getContext('2d');
    charts.cashFlow = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Crecimiento de Capital (Bs.)',
                data: accumulated,
                borderColor: BRAND.red,
                backgroundColor: 'rgba(211, 47, 47, 0.05)',
                fill: true,
                tension: 0.4,
                borderWidth: 8,
                pointBackgroundColor: '#FFF',
                pointBorderColor: BRAND.red,
                pointBorderWidth: 4,
                pointRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: 'rgba(0, 33, 71, 0.05)' } },
                x: { grid: { display: false } }
            }
        }
    });
}

function setupCorrectionForm() {
    const form = document.getElementById('correctionForm');
    if (!form) return;
    form.innerHTML = '';
    financialData.forEach((monthData, index) => {
        const val = parseFloat(monthData['Total Ingresos'].toString().replace(',', ''));
        const div = document.createElement('div');
        div.className = 'bg-temple-cream/50 p-6 border-l-4 border-temple-gold shadow-sm hover:shadow-md transition-all group';
        div.innerHTML = `
            <label class="text-[9px] font-black uppercase text-temple-navy/40 mb-2 block tracking-widest">${monthData.Mes} 2026</label>
            <div class="flex items-center space-x-3">
                <span class="text-temple-navy font-black text-sm opacity-30">Bs.</span>
                <input type="number" id="month-${index}" value="${val}" 
                       class="w-full bg-transparent text-temple-navy font-black text-3xl focus:outline-none italic-sport"
                       oninput="updateFinancials(${index}, this.value)">
            </div>
        `;
        form.appendChild(div);
    });
}

function updateFinancials(index, newValue) {
    const val = parseFloat(newValue) || 0;
    financialData[index]['Total Ingresos'] = val.toString();
    
    let currentTotal = 0;
    financialData.forEach((d, i) => {
        const inc = parseFloat(d['Total Ingresos'].toString().replace(',', ''));
        const exp = parseFloat(d['Total Gastos'] ? d['Total Gastos'].toString().replace(',', '') : '10500');
        currentTotal += inc;
        if (i === 0) d['Flujo Acumulado'] = (inc - exp).toString();
        else d['Flujo Acumulado'] = (parseFloat(financialData[i-1]['Flujo Acumulado']) + (inc - exp)).toString();
    });

    charts.incomeExpense.data.datasets[0].data = financialData.map(d => parseFloat(d['Total Ingresos']));
    charts.cashFlow.data.datasets[0].data = financialData.map(d => parseFloat(d['Flujo Acumulado']));
    charts.incomeExpense.update('none');
    charts.cashFlow.update('none');

    document.getElementById('totalIncomeDisplay').innerText = `${Math.round(currentTotal).toLocaleString()} Bs.`;
    const activeBtn = document.querySelector('.scale-btn.active');
    calculateScaling(activeBtn ? parseInt(activeBtn.innerText.split(' ')[0]) : 1);
}

function calculateInitialTotal() {
    const total = financialData.reduce((acc, d) => acc + parseFloat(d['Total Ingresos'].toString().replace(',', '')), 0);
    const display = document.getElementById('totalIncomeDisplay');
    if (display) display.innerText = `${Math.round(total).toLocaleString()} Bs.`;
}

function setupProfitSimulator() {
    const slider = document.getElementById('profitPoolSlider');
    const display = document.getElementById('profitPoolValue');
    const legend = document.getElementById('distributionLegend');
    if (!slider || !display || !legend) return;

    const ctx = document.getElementById('profitDistributionChart').getContext('2d');
    if (charts.profitPie) charts.profitPie.destroy();

    const chartColors = [
        '#002147', '#C5A059', '#D32F2F', '#AAB7B8', '#5D6D7E', 
        '#A04000', '#1D8348', '#1A5276', '#F1C40F'
    ];

    charts.profitPie = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ROLES_CONFIG.map(r => r.name),
            datasets: [{ data: ROLES_CONFIG.map(r => r.percentage), backgroundColor: chartColors, borderWidth: 10, borderColor: '#FFF' }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: { legend: { display: false } }
        }
    });

    const updateLegend = () => {
        const pool = parseFloat(slider.value);
        legend.innerHTML = '';
        ROLES_CONFIG.forEach((role, i) => {
            const amount = (pool * role.percentage / 100).toFixed(0);
            const item = document.createElement('div');
            item.className = 'bg-temple-cream/30 p-6 text-center border-b-2 border-transparent hover:border-temple-gold transition-all';
            item.innerHTML = `
                <div class="w-3 h-3 rounded-full mx-auto mb-2" style="background-color: ${chartColors[i]}"></div>
                <p class="text-[9px] font-black uppercase text-temple-navy/40 mb-1 tracking-widest">${role.name}</p>
                <p class="text-xl font-black text-temple-navy italic-sport">${parseInt(amount).toLocaleString()} <span class="text-[10px] not-italic opacity-40">Bs.</span></p>
            `;
            legend.appendChild(item);
        });
    };

    slider.oninput = function() {
        display.innerHTML = `${parseFloat(this.value).toLocaleString()} <span class="text-3xl not-italic text-temple-gold">Bs.</span>`;
        updateLegend();
    };
    updateLegend();
}

function calculateScaling(sedes) {
    const buttons = document.querySelectorAll('.scale-btn');
    buttons.forEach(btn => {
        const btnSedes = parseInt(btn.innerText.split(' ')[0]);
        if (btnSedes === sedes) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    const currentTotalIncome = financialData.reduce((acc, d) => acc + parseFloat(d['Total Ingresos'].toString().replace(',', '')), 0);
    const avgMonthlyIncome = currentTotalIncome / financialData.length;
    const avgMonthlyProfit = (currentTotalIncome - (13000 * financialData.length)) / financialData.length;
    
    // Proyección Anual
    const profitAnual = avgMonthlyProfit * sedes * 12;
    document.getElementById('scaledProfit').innerText = `${Math.round(profitAnual).toLocaleString()} Bs.`;
}
