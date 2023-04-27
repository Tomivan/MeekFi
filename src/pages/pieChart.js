import React from "react";
import Sidebar from "../components/sidenav/sidenav.component";
import PieChartComponent from "../components/pie-chart/pie-chart.components";

const PieChart = () => {
    return(
        <div className="page">
            <Sidebar />
            <PieChartComponent />
        </div>
    )
}

export default PieChart;