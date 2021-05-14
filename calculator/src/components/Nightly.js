import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    left: 60%;
    margin: auto;
    font-family: 'Lucida Sans Unicode','Lucida Grande',sans-serif;
    font-size: 13px;
    color: #757575;
`

const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    margin-top: 25px;

`

const TextAreaNoResize = styled.textarea`
    resize: none;
`

const Label = styled.label`
    font-size: 25px;
    font-weight: bold;
    margin-right: 5px;
`

const Input = styled.input`
    max-width: 70px;
    text-align: center;
    height: 30px;
    border-radius: 10px;
`

const NightlyFactor = ({nightlyTime, setTime}) => {
    const handleOnChangeValue = ({target: {value, name}}) => {
        if(isNaN(value)) return;

        setTime(nightlyTime => ({
            ...nightlyTime,
            [name]: value
        }))
    }
    return (
        <>
        <Container>
            <ContainerRow>
            <Label> Horas</Label>
            <Input  name='hours' value={nightlyTime?.hours || ''} onChange={handleOnChangeValue}/>
            <Label> Minutos</Label>
            <Input name='minutes' value={nightlyTime?.minutes || ''} onChange={handleOnChangeValue} />
        </ContainerRow>
            <TextAreaNoResize readOnly cols='100' rows='10'> </TextAreaNoResize>
            <ContainerRow>
                <Button variant="contained" color="primary">
                    Adicional Noturno
                </Button>
                <Button variant="contained" color="secondary">
                    Período Trabalhado
                </Button>
            </ContainerRow>
        </Container>
        </>
    )
}

export default NightlyFactor;