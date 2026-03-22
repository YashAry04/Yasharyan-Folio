import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Cpu, Globe, Database, Server, Smartphone, Layout, Send } from 'lucide-react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css'; 

import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Shell from '../components/Shell';

function Home() {
  return (
    <Shell>
      <Hero id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Education id="education" />
      <Certifications id="certifications" />
      <Experience id="experience" />
      <Achievements id="achievements" />
      <Contact id="contact" />
    </Shell>
  );
}

export default Home;
