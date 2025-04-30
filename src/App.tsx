import { useState } from 'react'
import './App.css'
import DonationTable from './components/DonationTable'
import { buildingTableData, furnishingsTableData, equipmentTableData, appliancesTableData } from './data/TableData'
import { TableData } from './models/TableDataModels';

function App() {
  /*
  The useState Hook is used to update the table data (including headers and row data)
  It uses 'Array Destructuring' to define a State Variable and a setter function to update the var

  Below, 'selectedTableData' is the State Variable that is accessible throughout the component
  'setSelectedTableData' is used to update the 'selectedTableData' State Variable

  */
  const [selectedTableData, setSelectedTableData] = useState(buildingTableData);

  // State to track the active button - default to 'Building'
  const [activeButton, setActiveButton] = useState('Building');

  // Button onClick handler
  function handleButtonClick(buttonCategory: string, tableData: TableData) {
    setActiveButton(buttonCategory);
    setSelectedTableData(tableData);
  }


  return (
    <>
  
      <h2 className='table-title'>Donation Options</h2>
      
      <div className="table-buttons">
        <button 
          className={activeButton === 'Building' ? 'active' : ''}
          onClick={() => handleButtonClick('Building', buildingTableData)}>
          Building
        </button>
        
        <button 
          className={activeButton === 'Furnishings' ? 'active' : ''}
          onClick={() => handleButtonClick('Furnishings', furnishingsTableData)}>
          Furnishings
        </button>
        
        <button 
          className={activeButton === 'Appliances' ? 'active' : ''}
          onClick={() => handleButtonClick('Appliances', appliancesTableData)}>
          Appliances
        </button>
        
        <button
          className={activeButton === 'Equipment' ? 'active' : ''}
          onClick={() => handleButtonClick('Equipment', equipmentTableData)}>
          Equipment
        </button>
      </div>

      <div className="table-wrapper">
        <DonationTable 
          headers={ selectedTableData.headers } 
          rowData={ selectedTableData.rowData } 
        />
      </div>

    </>
  )
}

export default App

