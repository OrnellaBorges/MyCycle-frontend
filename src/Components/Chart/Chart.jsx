import { Line } from "react-chartjs-2";
import "chart.js/auto";

const TemperatureLineChart = () => {
    const data = {
        labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
        datasets: [
            {
                label: "Température",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [22, 25, 20, 18, 23],
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default TemperatureLineChart;
