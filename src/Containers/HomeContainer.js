import React, { useEffect, useRef } from "react";
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


SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomeContainer = () => {

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



return (
    <>
      <section className="home-container">
        <section className="about-me-header">
          <div className="about-me-name">
            <p className="name-text first">Thomas</p>
            <p className="name-text last">Grant</p>
            <p className="about-me-description">
            Hey, I'm Tom! A frontend developer passionate about crafting exceptional web experiences. With a background in video games and a focus on frontend development, I bring together technology and creativity to design visually appealing and intuitive interfaces.
            Beyond my love for coding, I am driven by a strong passion for leveraging technology for positive change. I believe in the power of tech for good and strive to create digital experiences that make a difference. Diversity and inclusivity are also close to my heart. I value embracing different perspectives and fostering inclusive design practices to create remarkable digital experiences that cater to a wider audience.
            Feel free to explore my portfolio to witness firsthand my dedication, skills, and commitment to creating remarkable and inclusive digital experiences. Let's work together to create extraordinary and inclusive web solutions!
            </p>
          </div>

          <div className="about-me-img" />
        </section>

        <section className="projects" >
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
          <div className="projects-page-div">
                <Link to='/projects' className="project-page-button" onClick={() => window.scrollTo(0, 0)}> View More Details </Link>
            </div>
        </section>

        <section className="skills" >
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
