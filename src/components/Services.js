import React, { Component } from 'react';
import Title from './Title';
import sale from '../images/sale.jpg';
import buy from '../images/buy.jpg';
import rent from '../images/rent.jpg';
import commercial from '../images/commercial.jpg';

export default class Services extends Component {
    state={
        services:[
            {
                icon: <img src={buy} alt ="buy property"/>,
                title: "Buy Property",
                info:"Dream City Realty provides you best properties to buy according to your choice and guide you"
            },
            {
                icon: <img src={sale} alt ="sell property"/>,
                title: "Sell Property",
                info:"Dream City Realty helps you to sell your properties at best prices."},
            {
                icon: <img src={rent} alt ="rental property"/>,
                title: "Rental Property",
                info:"Dream City Realty provides a list rental properties like home, office, apartment etc for rent"
            },
            {
                icon: <img src={commercial} alt ="rental property"/>,
                title: "Commercial Property",
                info:"Dream City Realty provides a hot list for commercial properties like offices, recreational center, shop etc" 
            },

        ]
    }
    render() {
        return (
            <section>
                <Title title='Services'/>
                <div className="services-center">
                    {this.state.services.map((item, index) =>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            </article>

                    })}
                </div>
            </section>
        )
    }
}

