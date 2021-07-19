import React, { Fragment } from 'react';

import { Header, Footer } from './partials';
import Main from './Main';

import './css/App.css';
import './css/Montserrat.css';

function App() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
}

export default App;
