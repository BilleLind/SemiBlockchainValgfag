import React from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom';


export function Home() {
    return (
        <div>
            <h1>[Company page]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About page]</h1>
            <Outlet/>
            <nav>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h2>Our Services</h2>
        </div>
    );
}

export function History() {
    return (
        <div>
            <h2>Our Histroy</h2>
        </div>
    );
}

export function Location() {
    return (
        <div>
            <h2>Our Location</h2>
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>[Events page]</h1>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/">Home</Link>

            </nav>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact page]</h1>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/events">Events</Link>
                <Link to="/">Home</Link>

            </nav>
        </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    return (
        <div>
            <h1> Resource not found at {location.pathname}!</h1>
        </div>
    )
}