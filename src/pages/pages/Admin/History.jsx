import React from "react";
import { useTable, useSortBy } from "react-table";
import { FaEllipsisH } from "react-icons/fa";
import { BsFilter, BsDownload } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const HistoryTable = () => {
    const nav = useNavigate()
    const data = React.useMemo(
        () => [
            { report: "Report Name", date: "Mar 1, 2024", time: "08:00 AM", impact: "High", record: "record" },
            { report: "Report Name", date: "Mar 1, 2024", time: "08:00 AM", impact: "High", record: "record" },
            { report: "Report Name", date: "Mar 1, 2024", time: "08:00 AM", impact: "Low", record: "record" },
            { report: "Report Name", date: "Mar 1, 2024", time: "08:00 AM", impact: "Medium", record: "record" },
            { report: "Report Name", date: "Mar 1, 2024", time: "08:00 AM", impact: "High", record: "record" },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: "Report",
                accessor: "report",
                sortType: 'basic',
            },
            {
                Header: "Date",
                accessor: (row) => (
                    <>
                        <div>{row.date}</div>
                        <div className="text-sm text-gray-500">{row.time}</div>
                    </>
                ),
                sortType: 'basic',
            },
            {
                Header: "Impact",
                accessor: "impact",
                sortType: 'basic',
            },
            {
                Header: "Result record",
                accessor: "record",
                Cell: ({ value }) => <button onClick={()=>nav('/admin/suggestion')} className="border py-2 bg-white px-6 rounded-full">{value}</button>,
            },
            {
                Header: "",
                accessor: "menu",
                Cell: () => <FaEllipsisH className="text-gray-400" />,
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    );

    return (
        <div className="py-8 px-10 border-1 shadow bg-white rounded-xl border">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-2xl">History</h2>
                <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 border rounded-full px-6 py-2 bg-white">
                        <BsFilter />
                        <span>Sort & Filter</span>
                    </button>
                    <button className="flex items-center space-x-2 border rounded-full px-6 py-2 bg-white">
                        <BsDownload />
                        <span>CSV</span>
                    </button>
                </div>
            </div>
            <table {...getTableProps()} className="w-full mt-8">
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} className="border rounded-full bg-gray-200 border-2">
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}
                                className="px-6 py-3 text-left">
                                <div className="flex items-center space-x-2">
                                    {column.render("Header")}
                                    {column.isSorted ? (
                                        column.isSortedDesc ? (
                                            <AiOutlineArrowDown/>
                                        ) : (
                                            <AiOutlineArrowUp/>
                                        )
                                    ) : null}
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} className="font-bold">
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()} className="px-6 py-4">
                                    {cell.render("Cell")}
                                </td>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryTable;
