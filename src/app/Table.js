import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';

export function Grid() {
    const ChartData = useSelector(state => state.chartData)
    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>INSID</TableCell>
                        <TableCell>DOM</TableCell>
                        <TableCell>DOW</TableCell>
                        <TableCell>Hour</TableCell>
                        <TableCell>Sum Hourly</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ChartData.map((row,index) => (
                        <TableRow key={index + new Date().getTime()}>
                            <TableCell>{row.insid}</TableCell>
                            <TableCell>
                                {row.dom}
                            </TableCell>
                            <TableCell>
                                {row.dow}
                            </TableCell>

                            <TableCell>{row.hour}</TableCell>
                            <TableCell>{row.SumHourly}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Grid;