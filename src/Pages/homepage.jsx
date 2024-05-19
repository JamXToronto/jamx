import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Components/index';
import NavBar from '../Components/NavBar';
import ContactFormPopup from '../Components/ContactFormPopup';
import ContactFormStatic from '../Components/ContactFormStatic';
import StackedComponents from '../Components/StackedComponents';
import EventSlider from '../Components/EventSlider';
import VideoComponent from '../Components/VideoComponent';
// import videoSrc from '../assets/tj4g.mp4'; // Import video file
import brain from '../assets/brain.png'; // Import video file
import backgroundImage from '../assets/hero-background.png'
import CompanyBanner from '../Components/CompanyBanner';
import TextContainer from '../Components/TextContainer';
import Footer from '../Components/Footer';
import learnByDoingImage from '../assets/learn-by-doing.png'
import makeStuffThatMattersImage from '../assets/make-stuff-that-matters.png'
import yourNewCrewAwaitsImage from '../assets/your-new-crew-awaits.png'
import tbd_event from '../assets/tbd_event.png'
import ContactForm from '../Components/Input/ContactForm';



const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleComponent = () => {
        setIsOpen(!isOpen);
      };

      const componentsData = [
        { title: 'Make Stuff That Matters', description: 'Ever wanted to change the world with your ideas? This is your playground. Meet cool folks from all corners of Toronto and create solutions that’ll make a difference. It’s teamwork with a side of fun and a splash of revolution.', image: makeStuffThatMattersImage },
        { title: 'Your New Crew Awaits', description: 'Network without the awkward. Hang out with artists, techies, and leaders who are as into making a difference as you are. It’s like finding your tribe, but with more post-it notes and coffee.', image: yourNewCrewAwaitsImage },
        { title: 'Learn By Doing', description: `Boost your brainpower and pick up new skills without snoozing through a lecture. It’s learning the best stuff by actually doing it. You'll leave with your brain buzzing and your resume shining.`, image: learnByDoingImage },
        // Add more data objects for additional components
      ];

      const teamData = [
        { title: 'Component 1', description: 'Description 1', image: brain },
        { title: 'Component 2', description: 'Description 2',  image: brain },
        { title: 'Component 3', description: 'Description 3',  image: brain },
        // Add more data objects for additional components
      ];

      const eventSliderData = [
        { title: 'Jam X Indigenous',  image: tbd_event , date: "TBD"},
        // { title: 'Event 2',  image: "", date: ""},
        // { title: 'Event 3',  image: "" , date: ""},

        // Add more data objects for additional components
      ];



  return (

    <ParentApp>
        <NavBar />
      <HeroPanel>
        <h1>Let's Jam, Toronto!</h1>
        <p>
            Inspiring next generational talent to do better for the world.
        </p>
        <Button onClick={toggleComponent} >Contact Us</Button>
        {/* {isOpen && <ContactFormPopup onClose={toggleComponent}/>} */}
      </HeroPanel>
      <CompanyBanner/>
      <div>
        <TextContainer text="JamX aims to be the go-to destination for creative and entrepreneurial minds to connect, collaborate, and shape the future. Our vision is to create a world where everyone has the chance to drive meaningful change through innovation and success in the startup ecosystem." />
      </div>
      <div id="about">
        <StackedComponents data={componentsData} />
      </div>
      {/* <VideoComponent videoSrc={videoSrc} /> */}
      <div>
        {/* <h1>Meet The Team</h1>
        <StackedComponents data={teamData} /> */}
      </div>
      <div id="upcoming-events">
      <EventSlider eventsData = {eventSliderData}></EventSlider>
      </div>

      {/* <ContactFormStatic/> */}

      <ContactForm></ContactForm>
      
      {/* Other components or content for the homepage */}
    </ParentApp>
  );
};

const HeroPanel = styled.div`
  // background-color: #333;
  background: linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url(${backgroundImage});
  background-size: cover;
  color: white;
  padding: 80px 20px;
  text-align: center;
  min-height: 60vh;
  font-family: regular;
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  p{
    font-size: 1.5rem;
  }

  ${Button}{
    margin: auto auto 0 auto;
    background-color: #0AAEF5;
    border: none;
    color: black;
    border-radius: 0;
  }
`;

const ParentApp = styled.div`
  background-color: #F2EDDC;
`


export default HomePage;