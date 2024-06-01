import React, { useState, useEffect } from 'react';
import { Element, scroller } from "react-scroll";
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import StackedComponents from '../components/StackedComponents';
import UpcomingEvents from '../components/UpcomingEvents';
import VideoComponent from '../components/VideoComponent';
// import videoSrc from '../assets/tj4g.mp4'; // Import video file
import brain from '../assets/brain.png'; // Import video file
import CompanyBanner from '../components/CompanyBanner';
import TextContainer from '../components/TextContainer';
import learnByDoingImage from '../assets/learn-by-doing.png'
import makeStuffThatMattersImage from '../assets/make-stuff-that-matters.png'
import yourNewCrewAwaitsImage from '../assets/your-new-crew-awaits.png'
import tbd_event from '../assets/tbd_event.png'
import HeroPanel from '../components/HeroPanel';
import ContactUs from '../components/ContactUs';


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
        // { title: 'Jam X Indigenous',  image: tbd_event , date: "TBD"},

        // Add more data objects for additional components
      ];

      const scrollOptions = {
        duration: 1000,
        smooth: true,
      };
    
      const contactUsButtonHandler = () => {
        scroller.scrollTo("contact-us", scrollOptions);
      };

  return (

    <ParentApp>
      <NavBar />
      <HeroPanel scrollHandler={contactUsButtonHandler}></HeroPanel>
      <CompanyBanner/>
      <TextContainer text="JamX aims to be the go-to destination for creative and entrepreneurial minds to connect, collaborate, and shape the future. Our vision is to create a world where everyone has the chance to drive meaningful change through innovation and success in the startup ecosystem." />

      <Element id="about">
        <StackedComponents data={componentsData} />
      </Element>

      {/* <VideoComponent videoSrc={videoSrc} /> */}

      <Element>
        {/* <h1>Meet The Team</h1>
        <StackedComponents data={teamData} /> */}
      </Element>

      <Element id="upcoming-events">
        <UpcomingEvents eventsData = {eventSliderData}></UpcomingEvents>
      </Element>

      <Element id="contact-us">
        <ContactUs></ContactUs>
      </Element>

    </ParentApp>
  );
};


const ParentApp = styled.div`
  background-color: #F2EDDC;
`


export default HomePage;