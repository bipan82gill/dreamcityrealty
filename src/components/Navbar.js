import React, { Component } from 'react';
import logo from '../images/dreamcity.jpg';
import {FaAlignRight} from 'react-icons/fa';
import {FiPhoneCall} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
import {GoLocation} from 'react-icons/go';


export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle =()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                            <img src={logo} alt="Dream City Realty"/>
                            <button type="button" 
                                    className="nav-btn" 
                                    onClick={this.handleToggle}>
                                <FaAlignRight className="nav-icon"/>
                            </button>
                    </div>
                    
                    <ul className={this.state.isOpen ?"nav-links show-nav" : "nav-links"}>
                    <li>
                        <FiPhoneCall/>&nbsp;647-966-1700
                    </li>
                    {/* <li>
                        <HiOutlineMail/>&nbsp;coldbank29@gmail.com
                    </li> */}
                    <li><GoLocation/>Mississauga</li>
                   
                    </ul>
                    </div>
           
               
            </nav>
        )
    }
}
