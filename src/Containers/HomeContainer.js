import React, { useEffect, useRef, useState } from "react";
import "../StyleSheets/HomeContainer.css";
import ProjectCaroselCard from "../Components/ProjectCaroselCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Routes, Route, Link} from "react-router-dom";

import projects from '../Data/ProjectList.js';
import {skills, learning} from '../Data/Skills.js';
import SkillDisplay from "../Components/SkillDisplay";
import Learn from "../Components/Learn";

import { EffectCube } from "swiper";

import github from '../images/github.png'
import linkedin from "../images/linkedin.png"
import gmail from "../images/gmail.png"


SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomeContainer = () => {

const githubObj = {logo: github, url: 'https://github.com/TomRgrant'}
const linkedinObj = {logo: linkedin, url: 'https://www.linkedin.com/in/thomasgrant0/'}
const [tool, setTool] = useState(true);

// creates list of nodes for Projects
  const projectNodes = projects.map((project) => (
    <SwiperSlide key={project.name}>
      <ProjectCaroselCard project={project} />
    </SwiperSlide>
  ));

// creates list of nodes for Learning skills
  const learningNodes = learning.map((learn) => (
    <SwiperSlide key={learn.name}>
      <Learn learn={learn} />
    </SwiperSlide>
  ));

  const goToLink = (url) => {
    if (url === 'email'){
      navigator.clipboard.writeText('grntthomasronnie@gmail.com')
      setTool(false);

      setTimeout(() => {
        setTool(true);
      }, 1500);
      return null
    }
    window.open(url)
  }



return (
    <>
      <section className="home-container">
        <section className="about-me-header ">
          <div className="about-me-name">
            <p className="name-text first">Thomas</p>
            <p className="name-text last">Grant</p>
            <p className="about-me-description">
            Hey, I'm Tom! I'm a frontend developer with a passion for crafting exceptional web experiences. With a strong focus on frontend development, I bring together technology and creativity to design visually appealing and intuitive interfaces. Beyond coding, I'm driven by a strong passion for leveraging technology for positive change. I believe in the power of tech for good and strive to create digital experiences that make a difference. Diversity and inclusivity are also close to my heart. Let's work together to create extraordinary and inclusive web solutions!
            </p>
            <p className="about-me-description">
            Feel free to explore my portfolio and see firsthand my dedication, skills, and commitment to crafting exceptional and inclusive web solutions.
            </p>
          </div>

          <div className="about-me-img">
            <div className="socials">
              <p className="tool" hidden={tool}>Email Has Been Copied</p>
              <img className="social-img social-img-left" onClick={() => {goToLink(githubObj.url)}} src={githubObj.logo} alt="Link to Github Profile"/>
              <img className="social-img social-img-center" onClick={() => {goToLink(linkedinObj.url)}} src={linkedinObj.logo} alt="Link to LinkedIn Profile"/>
                <img className="social-img social-img-right" onClick={() => {goToLink('email')}} src={gmail} alt="Link to Email"/>
              {/* <img className="youtube-img" /> */}
            </div>
          </div>
        </section>

        <section className="projects " >
          <h1 className="project-section-title">My Projects</h1>

          <div className="project-cards">
            <Swiper
              speed={1500}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              navigation
              loop={true}
            >
              {projectNodes}
            </Swiper>
          </div>
          <div className="bounce-div bounce">
          <div className="projects-page-div ">
                <Link to='/projects' className="project-page-button " onClick={() => window.scrollTo(0, 0)}> View More Details </Link>
            </div>
            </div>
        </section>

        <section className="skills " >
          <h1 className="my-skills-title">My Skills</h1>
          <SkillDisplay className="scroll-y shadow-border" />

          <div className="learning-container">

            <div className="text-container">
              <p className="learning-now-text learning-now-text-left">Currently &lt;</p>
            </div>

            <div className="swiper-container">
              <Swiper
                className="learning-slider"
                speed={1500}
                autoplay={{ delay: 1500 }}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                spaceBetween={-30}
              >
                {learningNodes}
              </Swiper>
              </div>

              <div className="text-container">
                <p className="learning-now-text learning-now-text-right">&gt; Learning</p>
              </div>

          </div>

        </section>
      </section>
    </>
  );
};

export default HomeContainer;
