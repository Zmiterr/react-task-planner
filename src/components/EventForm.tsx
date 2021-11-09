import React, {FC, useState} from 'react';
import {Button, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {DatePicker} from "antd/es";
import {UserInterface} from "../models/UserInterface";
import {EventInterface} from "../models/EventInterface";
import {Moment} from "moment";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface EventFormProps {
    guests: UserInterface[],
    submit: (event: EventInterface) => void
}

const EventForm: FC<EventFormProps> = ({guests, submit}) => {
    const {user} = useTypedSelector(state => state.auth)

    const [event, setEvent] = useState<EventInterface>({
        author: user.username,
        date: '',
        description: '',
        guest: ''
    } as EventInterface)
    const getDate = (date:Moment|null):void => {
        if(date){
            setEvent({...event, date: date.format('yy.MM.DD')})
        }
    }

    const sendForm = () => {
      submit(event)
    }

    return (
        <Form
            name="event"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={sendForm}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required('Please input event description')]}
            >
                <Input
                    value={event.description}
                    onChange ={(e )=>setEvent({...event, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label="Event date"
                name="date"
                rules={[rules.required(), rules.curDate('Set current or future date')]}

            >
                <DatePicker
                    onChange={(date)=>getDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Guest"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange ={(guest: string)=>setEvent({...event, guest})}>
                    {guests.map(guest =>
                        <Select.Option
                            key={guest.username}
                            value={guest.username}
                    >
                        {guest.username}
                    </Select.Option>)}
                </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row justify={'end'}>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Row>

            </Form.Item>
        </Form>
    );
};

export default EventForm;
