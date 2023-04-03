'use client';

import Image from 'next/image'
import Hero from './components/HomePage/Hero'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Projects from './components/HomePage/Projects'
import TechStack from './components/HomePage/TechStack';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Projects></Projects>
      <TechStack/>
    </div>
  
  )
}
