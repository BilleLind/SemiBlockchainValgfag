import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {Home, About, Events, Contact, Whoops404, Services, History, Location} from './pages'

function App() {
    return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}>
                <Route path="services" element={<Services/>}/>
                <Route path="history" element={<History/>}/>
                <Route path="location" element={<Location/>}/>
            </Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Whoops404 />}></Route>
        </Routes>
    </div>
    )
}

export default App;
