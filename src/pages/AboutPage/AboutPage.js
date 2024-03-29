//AboutPage.js
import React from "react";

import { KeyboardDoubleArrowDown, Refresh, KeyboardDoubleArrowUp } from '@mui/icons-material';
import { Typography, Grid } from '@mui/material';
import About from './images/About.png';
import Hands from './images/Hands.png';
import Equal from './images/Equal.png';
import WhatYouDo from './images/WhatYouDo.png';
import Environment from './images/Environment.png';

import HeaderComponent from "../../components/HeaderComponent.js";
import FadeInComponent from "../../components/FadeInComponent.js";
import "../../styles.css";
import "./AboutPage.css";


const TextIcon = ({ icon, text }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                backgroundColor: '#7294B6',
                borderRadius: '50%',
                width: '90px',
                height: '90px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {React.cloneElement(icon, { style: { fontSize: '80px', fontWeight: 'bold' } })}
            </div>
            <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}>
                <span>{text}</span>
            </div>
        </div>
    );
};




function AboutPage() {
    const videoID = 'dBmMT5bFjwI'

    return (
        <div className="AboutPage">
            <FadeInComponent>
                <img src={About} className="header-image" alt="Header" />
            </FadeInComponent>

            {/* Events Page Description */}
            <div className="spacer"></div>
            <div className="spacer-line"> </div>

            <div className="paragraph-text">
                <p>CWRU MedWish promotes healthcare equity on an international scale assisting MedWish International in processing medical devices. Our priority is to increase access to healthcare globally by repurposing locally donated medical equipment. CWRU MedWish assists in repairing and packaging priority medical devices for use in underserved regions. Our methods of device processing are based on a comprehensive and officially verified understanding of medical device guidelines.</p>
            </div>

            <div className="spacer-line"> </div>
            <div className="spacer"></div>

            <HeaderComponent title="What We Do" orientation="left" />


            <div className="spacer"></div>

            {/* Holds the 3 Stickers for Recover, Repurpose, and Redistribute */}
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <TextIcon icon={<KeyboardDoubleArrowDown />} text="RECOVER" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextIcon icon={<Refresh />} text="REPURPOSE" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextIcon icon={<KeyboardDoubleArrowUp />} text="REDISTRIBUTE" />
                </Grid>
            </Grid>

            {/* Holds the What We Do Paragraph */}
            <Typography variant="body1"
                align="center"
                style={{
                    color: 'gray',
                    fontSize: "150%",
                    fontWeight: "450",
                    padding: '20px'
                }}
            >
                MedWish bridges the gap between abundance and absence, surplus, and scarcity. Our
                work improves access to quality healthcare while promoting enviromental
                stewardship.
            </Typography>
            <div className="spacer"></div>

            <div className="spacer-line"> </div>

            <HeaderComponent title="What You Can Do" orientation="right" />

            <Grid container spacing={3} alignItems="center">
                <Grid container item xs={12} spacing={3} alignItems="center">
                    <Grid item xs={12} md={3}>
                        <img src={Hands} alt="Hands On" />
                    </Grid>
                    <Grid item xs={12} md={9} className="paragraph-text">
                        <p>Get hands-on experience troubleshooting, repairing, and working with medical devices. We have a club workshop space in think[box] dedicated to device repair and modifications.</p>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={3} alignItems="center">
                    <Grid item xs={12} md={3}>
                        <img src={Equal} alt="Equality" />
                    </Grid>
                    <Grid item xs={12} md={9} className="paragraph-text">
                        <p>Help provide equal access to healthcare across the globe right here in Cleveland. Gain an in-depth understanding of medical device and the science behind their function.</p>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={3} alignItems="center">
                    <Grid item xs={12} md={3}>
                        <img src={Environment} alt="Environment" />
                    </Grid>
                    <Grid item xs={12} md={9} className="paragraph-text">
                        <p>Protect the environment by repurposing medical devices and supplies, thus, reducing the harmful effects of medical waste.</p>
                    </Grid>
                </Grid>
            </Grid>

            <div className="spacer"></div>

            <img src={WhatYouDo} alt="What You Do" style={{ borderRadius: '20px', width: '90%', height: 'auto' }} />

            <div className="spacer"></div>
            <div className="spacer-line"> </div>
            <div className="spacer"></div>

            <HeaderComponent title="MedWish International" orientation="left" />

            {/* Holds the MedWish International Paragraph */}
            <div className="paragraph-text">
                <p>We work with the MedWish International organization to help those in need around the world. Visit MedWish International here and watch their video below to see how we assist the larger community.</p>
            </div>

            <div style={{ padding: '20px' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden' }}>
                    <iframe
                        title="MedWish International Video"
                        src={`https://www.youtube.com/embed/${videoID}`}
                        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                    >
                    </iframe>
                </div>
            </div>



            <div className="spacer"></div>


        </div>
    )
};
export default AboutPage;