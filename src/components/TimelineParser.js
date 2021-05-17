import React, { useState } from 'react';
import styled from 'styled-components';
import Result from './ResultsTimeline';
import DayInfo from './DaysInfo';
import Button from '@material-ui/core/Button';

const ContainerDays = styled.div`
    display: flex;
`

const Timeline = () => {
    const [timeline, setTimeline] = useState({});

    const handleOnChange = (e) => {
        const {value} = e.target;
        setTimeline(JSON.parse(value));
    }

    return (
        <>
        {Object.keys(timeline).length == 0 && (
            <>
            <textarea onChange={handleOnChange} rows='20' cols='150' placeholder='Cole o Json da timeline aqui'/>
            <Button style={{display: 'block'}} variant="contained" color="primary">Parse Timeline</Button>
            </>
        )}
        {Object.keys(timeline).length != 0 && (
            <>
                <Result title='Periodo' value={timeline.period}/>
                <Result title='Periodo está bloqueado?' value={timeline.blocked ? 'Sim': 'Não'}/>
                <Result title='Utiliza sindicato?' value={timeline.groupOfRules.length ? 'Sim': 'Não'}/>
                <ContainerDays>
                {timeline.daysInfos.map(day => (
                    <DayInfo day={day} timeline={timeline} />
                ))}
                </ContainerDays>
            </>
        )}
        </>

    )
}

export default Timeline;