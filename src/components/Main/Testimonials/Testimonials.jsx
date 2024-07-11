import React from "react";
import { AppWrap } from "../../../wrapper";
import { images } from "../../../constants";
import './Testimonials.css';
import { AiFillStar } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations'; 

const Pulse = styled.div`animation: 5s ${keyframes`${pulse}`} infinite`;

const reviews = [
    {image: images.iqsf, name: "Pingu", reviewText: "I'm always impressed with the food quality at this restaurant. The ambiance is cozy, and the staff is incredibly attentive. It's my favorite place for a special dinner!"},
    {image: images.sajal, name: "Pinga", reviewText: "The restaurant's website is very intuitive and easy to navigate. I love how they present the menu and information about reservations. They make it so easy to plan a visit"},
    {image: images.ramsha, name: "Ramsés", reviewText: "I've had the pleasure of collaborating with the kitchen team at this restaurant, and I must say they are at the forefront in culinary techniques and creativity. It's inspiring to see their passion for gastronomy"},
    {image: images.mawra, name: "Juan", reviewText: "The staff at this restaurant demonstrates exceptional professionalism. They are always willing to make recommendations and explain dishes with enthusiasm and knowledge. A top-notch culinary experience!"},
]

const ReviewCard = ({props}) => {
        return (
             <div className="app__testimonials-review">
               <div className="app__testimonials-stars">
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
               </div>
               <div className="app__testimonials-name-image">
                <img className="app__testimonial-review-image" src={props.image} alt={props.name} />
                 <h6 className="app__testimonials-review-name">{props.name}</h6>
               </div>
               <p className="app__testimonials-review-text">{props.reviewText}</p>
             </div>
            );
}
const Testimonials = () => {
    return (
        <div className="app__testimonials-content">
            <h1 className="app__testimonals-title">Testimonials</h1>
            <div className="app__testimonial-review-card">
                {
                    reviews.map((review) => {
                            return (
                                <Pulse>
                                    <ReviewCard props={review} />
                                </Pulse>
                            );
                        })
                }
            </div>
        </div>
    );
}

export default AppWrap(Testimonials, 'testimonials-section', 'app__testimonials');