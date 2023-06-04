import React, { useEffect } from "react";
import "../StyleSheets/HomeContainer.css";
import ProjectCaroselCard from "../Components/ProjectCaroselCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.css';


import projects from '../Data/ProjectList.js';
import skills from '../Data/Skills.js';
import SkillDisplay from "../Components/SkillDisplay";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomeContainer = () => {


  const projectNodes = projects.map((project) => (
    <SwiperSlide key={project.name}>
      <ProjectCaroselCard project={project} />
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
              When I'm not coding, you'll find me expanding my collection of pub quiz wooden spoons, where I hold the title of reigning champion for coming last!
              I enjoy connecting with fellow tech enthusiasts, exchanging ideas, and discussing the latest trends. Feel free to explore my portfolio to see my dedication and skills in action. Let's work together to create remarkable and inclusive digital experiences!
            </p>
          </div>

          <div className="about-me-img" />
        </section>

        <section className="projects">
          <h1 className="project-section-title">My Projects</h1>

          <div className="project-cards">
            <Swiper
              speed={1500}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              navigation
            >
              {projectNodes}
            </Swiper>
          </div>
        </section>

        <section className="skills">
            <SkillDisplay />
        </section>
      </section>
    </>
  );
};

export default HomeContainer;
