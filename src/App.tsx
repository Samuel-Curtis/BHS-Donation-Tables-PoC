import { useState } from 'react'
import './App.css'
import DonationTable from './components/DonationTable'
import { buildingTableData, furnishingsTableData, equipmentTableData, appliancesTableData } from './data/TableData'

function App() {
  /*
  The useState Hook is used to update the table data (including headers and row data)
  It uses 'Array Destructuring' to define a State Variable and a setter function to update the var

  Below, 'selectedTableData' is the State Variable that is accessible throughout the component
  'setSelectedTableData' is used to update the 'selectedTableData' State Variable

  */
  const [selectedTableData, setSelectedTableData] = useState(buildingTableData)


  return (
    <>
      <div>
        <h2>Donation Table</h2>
      </div>
      
      <div className="table-buttons">
        <button onClick={() => setSelectedTableData(buildingTableData)}>Building</button>
        <button onClick={() => setSelectedTableData(furnishingsTableData)}>Furnishings</button>
        <button onClick={() => setSelectedTableData(appliancesTableData)}>Appliances</button>
        <button onClick={() => setSelectedTableData(equipmentTableData)}>Equipment</button>
      </div>

      <DonationTable 
        headers={ selectedTableData.headers } 
        rowData={ selectedTableData.rowData } 
      />

    </>
  )
}

export default App

