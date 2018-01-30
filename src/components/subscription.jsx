import React, { Component } from 'react';
import '../app.css';

class Subscribe extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<section className="container-fluid sc-inner-grid">
            <div className="sc-topic-list-grid">
                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">
                        <div className="row sc-subscribe-row">
                            <div className="col-xs-6">
                                <div className="sc-feedback-text-style1">
                                        <span>Follow Us</span>
                                </div>
                                <div>
                                    <div className="sc-feedback-text-style2">Facebook</div>
                                    <div className="sc-feedback-text-style2">Facebook</div>
                                </div>
                            </div>
                            <div className="col-xs-6"></div>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>
            </div>
        </section>)
    }
}

export default Subscribe;