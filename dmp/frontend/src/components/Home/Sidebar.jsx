import React from 'react';

import { Layout, Menu} from 'antd'
import { HomeOutlined, ManOutlined } from '@ant-design/icons'

const { Sider } = Layout

const Sidebar = () => {
    return (
        <Sider
        >
            <div className="d-flex align-items-center justify-content-center text-white p-4 bandoc__sidebar">
                <ManOutlined className='bandoc__logo' width="" height=""/>

                <span className='ms-2'>bandoc</span>

            </div>
            <Menu
            theme='dark'
            mode='inline'
            >
                <Menu.Item key="1" icon={<HomeOutlined/>}>
                    nav1
                </Menu.Item>

                <Menu.Item key="2" icon={<HomeOutlined/>}>
                    nav 2
                </Menu.Item>

                <Menu.Item key="3" icon={<HomeOutlined/>}>
                    nav 3
                </Menu.Item>

            </Menu>

        </Sider>
    );
}

export default Sidebar;
