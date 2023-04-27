import React from "react";
import Sidebar from "../components/sidenav/sidenav.component";
import LineChartComponent from "../components/line-chart/line-chart.component";

const LineChart = () => {
    return(
        <div className="page">
            <Sidebar />
            <LineChartComponent />
        </div>
    )
}

export default LineChart;