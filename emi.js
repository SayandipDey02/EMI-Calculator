import React, { useState, useEffect } from 'react';

import Slider from '@mui/material/Slider';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@mui/material';

const Emi = () => {
    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [term, setTerm] = useState(0);
    const [emi, setEmi] = useState(0);

    useEffect(() => {
        if (principal > 0 && rate > 0 && term > 0) {
            const monthlyRate = rate / (12 * 100);
            const emiValue = (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
            setEmi(emiValue.toFixed(2));
        } else {
            setEmi(0);
        }
    }, [principal, rate, term]);

    return (
      <div className="main-container container p-3 mb-5 border rounded shadow">
        <div className="emi-calculator">
            <h1>EMI Calculator</h1>
            <div className="slider-container">
                <label>Principal: {principal}</label>
                <Slider
                    min={1000}
                    max={1000000}
                    step={1000}
                    value={principal}
                    onChange={(e, value) => setPrincipal(Number(value))}
                />
            </div>
            <div className="slider-container">
                <label>Rate of Interest: {rate}</label>
                <Slider
                    min={0}
                    max={100}
                    step={0.1}
                    value={rate}
                    onChange={(e, value) => setRate(Number(value))}
                />
            </div>
            <div className="slider-container">
                <label>Term (in months): {term}</label>
                <Slider
                    min={1}
                    max={360}
                    step={1}
                    value={term}
                    onChange={(e, value) => setTerm(Number(value))}
                />
            </div>
            <h2>Calculated EMI: {emi}</h2>
        </div>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>EMI: {emi}</TableCell>
                        <TableCell>Principal: {principal}</TableCell>
                        <TableCell>Rate of Interest: {rate}</TableCell>
                        <TableCell>Term: {term}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div> 
    );
};

export default Emi;