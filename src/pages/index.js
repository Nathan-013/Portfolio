import { useEffect, useState } from 'react';
import Head from 'next/head'
import Layout from '../Components/Layout/Layout'
import Intro from '../Components/Intro'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import ComponenteVisivel from '@/Components/LazyLoaded'
import 'animate.css';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // console.log(entries)
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated')
          
          if (entry.target.className.includes('nav-ctn')) {
            entry.target.classList.add('animate__slideInDown')
          } else if (entry.target.className.includes('loadingspinner')) {
            entry.target.classList.add('animate__zoomInRight')
          } else {
            entry.target.classList.remove('dn')
            entry.target.classList.add('animate__fadeIn')
          }
        }
      })
    }, { threshold: 0 })

    observer.observe(document.querySelector('.intro-ctn'))
    observer.observe(document.querySelector('.about-ctn'))
    observer.observe(document.querySelector('.skills-ctn'))
    observer.observe(document.querySelector('.projects-ctn'))
    observer.observe(document.querySelector('.nav-ctn'))
    observer.observe(document.querySelector('.loadingspinner'))
    observer.observe(document.querySelector('.social-ctn'))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Portfólio - Nathan Moreira v1.0</title>
      </Head>

      <Layout>
        <main>
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </Layout>
    </>
  )
}