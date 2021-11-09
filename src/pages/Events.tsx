import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useDispatch} from "react-redux";
import {EventActions} from "../store/reducers/event/eventActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {EventInterface} from "../models/EventInterface";

const Events: FC = () => {
    const dispatch = useDispatch()
    const {username} = useTypedSelector(state => state.auth.user)
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(()=>{
        dispatch(EventActions.fetchGuests())
        dispatch(EventActions.fetchEvents(username))
    }, [dispatch])
    const {guests, events} = useTypedSelector(state => state.events)

    const submit = (event: EventInterface) => {
        dispatch(EventActions.createEvent(event))
        setIsModalVisible(false)
    }

    return (
        <div>
            <EventCalendar events={events} />
            <Row justify="center">
                <Button onClick={() => setIsModalVisible(true)}>Add event</Button>
            </Row>
            <Modal
                title="Add event"
                visible={isModalVisible}
                onCancel={()=>setIsModalVisible(false)}
                footer={null}>
                <EventForm guests={guests} submit={submit}/>
            </Modal>
        </div>
    );
};

export default Events;
