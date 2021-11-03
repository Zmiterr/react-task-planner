import React, {FC} from 'react';
import {Col, Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";



const Navbar:FC = () => {
    const auth =true;
    const router = useHistory()
    return (
        auth?
        <Layout.Header>
            <Row justify="end">
                <div style={{color: "white"}}>Zmiter</div>
                <Col span={4}>
                    <Menu theme="dark" mode="horizontal" selectable={false} >
                        <Menu.Item key="1" onClick={()=>console.log('exit')}>Logout</Menu.Item>
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
