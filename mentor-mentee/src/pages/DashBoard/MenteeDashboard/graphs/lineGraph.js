import React, { useState } from 'react';
import Chart from "react-apexcharts";

const LineGraph = () => {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["SEM-I", "SEM-II", "SEM-III", "SEM-IV", "SEM-V", "SEM-VI", "SEM-VII", "SEM-VIII"]
            }
        },
        series: [
            {
                name: "SEM-I",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "SEM-II",
                data: [37, 45, 21, 69, 20, 58, 87, 74]
            }
        ]
    });

    return (
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="500"
            />
        </div>
    );
}

export default LineGraph;
