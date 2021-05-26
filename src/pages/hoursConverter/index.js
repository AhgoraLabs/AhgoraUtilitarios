import React, { useState, useRef } from "react";
import {Container} from './style.js'
import Button from "@material-ui/core/Button";
import InputMask from 'react-input-mask';

const HoursConverter = () => {
    const [sexagesimal, setSexagesimal] = useState('00:00')
    const [centesimal, setCentesimal] = useState('0.00')

    const sexagesimalRef = useRef()
    const centesimalRef = useRef()

    const removeUnderline = string => string.split('').map(elem => elem === "_" ? '0' : elem).join('');

    const converterToCentesimal = (time) => {
        if (!time) return false;
        const [hours, minutes] = removeUnderline(time).split(':');
        return `${hours}.${Math.floor(minutes * 1.67)}`;
    }

    const converterToSexagesimal = (time) => {
        if (!time) return false;
        let [hours, minutes] = removeUnderline(time).split('.');
        return `${hours}:${Math.round(minutes / 1.67).toString().padStart(2, 0)}`;
    }

    const handleConverter = () => {
        setSexagesimal(converterToCentesimal(sexagesimalRef.current.value));
        setCentesimal(converterToSexagesimal(centesimalRef.current.value));
    }

    return (
        <Container>
            <h1>Conversor de Horas</h1>
            <div>
                <div>
                    <div>
                        <h2>Valor em Sexagesimal </h2>
                        <InputMask ref={sexagesimalRef} mask="99:99"></InputMask>
                    </div>
                    <div>
                        <h3>{sexagesimal}</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Valor em Cetesimal </h2>
                        <InputMask ref={centesimalRef}  mask="99.99" ></InputMask>
                    </div>
                    <div>
                        <h3>{centesimal}</h3>
                    </div>
                </div>
            </div>
            <Button variant="contained" color="primary" style={{marginBottom: 50}} onClick={handleConverter}>Converter</Button>
            <p>*Converta horas de sexagesimal para centesimal e vice versa</p>

        </Container>

    )
}

export default HoursConverter;


