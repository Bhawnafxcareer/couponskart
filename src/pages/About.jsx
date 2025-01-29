import React from 'react'
import AboutBanner from '../components/AboutBanner'
import HeaderOne from '../components/HeaderOne'
import WhyChoose from '../components/WhyChoose'
import FooterOne from '../components/FooterOne'
import OurMission from '../components/OurMission'

const About = () => {
    return (
        <>
            {/* header */}
            <HeaderOne />

            {/* banner */}
            <AboutBanner />

            <OurMission/>

            {/* why choose */}
            <WhyChoose />

            {/* FooterOne */}
            <FooterOne />
        </>
    )
}

export default About
