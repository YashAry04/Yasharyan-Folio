import React from 'react';
import { motion } from 'framer-motion';

export const certificationEvents = [
  {
    title: 'Build Generative AI Apps and Solutions with No-Code Tools',
    institution: 'Udemy',
    date: 'Sep 1, 2025',
    details: 'Leveraged no-code platforms to build and deploy generative AI solutions. Verified by Udemy.',
    image: '/certs/udemy-gen-ai.png',
    verifyUrl: 'https://ude.my/UC-993a72b3-b6f2-4478-835a-c9e2e0f01bff'
  },
  {
    title: 'Beginning C++ Programming - From Beginner to Beyond',
    institution: 'Udemy',
    date: 'Mar 21, 2026',
    details: '46-hour intensive course covering modern C++14/17/20, STL, and OOP. Verified by Udemy.',
    image: '/certs/udemy-cpp.png',
    verifyUrl: 'https://ude.my/UC-4a806d47-b2f4-4734-853d-374a4c3cc2db'
  },
  {
    title: 'Fundamentals of Network Communication',
    institution: 'University of Colorado',
    date: 'Nov 18, 2024',
    details: 'Core principles of network communication, layering, and protocol stacks. Verified by Coursera.',
    image: '/certs/colorado-fundamentals-network.png',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/2D5UO6WB93LJ'
  },
  {
    title: 'Peer-to-Peer Protocols and Local Area Networks',
    institution: 'University of Colorado',
    date: 'Nov 28, 2024',
    details: 'Analysis of P2P systems and LAN technologies like Ethernet and Wi-Fi. Verified by Coursera.',
    image: '/certs/colorado-p2p-lan.png',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/YP4ADIIY25YD'
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    institution: 'Google',
    date: 'Sep 10, 2024',
    details: 'Foundational concepts of networking, from protocols to the physical layer. Verified by Coursera.',
    image: '/certs/google-networking.png',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/PAJ06XV3KNZA'
  },
  {
    title: 'TCP/IP and Advanced Topics',
    institution: 'University of Colorado',
    date: 'Nov 19, 2024',
    details: 'Expert-level networking concepts including routing, congestion control, and QoS. Verified by Coursera.',
    image: '/certs/colorado-tcp-ip.png',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/5G35JG4T5LDH'
  },
  {
    title: 'Packet Switching Networks and Algorithms',
    institution: 'University of Colorado',
    date: 'Nov 28, 2024',
    details: 'Deep dive into packet switching architectures and performance. Verified by Coursera.',
    image: '/certs/colorado-packet-switching.png',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/3YDR76DC3F80'
  },
  {
    title: 'Introduction to Hardware and Operating Systems',
    institution: 'IBM',
    date: 'Sep 27, 2024',
    details: 'Comprehensive introduction to computer hardware and OS kernel functions. Verified by Coursera.',
    image: '/certs/ibm-hardware-os.png',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/3UNNXN5ECCQT'
  },
  {
    title: 'Introduction to Internet of Things',
    institution: 'NPTEL (IIT Kharagpur)',
    date: 'Jul - Oct 2025',
    details: 'Elite Certification with a consolidated score of 78%. Focused on IoT architecture and protocols.',
    image: '/certs/nptel-iot.png',
    verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS147S105870121810681861'
  },
  {
    title: 'C Programming Language (Summer Training)',
    institution: 'CSE Pathshala',
    date: 'Jun 10 - Jul 28, 2025',
    details: '35+ hours live summer training covering core C concepts and algorithms. Certificate No: CP-20250607-CPL-093.',
    image: '/certs/c-training.png',
    verifyUrl: '#'
  }
];

const educationData = [
  {
    degree: 'B.Tech - Computer Science and Engineering',
    institution: 'Lovely Professional University',
    period: '2023 - Present',
    details: 'CGPA: 7.2'
  },
  {
    degree: 'Intermediate',
    institution: 'Delhi Public School Jamnagar',
    period: '2020 - 2022',
    details: 'Percentage: 82%'
  },
  {
    degree: 'Matriculation',
    institution: 'Delhi Public School Jamnagar',
    period: '2018 - 2020',
    details: 'Percentage: 87%'
  }
];

const Education = ({ id }) => {
  return (
    <div id={id} className="section-container relative pt-8 md:pt-12 pb-48">
      <div className="section-content">
        <div className="mb-16">
          <span className="subsite-header">Foundations</span>
          <h2 className="giant-header">EDUCATION</h2>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl">
          {educationData.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative border-l border-white/10 pl-8 pb-4 last:pb-0 interactive"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-brand" />
              
              <div className="flex flex-col gap-2">
                <span className="mono text-zinc-600 group-hover:text-brand transition-colors text-xs">{edu.period}</span>
                <h3 className="text-2xl md:text-3xl font-cabinet font-black text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-lg md:text-xl text-zinc-500 italic">
                  {edu.institution}
                </h4>
                {edu.details && <p className="mono text-zinc-400 text-xs mt-1">{edu.details}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-24 right-0 opacity-[0.015] pointer-events-none hidden lg:block">
        <h2 className="text-[15vw] font-cabinet font-black leading-none uppercase">LEARN</h2>
      </div>
    </div>
  );
};

export default Education;
