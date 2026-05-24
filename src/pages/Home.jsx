import HeroSection from '../components/home/HeroSection';
import WhatWeDo from '../components/home/WhatWeDo';
import ExpertiseCards from '../components/home/ExpertiseCards';
import TechDomains from '../components/home/TechDomains';
import PackagesPreview from '../components/home/PackagesPreview';
import AboutPreview from '../components/home/AboutPreview';
import ContactPreview from '../components/home/ContactPreview';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <ExpertiseCards />
      <TechDomains />
      <PackagesPreview />
      <AboutPreview />
      <ContactPreview />
    </div>
  );
}