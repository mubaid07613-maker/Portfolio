import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import EngineeringWorkbench from '@/components/interactive/EngineeringWorkbench';
import ProjectsSection from '@/components/sections/ProjectsSection';
import LearningHub from '@/components/sections/LearningHub';
import LeadershipSection from '@/components/sections/LeadershipSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Cockpit & Interactive Terminal Dock */}
      <HeroSection />

      {/* 2. Interactive Engineering Workbench (DSP Oscilloscope, C Pointer Allocator, ML Tree) */}
      <EngineeringWorkbench />

      {/* 3. Featured Projects Bento Grid (Live Code View, Architecture, GitHub Links) */}
      <ProjectsSection />

      {/* 4. Unified Mastery Hub (Currently Learned, Active Roadmap, Coursework, Certificates) */}
      <LearningHub />

      {/* 5. Departmental Leadership & Laboratory Support */}
      <LeadershipSection />

      {/* 6. Direct Contact & Dispatcher */}
      <ContactSection />
    </div>
  );
}
