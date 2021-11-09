import React, {FC} from 'react';
import {Badge, Calendar} from "antd";
import {Moment} from "moment";
import {EventInterface} from "../models/EventInterface";

interface EventCalendarProps {
    events: EventInterface[]
}

const EventCalendar:FC<EventCalendarProps> = ({events}) => {
    function dateCellRender(value: Moment) {
        const listData = events.filter(event => event.date === value.format('yy.MM.DD'))
        return (
            <ul className="events">
                {listData.map((item, index) => (
                    <li key={index} style={{listStyleType:'none'}}>
                        <Badge status='success' text={item.description+'fdsdf'} />
                    </li>
                ))}
            </ul>
        );
    }

    const onPanelChange = (value: Moment, mode: string) => {
        console.log(value.format('YYYY-MM-DD'), mode)
    }
    return (
        <Calendar onPanelChange={onPanelChange} dateCellRender={dateCellRender}/>
    );
};

export default EventCalendar;
