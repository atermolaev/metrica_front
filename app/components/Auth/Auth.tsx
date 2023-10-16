import React from 'react';
import styles from './Auth.module.css';
import { Typography, Button, Checkbox, Form, Input } from 'antd';

const { Title } = Typography;

const Auth: React.FC = () => {
    const handleOnFinish = (values: any) => {
        console.log('Success:', values);
    }

    const handleOnFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return <div className={styles.container}>
        <Title>Авторизация</Title>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={handleOnFinish}
            onFinishFailed={handleOnFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    </div>;
}

export default Auth;
