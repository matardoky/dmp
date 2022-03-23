import React from 'react';
import { enquireScreen } from 'enquire-js'

import { NavbarDataSource } from './components/Home/data.source';

import { Layout } from 'antd'
import Sidebar from './components/Home/Sidebar';
import Content from './components/Home/Content';
import Navbar from './components/Home/Navbar';

const App = () => {
    return(
        <Layout className='l__container'>
            <Sidebar/>
            <Layout>
                <Navbar/>
                <Content/>

            </Layout>
        </Layout>
    )
}
export default App