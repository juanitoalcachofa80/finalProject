import React from "react";
import './Main.css';
import Specials from "./Specials/Specials";
import Testimonials from './Testimonials/Testimonials';
import About from  './About/About';

export default function Main() {

    return (
    <>
    <main>
        <Specials />
        <Testimonials />
        <About />
    </main>
    </>
    );
}