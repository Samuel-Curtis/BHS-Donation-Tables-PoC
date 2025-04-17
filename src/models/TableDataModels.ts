export interface TableData {
    headers: string[]
    rowData: TableRow[]
}

export interface TableRow {
    description: string,
    investment: string,
    quantity?: number,
    investor?: string
}