const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June"
];

const sales = [
    12000,
    18000,
    15000,
    22000,
    28000,
    25000
];

const ctx = document.getElementById("salesChart");

const salesChart = new Chart(ctx, {

    type: "bar",

    data: {
        labels: months,

        datasets: [
            {
                label: "Monthly Sales",

                data: sales,

                borderWidth: 1
            }
        ]
    },

    options: {
        responsive: true,

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

});


function addData() {

    const newMonth = "July";

    const newSale = 32000;

    salesChart.data.labels.push(newMonth);

    salesChart.data.datasets[0].data.push(newSale);

    salesChart.update();

}