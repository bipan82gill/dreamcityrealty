import React, { Component } from 'react'
// import axios from 'axios';
// import './Form.css'
export default class Form extends Component {

    // state= {
    //     name:'',
    //     lastname:'',
    //     phone:'',
    //     email:'',
    //     service:'None',
    //     message:'',
    //     sent:false
    // }
    // //handle inputs
    // handleName=(e)=>{
    //     this.setState({
    //         name:e.target.value
    //     })
    // }

    // handleLastName=(e)=>{
    //     this.setState({
    //         lastname:e.target.value
    //     })
    // }

    // handlePhone=(e)=>{
    //     this.setState({
    //         phone:e.target.value
    //     })
    // }

    // handleEmail=(e)=>{
    //     this.setState({
    //         email:e.target.value
    //     })
    // }
    // handleService=(e)=>{
    //     this.setState({
    //         service:e.target.value
    //     })
    // }


    // handleMessage=(e)=>{
    //     this.setState({
    //         message:e.target.value
    //     })
    // }

    // //end of handle input 

    // formSubmit= (e)=>{
    //     e.preventDefault();
    //     let data ={
    //         name:this.state.name,
    //         lastname:this.state.lastname,
    //         phone:this.state.phone,
    //         email:this.state.email,
    //         service:this.state.service,
    //         message:this.state.message
    //     }
    //     axios.post('/api/forma', data)
    //     .then(res=>{
    //         this.setState({
    //             sent:true,
    //         },this.resetForm())
    //     }).catch(()=>{
    //         console.log("message not sent");
    //     })
    // }

    // for reset form 
    resetForm =() =>{
        this.setState({
            name:'',
            lastname:'',
            phone:'',
            email:'',
            service:'None',
            message:''
        })
        setTimeout(()=>{
            this.setState({
                sent:false,
            })
        },3000)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.formSubmit}>
                    <div className="singleItem">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        name="name" 
                        className="name" 
                        placeholder="Enter your name...."
                        value={this.state.name}
                        onChange={this.handleName}/>
                    </div>

                    {/* <div className="singleItem">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" 
                        name="lastname" 
                        className="lastname" 
                        placeholder="Last name...."
                        value={this.state.lastname}
                        onChange={this.handleLastName}/>
                    </div> */}

                    <div className="singleItem">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" 
                        name="phone" 
                        className="phone" 
                        placeholder="Enter your phone number...."
                        value={this.state.phone}
                        onChange={this.handlePhone}/>
                    </div>

                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        name="email" 
                        className="email" 
                        placeholder="email...."
                        value={this.state.email}
                        onChange={this.handleEmail}
                        required/>
                    </div>

                    <div className="singleItem">
                        <label htmlFor="service">Service Required
                        <select value ={this.state.value} onChange={this.handleService}>
                            <option value="None">None</option>
                            <option value="buy">Buy</option>
                            <option value="sale">Sale</option>
                            <option value="other">Other</option>

                        </select>
                        </label>
                    </div>



                    <div className="textArea singleItem">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" 
                        id="" 
                        cols="30" 
                        rows="5" 
                        placeholder="your message ..." 
                        value={this.state.message}
                        onChange={this.handleMessage}></textarea>
                    </div>

                    <div className={this.state.sent ?'msg msgAppear':'msg'}>Message has been sent.</div>

                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
