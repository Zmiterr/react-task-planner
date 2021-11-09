import React, {FC} from 'react';
import {Calendar} from "antd";
import {Moment} from "moment";

const EventCalendar:FC = () => {
    const onPanelChange = (value: Moment, mode: string) => {
        console.log(value.format('YYYY-MM-DD'), mode)
    }
    return (
        <Calendar onPanelChange={onPanelChange} />
    );
};

export default EventCalendar;
