import React, {FC} from 'react';
import {Col, Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActions} from "../store/reducers/auth/authActions";



const Navbar:FC = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const dispatch = useDispatch()
    const router = useHistory()

    const logout = () => {
      dispatch(AuthActions.logout())
    }
    return (
        isAuth?
        <Layout.Header>
            <Row justify="end">
                <div style={{color: "white"}}>{user.username}</div>
                <Col span={4}>
                    <Menu theme="dark" mode="horizontal" selectable={false} >
                        <Menu.Item key="1" onClick={()=>logout()}>Logout</Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Layout.Header>
        :
            <Layout.Header>
                <Row justify="end">
                    <Col span={4}>
                        <Menu theme="dark" mode="horizontal" selectable={false} >
                            <Menu.Item key="1" onClick={()=>router.push(RouteNames.LOGIN)}>Login</Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Layout.Header>
    );
};

export default Navbar;
