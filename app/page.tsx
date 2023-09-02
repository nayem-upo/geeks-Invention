"use client"
import Header from './components/Header'
import Banner from './components/Banner'
import FintechSection from './components/FintechSection'
import IndustrialSection from './components/IndustrialSection'
import SmartEducationSection from './components/SmartEducationSection'
import CheckOutSection from './components/CheckOutSection'
import RecentClients from './components/RecentClients'
import SoftwareSection from './components/SoftwareSection'
import Teams from './components/Teams'
import MessagesSection from './components/MessagesSection'
import Footer from './components/Footer'
import Menubar from './components/Menubar'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const sectionColors = ['bg-[#19181E]', 'bg-[#3F2CAA]', 'bg-[#01B5AC]', 'bg-[#19181E]', 'bg-[#23252c]', 'bg-[#23252c]', 'bg-[#23252c]', 'bg-[#]', 'bg-[#19181E]', 'bg-[#19181E]'];
const headerColers = ['bg-[#16181cc1]', 'bg-[#3f2caae4]', 'bg-[#01b5acda]', 'bg-[#19181edc]', 'bg-[#23252cdf]', 'bg-[#23252cdf]', 'bg-[#23252cdf]', 'bg-[#23252cdf]', 'bg-[#23252cdf]', 'bg-[#19181edc]', 'bg-[#23252cdf]', 'bg-[#23252cdf]', 'bg-[#16181cc1]'];

export default function Home() {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState(sectionColors[0]);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll('.section')) as HTMLElement[];

    sections.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        onEnterBack: () => setCurrentSection(index - 1),
        onEnter: () => setCurrentSection(index),
      });
    });
  }, []);

  useEffect(() => {
    setHeaderBackgroundColor(sectionColors[currentSection]);
  }, [currentSection]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        const sectionIndex = Math.floor(scrollPosition / window.innerHeight);

        setHeaderBackgroundColor(headerColers[sectionIndex]);
      });
    }
  }, []);

  return (
    <main className={`${sectionColors[currentSection]} min-h-screen max-w-7xl mx-auto duration-500`}>
      <Header headerBackgroundColor={headerBackgroundColor} />
      <section className='section'>
        <Banner />
      </section>
      <section className='section'>
        <FintechSection />
      </section>
      <section className='section'>
        <IndustrialSection />
      </section>
      <section className='section'>
        <SmartEducationSection />
      </section>
      <section className='section'>
        <CheckOutSection />
      </section>
      <section className='section'>
        <RecentClients />
      </section>
      <section className='section'>
        <SoftwareSection />
      </section>
      <section className='section bg-[#23252C]'>
        <Teams />
      </section>
      <section className='section'>
        <MessagesSection />
        <Footer />
      </section>
      <Menubar />
    </main>
  )
}
