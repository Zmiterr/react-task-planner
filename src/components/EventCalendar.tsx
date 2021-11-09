import React, {FC} from 'react';
import {Calendar} from "antd";
import {Moment} from "moment";
import {EventInterface} from "../models/EventInterface";

interface EventCalendarProps {
    events: EventInterface[]
}

const EventCalendar:FC<EventCalendarProps> = ({events}) => {
    const onPanelChange = (value: Moment, mode: string) => {
        console.log(value.format('YYYY-MM-DD'), mode)
    }
    return (
        <Calendar onPanelChange={onPanelChange} />
    );
};

export default EventCalendar;
