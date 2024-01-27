import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function Donut() {
    const [state, setState] = useState({
        options: {
            labels: ['EM-III', 'PCOM', 'PCPF', 'DSA', 'DBMS'],
        },
        series: [44, 55, 41, 17, 15],
    });

    return (
        <>
        
            <Chart
                options={state.options}
                series={state.series}
                type="donut"
                width="380"
            />
        </>
    );
}

export default Donut;
