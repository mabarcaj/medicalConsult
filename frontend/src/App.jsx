import React, { Fragment, useEffect } from 'react';
import { Form } from './components/Form';
import axios from 'axios';
import Header from './components/Header';

export function App() {
    const state = {
        details: []
    }

    useEffect(() => {
        let data;
        axios
            .get("http://localhost:8000/api/doctor/")
            .then((res) => {
                data = res.data;
                console.log(data)
                this.setState({
                    state: data
                });
            }).catch(err => console.log(err))
    })

    return (
        <Fragment>
            <Header />
            <div className="container mt-5">
                <Form state={state}/>
            </div>
        </Fragment>
    )
}
