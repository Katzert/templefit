/**
 * TEMPLEFIT Dashboard Logic - Investor Victory Edition
 * Handles CSV Loading, Interactive Charts, and Profit Simulation
 */

// Dataset de respaldo (Fallback) con datos optimizados
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

// Configuration for Roles & Profits (Investor View)
const ROLES_CONFIG = [
    { id: 'founder', name: 'Fundador', percentage: 25, type: 'Estratégico', icon: '👑', desc: 'Gestión y visión' },
    { id: 'knowhow', name: 'Know How', percentage: 10, type: 'Regalía', icon: '🧠', desc: 'Propiedad Intelectual' },
    { id: 'operator', name: 'Manager', percentage: 10, type: 'Fijo', icon: '⚙️', desc: 'Operación diaria' },
    { id: 'marketing', name: 'Marketing', percentage: 5, type: 'Variable', icon: '📢', desc: 'Captación de atletas' },
    { id: 'sales', name: 'Ventas', percentage: 10, type: 'Variable', icon: '🤝', desc: 'Conversión (Closers)' },
    { id: 'production', name: 'Producción', percentage: 10, type: 'Variable', icon: '🥗', desc: 'Alimentos y Snack Bar' },
    { id: 'instructors', name: 'Instructores', percentage: 10, type: 'Variable', icon: '🏋️', desc: 'Ejecución técnica' },
    { id: 'teamfund', name: 'Fondo Equipo', percentage: 5, type: 'Bonus', icon: '⭐', desc: 'Incentivos KPIs' },
    { id: 'reserve', name: 'Reserva', percentage: 15, type: 'Reserva', icon: '🛡️', desc: 'Crecimiento de Capital' }
];

document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
});

async function initDashboard() {
    console.log("Iniciando Dashboard...");
    
    try {
        const response = await fetch('Ingresos y Gastos - Hoja 1.csv');
        if (!response.ok) throw new Error("CSV not found");
        
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
    renderTeamCards();
    calculateScaling(1);
}

function setupCharts() {
    const months = financialData.map(d => d.Mes);
    const incomes = financialData.map(d => parseFloat(d['Total Ingresos'].toString().replace(',', '')));
    const expenses = financialData.map(d => parseFloat(d['Total Gastos'] ? d['Total Gastos'].toString().replace(',', '') : '10500'));
    const accumulated = financialData.map(d => parseFloat(d['Flujo Acumulado'].toString().replace(',', '')));

    // Chart.js Brand Config
    Chart.defaults.color = '#002147';
    Chart.defaults.font.family = 'Outfit';

    // Bar Chart
    const ctx1 = document.getElementById('incomeExpenseChart').getContext('2d');
    charts.incomeExpense = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Ingresos (Bs.)',
                    data: incomes,
                    backgroundColor: '#C5A059',
                    borderRadius: 8
                },
                {
                    label: 'Gastos (Bs.)',
                    data: expenses,
                    backgroundColor: '#002147',
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { usePointStyle: true, font: { weight: 'bold' } } },
                title: { display: true, text: 'AUDITORÍA DE FLUJO MENSUAL', font: { size: 16, weight: '900' }, padding: 20 }
            },
            scales: {
                y: { grid: { color: 'rgba(0,0,0,0.03)' }, ticks: { font: { weight: 'bold' } } },
                x: { grid: { display: false } }
            }
        }
    });

    // Line Chart
    const ctx2 = document.getElementById('cashFlowChart').getContext('2d');
    charts.cashFlow = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Flujo Acumulado (Bs.)',
                data: accumulated,
                borderColor: '#D32F2F',
                backgroundColor: 'rgba(211, 47, 47, 0.05)',
                fill: true,
                tension: 0.4,
                borderWidth: 4,
                pointBackgroundColor: '#FFFFFF',
                pointBorderColor: '#D32F2F',
                pointBorderWidth: 3,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: { display: true, text: 'TRAYECTORIA DE CAPITAL ACUMULADO', font: { size: 16, weight: '900' }, padding: 20 }
            },
            scales: {
                y: { grid: { color: 'rgba(0,0,0,0.03)' }, ticks: { font: { weight: 'bold' } } },
                x: { grid: { display: false } }
            }
        }
    });
}

