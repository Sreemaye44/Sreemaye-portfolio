import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ContactOption from '../Contact/ContactOption';
import Navbar from '../Navbar/Navbar';
import Project from '../Projects/Project';
import SkillBar from '../SkillBar/SkillBar';

const Main = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
                <SkillBar></SkillBar>
            <Project></Project>
            <ContactOption></ContactOption>
                </div>
            
        </div>
    );
};

export default Main;