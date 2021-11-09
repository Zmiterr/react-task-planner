import React from 'react';
import {Button, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {DatePicker} from "antd/es";

const EventForm = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {/*{error&&<p>{error}</p>}*/}
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required('Please input event description')]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Event date"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                label="User"
                name="user"
                rules={[rules.required()]}
            >
                <Select>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
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
