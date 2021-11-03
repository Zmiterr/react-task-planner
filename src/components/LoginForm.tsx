import React, {FC} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {AuthActions} from "../store/reducers/auth/authActions";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";

const LoginForm:FC = () => {
    const dispatch = useDispatch()
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(AuthActions.login(values.username, values.password))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {error&&<p>{error}</p>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