function setupCorrectionForm() {
    const form = document.getElementById('correctionForm');
    form.innerHTML = '';
    financialData.forEach((monthData, index) => {
        const val = parseFloat(monthData['Total Ingresos'].toString().replace(',', ''));
        const div = document.createElement('div');
        div.className = 'bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-temple-gold transition-all';
        div.innerHTML = `
            <div class="flex justify-between items-center mb-1">
                <label for="month-${index}" class="text-[9px] font-black uppercase tracking-widest text-slate-400">${monthData.Mes} 2026</label>
            </div>
            <div class="flex items-center space-x-2">
                <span class="text-temple-navy font-black text-sm">Bs.</span>
                <input type="number" id="month-${index}" value="${val}" 
                       class="w-full bg-transparent text-temple-navy font-black text-xl focus:outline-none"
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
        
        if (i === 0) {
            d['Flujo Acumulado'] = (inc - exp).toString();
        } else {
            const prevAcc = parseFloat(financialData[i-1]['Flujo Acumulado'].toString().replace(',', ''));
            d['Flujo Acumulado'] = (prevAcc + (inc - exp)).toString();
        }
    });

    charts.incomeExpense.data.datasets[0].data = financialData.map(d => parseFloat(d['Total Ingresos']));
    charts.cashFlow.data.datasets[0].data = financialData.map(d => parseFloat(d['Flujo Acumulado']));
    
    charts.incomeExpense.update('none');
    charts.cashFlow.update('none');

    document.getElementById('totalIncomeDisplay').innerText = `${Math.round(currentTotal).toLocaleString()} Bs.`;
    
    const activeBtn = document.querySelector('.scale-btn.active');
    const sedes = activeBtn ? parseInt(activeBtn.innerText.split(' ')[0]) : 1;
    calculateScaling(sedes);
}

function calculateInitialTotal() {
    const total = financialData.reduce((acc, d) => acc + parseFloat(d['Total Ingresos'].toString().replace(',', '')), 0);
    document.getElementById('totalIncomeDisplay').innerText = `${Math.round(total).toLocaleString()} Bs.`;
}

function setupProfitSimulator() {
    const slider = document.getElementById('profitPoolSlider');
    const display = document.getElementById('profitPoolValue');
    const legend = document.getElementById('distributionLegend');
    
    const ctx = document.getElementById('profitDistributionChart').getContext('2d');
    if (charts.profitPie) charts.profitPie.destroy();

    const chartColors = [
        '#C5A059', '#002147', '#D32F2F', '#004080', '#5D6D7E', 
        '#A04000', '#1D8348', '#1A5276', '#F1C40F'
    ];

    charts.profitPie = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ROLES_CONFIG.map(r => r.name),
            datasets: [{
                data: ROLES_CONFIG.map(r => r.percentage),
                backgroundColor: chartColors,
                borderWidth: 5,
                borderColor: '#FFFFFF'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '78%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#002147',
                    padding: 15,
                    titleFont: { size: 14, weight: 'bold' },
                    callbacks: {
                        label: function(context) {
                            const pool = parseFloat(slider.value);
                            const amount = (pool * context.raw / 100).toFixed(0);
                            return `${context.label}: ${parseInt(amount).toLocaleString()} Bs. (${context.raw}%)`;
                        }
                    }
                }
            }
        }
    });

    const updateLegend = () => {
        const pool = parseFloat(slider.value);
        legend.innerHTML = '';
        ROLES_CONFIG.forEach((role, i) => {
            const amount = (pool * role.percentage / 100).toFixed(0);
            const item = document.createElement('div');
            item.className = 'legend-item flex flex-col items-center text-center';
            item.innerHTML = `
                <div class="w-3 h-3 rounded-full mb-3 shadow-sm" style="background-color: ${chartColors[i]}"></div>
                <span class="text-[10px] font-black uppercase leading-none mb-1 text-slate-400">${role.name}</span>
                <span class="text-lg font-black text-temple-navy italic">${parseInt(amount).toLocaleString()} <span class="text-[10px] not-italic opacity-40">Bs.</span></span>
                <span class="text-[9px] font-bold text-temple-gold">${role.percentage}%</span>
            `;
            legend.appendChild(item);
        });
    };

    slider.oninput = function() {
        const val = parseFloat(this.value);
        display.innerText = `${val.toLocaleString()} Bs.`;
        updateLegend();
    };

    updateLegend();
}

function renderTeamCards() {
    const grid = document.getElementById('teamGrid');
    if (!grid) return;
    grid.innerHTML = '';
    ROLES_CONFIG.filter(r => r.id !== 'reserve').forEach(role => {
        const card = document.createElement('div');
        card.className = 'bg-white p-8 rounded-[2rem] shadow-xl border-b-8 border-slate-100 hover:border-temple-gold transition-all group';
        card.innerHTML = `
            <div class="flex justify-between items-start mb-6">
                <div class="text-4xl group-hover:scale-125 transition-transform">${role.icon}</div>
                <span class="text-[9px] font-black px-3 py-1 bg-slate-100 text-slate-500 rounded-full uppercase tracking-widest">${role.type}</span>
            </div>
            <h5 class="font-black text-xl text-temple-navy italic leading-none mb-2">${role.name}</h5>
            <p class="text-xs text-slate-400 font-medium mb-6">${role.desc}</p>
            <div class="pt-4 border-t border-slate-50 flex justify-between items-center">
                <span class="text-[10px] font-bold text-slate-400 uppercase">Equity / Fee</span>
                <span class="text-xl font-black text-temple-red italic">${role.percentage}%</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function calculateScaling(sedes) {
    document.querySelectorAll('.scale-btn').forEach(btn => {
        if (parseInt(btn.innerText.split(' ')[0]) === sedes) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const currentTotalIncome = financialData.reduce((acc, d) => acc + parseFloat(d['Total Ingresos'].toString().replace(',', '')), 0);
    const avgMonthlyIncome = currentTotalIncome / financialData.length;
    const avgMonthlyProfit = (currentTotalIncome - (13000 * financialData.length)) / financialData.length;
    
    const scaledIncome = avgMonthlyIncome * sedes * 12; // Annual
    const scaledProfit = avgMonthlyProfit * sedes * 12; // Annual
    const scaledAthletes = 65 * sedes;

    document.getElementById('scaledIncome').innerText = `${Math.round(scaledIncome).toLocaleString()} Bs.`;
    document.getElementById('scaledProfit').innerText = `${Math.round(scaledProfit).toLocaleString()} Bs.`;
    document.getElementById('scaledAthletes').innerText = scaledAthletes.toLocaleString();
}
