import React from "react";
import { AppWrap } from "../../../wrapper";
import './About.css';
import { images } from "../../../constants";

const aboutData = {
    title: "Little Lemon",
    subTitle: "New York",
    description: 
    `At Little Lemon, our mission is to provide an unforgettable dining experience with our unique blend of culinary excellence and warm hospitality`,
    image1: images.MarioandAdrianA,
    image2: images.resturantChefB,
};
const About = () => {
    return (
        <div
            className="app_about-section"
        >
            
            
                <div className="app_about-description-box">
                    <h1 className="app__about-title">{aboutData.title}</h1>
                    <br />
                    <h4 className="app__about-subtitle">{aboutData.subTitle}</h4>
                    <br />
                    <p className="app__about-description">
                        {aboutData.description}
                            <br />
                            <br />
                        {aboutData.description}
                    </p>
                </div>
           
                <div className="app__about-image-holder">
                        <div className="app__about-image-box img-box-1"
                            style= 
                            {
                                {
                                    backgroundImage: `url(${aboutData.image2})`
                                }
                            }
                        />
                        <div className="app__about-image-box img-box-2" 
                            style=
                            { 
                                {
                                    backgroundImage: `url(${ aboutData.image1 })`
                                } 
                            } 
                        />
                </div>

        </div>
    );
}

export default AppWrap(About, 'About', 'app__about');