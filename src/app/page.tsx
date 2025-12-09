'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    // Map pathname to section ID
    const sectionMap: { [key: string]: string } = {
      '/': 'hero',
      '/about': 'about',
      '/projects': 'projects',
      '/skills': 'skills',
      '/contact': 'contact',
    };

    const sectionId = sectionMap[pathname];
    if (sectionId && sectionId !== 'hero') {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
