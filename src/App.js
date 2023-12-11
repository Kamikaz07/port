import React from 'react';

import {About, Footer, Header, Skills, Testimonial, Work} from './container';
import { Navbar } from './components';
import './App.scss';

fetch('https://0dhryu75.apicdn.sanity.io/v2022-02-01/data/query/production?query=*%5B_type+%3D%3D+%22abouts%22%5D', {
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

const App = () => {
    return (
    <div className="app">
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>

    </div>    
);
}

export default App;