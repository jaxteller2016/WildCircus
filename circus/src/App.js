import React from 'react';
import Carousel from 'nuka-carousel';
import Movies from './components/Movies/Movies';
import './App.css';
import ContactForm from "./ContactForm";

export default class extends React.Component {
    render() {
        return (
            <div>
            <Carousel>
                <img src="./Img/1.jpg" alt="Smiley face" height="42" width="42" />
                <img src="./Img/2.jpg" alt="Smiley face" height="42" width="42"/>
                <img src="./Img/3.jpg" alt="Smiley face" height="42" width="42"/>
                <img src="./Img/4.jpg" alt="Smiley face" height="42" width="42" />
                <img src="./Img/5.jpg" alt="Smiley face" height="42" width="42"/>
            </Carousel>
            {/*<Movies />*/}
            <ContactForm/>
            </div>
        );
    }
}
