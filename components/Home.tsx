import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import AboutCards from './AboutCards';
import Sectors from './Sectors';
import AudienceSplit from './AudienceSplit';
import FAQ from './FAQ';
import Contact from './Contact';
import AIChat from './AIChat';
import { Journey } from './Journey';
import StickyContact from './StickyContact';
import HeroVideo from './HeroVideo';

interface HomeProps {
    onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <>
            <Hero />
            <HeroVideo />
            <Stats />
            <AboutCards />
            <Sectors onNavigate={onNavigate} />
            <Journey />
            <AudienceSplit />
            <FAQ />
            <Contact onNavigate={onNavigate} />
            <AIChat />
            <StickyContact />
        </>
    );
};

export default Home;
