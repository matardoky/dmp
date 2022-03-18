import React from 'react';
import { enquireScreen } from 'enquire-js'


import Navbar from './components/Home/Navbar';
import { NavbarDataSource } from './components/Home/data.source';



let isMobile
enquireScreen((b) => {
    isMobile = b
})

const { location = {}} = typeof window !== 'undefined' ? window : {}

export default class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isMobile,
            show: !location.port
        }
    }

    componentDidMount(){
        enquireScreen((b)=>{
           this.setState({ isMobile: !!b })
        })

        if(location.port){
            setTimeout(()=>{
                this.setState({
                    show:true,
                }),
                500
            })
        }
    }

    render(){

        const children = [
            <Navbar 
            id="nav"
            key="nav"
            isMobile={this.state.isMobile}
            dataSource={NavbarDataSource}
            />,
        ]
    
        return (
            <div className='template-wrapper'
            ref={(d)=> {
                this.dom = d
            }}
            >
               {this.state.show && children}
            </div>
        );


    }
}
