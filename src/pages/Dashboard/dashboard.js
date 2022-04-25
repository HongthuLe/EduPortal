import React from 'react'
import DashboardWrapper from './dashboard.style'
import Widget from './Widget/widget'
import Featured from './Featured/featured'
import Chart from './Chart/chart'
import TableDashboard from './Table/table'


export default function Dashboard() {
  return (
    <DashboardWrapper>
      <div className="widgets">
        <Widget />
      </div>
      <div className="charts">
        <Featured />
        <Chart />
      </div>
      <div className="listContainer">
        <h3>latest added times</h3>
        <TableDashboard />
      </div>
      <br />
    </DashboardWrapper>
  )
}
