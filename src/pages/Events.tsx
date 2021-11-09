import React, {FC, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";

const Events: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (
        <div>
            <EventCalendar events={[]}/>
            <Row justify="center">
                <Button onClick={() => setIsModalVisible(true)}>Add event</Button>
            </Row>
            <Modal
                title="Add event"
                visible={isModalVisible}
                onCancel={()=>setIsModalVisible(false)}
                footer={null}>
                <EventForm />
            </Modal>
        </div>
    );
};

export default Events;
