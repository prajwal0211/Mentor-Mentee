import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function Donut() {

    const [state, setState] = useState({
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['EM-III', 'PCOM', 'PCPF', 'DSA', 'DBMS']
    }
    );

    return (
        <>
            <Chart options={state.options} series={state.series} labels={state.labels} type="donut" width="380" />
        </>
    )
}

export default Donut;