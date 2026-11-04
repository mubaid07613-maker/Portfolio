import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TelemetryDashboard from '@/components/sections/TelemetryDashboard';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import CurrentlyLearningSection from '@/components/sections/CurrentlyLearningSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Introduction */}
      <HeroSection />

      {/* 2. Live Telemetry Dashboard & Metrics */}
      <TelemetryDashboard />

      {/* 3. Skills Matrix (C, Python/ML, C#, MATLAB/DSP) */}
      <SkillsSection />

      {/* 4. Featured Projects (C Student System, ML Diabetes, C# Auth, MATLAB DSP) */}
      <ProjectsSection />

      {/* 5. Education & Coursework (BZU Multan, CGPA 3.99/4.00) */}
      <EducationSection />

      {/* 6. Experience & Leadership (Class Representative & Lab Support) */}
      <LeadershipSection />

      {/* 7. Certificates & Professional Credentials */}
      <CertificatesSection />

      {/* 8. Currently Learning & Ambition */}
      <CurrentlyLearningSection />

      {/* 9. Contact & Recruiter Dossier */}
      <ContactSection />
    </div>
  );
}

