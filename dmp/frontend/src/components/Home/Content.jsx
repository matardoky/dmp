import React from 'react';
import {Layout, Form, Input, Button } from "antd"
import axios from 'axios'
import { authAxios } from '../../utils';

const Content = () => {

    const onFinish = (values) => {
        console.log(values.name)
        authAxios.post("patient/", values)
        
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
       <Layout.Content className='my-4 bandoc__content'>
            <div className="bg-white p-4" style={{ minHeigth: 800}}>
                           
                <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                    <Form.Item
                      label="name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                        <Input />
                    </Form.Item>
     
                
                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </Layout.Content>
    );
}

export default Content;
