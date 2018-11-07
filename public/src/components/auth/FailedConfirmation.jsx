import React, { Component } from 'react';
import axios from 'axios';

export default class Confirmation extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 mb-3">
                        <img src={require('../../assests/ChainChatLogo.png')} className="rounded mx-auto d-block" alt="Responsive" width='722px' height='282px' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 m-auto">
                        <div className="card">
                            <div class="card-header text-center font-weight-bold">
                                Verification Status
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text">Not Verified!</p>
                                <a href="/" className="btn btn-primary">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
