import { JSX } from "react";
import { TableData } from "../models/TableDataModels";
import './DonationTable.css'

function DonationTable(props: TableData) {

    const headers: JSX.Element[] = props.headers.map(header => {
        // For the Investment Cost header cell I want to add '(Each)' on a new line.
        if (props.headers.length > 3 && header === 'Investment Cost') {
            return <th className="table-header">{header}<br/>{'(Each)'}</th> 
        } else {
            return <th className="table-header">{header}</th>
        }
    });

    const rows: JSX.Element[] = props.rowData.map(row => {
        if (props.headers.length > 3) {
            return <tr className="row" key={row.description}>
                        <td>{row.description}</td>
                        <td>{row.investment}</td>
                        <td>{row.quantity}</td>
                        <td>{row.investor}</td>
                    </tr>
        } else {
            return <tr className="row" key={row.description}>
                        <td>{row.description}</td>
                        <td>{row.investment}</td>
                        <td>{row.investor}</td>
                    </tr>
        }
    });

    return(
        <table className="donation-table">
            <thead className="table-header-group">
                <tr>
                    { headers }
                </tr>
            </thead>

            <tbody className="table-rows">
                { rows }
                { rows }
                { rows }
                { rows }
            </tbody>
        </table>
    )
}

export default DonationTable;