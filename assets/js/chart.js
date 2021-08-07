const data = {
    labels: [
        '2020',
        '2021'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50],
        backgroundColor: [
            'rgb(60, 109, 177)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
};

var myChart = new Chart(
    document.getElementById('pieChart'),
    config
);


const data_1 = {
    labels: [
        'Done Event',
        'Upcoming Event'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 100],
        backgroundColor: [
            '#4dec90',
            '#ee4c51'
        ],
        hoverOffset: 4
    }]
};

const config_1 = {
    type: 'doughnut',
    data: data_1,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
};

var myChart = new Chart(
    document.getElementById('pieChart_1'),
    config_1
);