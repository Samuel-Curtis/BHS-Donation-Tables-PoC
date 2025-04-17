import { TableData } from "../models/TableDataModels";

export const buildingTableData: TableData = {
    headers: [
        'Description',
        'Investment Cost',
        'Claimed By'
    ],
    rowData: [
        {
            description: 'Lobby/Reception Area',
            investment: '$400,000',
            investor: 'Warren Buffett'
        },
        {
            description: 'Vestibule',
            investment: '$250,000',
            investor: ''
        },
        {
            description: 'Training Room',
            investment: '$250,000',
            investor: 'Charlie Munger'
        },
        {
            description: 'Training Closet',
            investment: '$15,000',
            investor: 'John Doe'
        }
    ]
}
    

export const furnishingsTableData: TableData = {
    headers: [
        'Description',
        'Investment Cost',
        'Quantity',
        'Claimed By'
    ],
    rowData: [
        {
            description: 'Lobby Waiting Room',
            investment: '$10,000',
            quantity: 1,
            investor: ''
        },
        {
            description: 'Receptionist Desks and Chairs',
            investment: '$1,500',
            quantity: 3,
            investor: 'Jane Doe, Mike Wazowski'
        },
        {
            description: 'Office 1 & 2',
            investment: '$2,500',
            quantity: 1,
            investor: ''
        }
    ]
}

export const appliancesTableData: TableData = {
    headers: [
        'Description',
        'Investment Cost',
        'Quantity',
        'Claimed By'
    ],
    rowData: [
        {
            description: 'Fridge & Freezer',
            investment: '$800',
            quantity: 1,
            investor: ''
        },
        {
            description: 'Washing Machines',
            investment: '$500',
            quantity: 1,
            investor: ''
        }
    ]
}

export const equipmentTableData: TableData = {
    headers: [
        'Description',
        'Investment Cost',
        'Quantity',
        'Claimed By'
    ],
    rowData: [
        {
            description: 'Grooming Equipment',
            investment: '$300',
            quantity: 1,
            investor: ''
        },
        {
            description: 'Washing Station',
            investment: '$2,500',
            quantity: 1,
            investor: ''
        },
        {
            description: 'Training Room A/V Equipment',
            investment: '$5,000',
            quantity: 1,
            investor: 'Michael Saylor'
        }
    ]
}