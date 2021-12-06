import React, {Fragment} from 'react';
import { Form } from './components/Form';
import Header from './components/Header';

export function App() {
    return (
        <Fragment>
            <Header />
            <div className="container mt-5">
                <Form />
            </div>
        </Fragment>
    )
}
