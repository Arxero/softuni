import React, { Component } from 'react'
import '../styles/site.css'


export default class Welcome extends Component {
    render() {
        return (
            <div className="about">
                <h1>Welcome to SeenIt</h1>
                <p>
                    Share interesting links and discuss great content. It's what's happening now.
                </p>
                <p>Sign in or sign up in a second.</p>
            </div>
        )
    }
}

