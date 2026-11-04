import type { Metadata } from 'next';
import './globals.css';
import InteractiveCanvas from '@/components/canvas/InteractiveCanvas';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Ubaid Ur Rehman | Computer Engineering & Machine Learning',
  description:
    'Developer portfolio and engineering dashboard of Ubaid Ur Rehman, Computer Engineering student at BZU Multan. Systems programming in C, ML classification pipelines with scikit-learn, and MATLAB signal processing.',
  keywords: [
    'Ubaid Ur Rehman',
    'Computer Engineering',
    'BZU Multan',
    'Software Engineer',
    'Machine Learning',
    'scikit-learn',
    'C Programming',
    'DSP',
    'MATLAB',
    'Portfolio'
  ],
  authors: [{ name: 'Ubaid Ur Rehman' }],
  openGraph: {
    title: 'Ubaid Ur Rehman | Computer Engineering Portfolio',
    description:
      'Computer Engineering student at BZU Multan with expertise in C, Python, ML with scikit-learn, and MATLAB signal processing.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#08090C] text-slate-100 min-h-screen selection:bg-sky-500/30 selection:text-sky-200 relative antialiased">
        {/* Interactive Live Wallpaper Canvas */}
        <InteractiveCanvas />

        {/* Global Navigation Dock */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}

