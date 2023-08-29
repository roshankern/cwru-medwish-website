import React from "react";
import { Typography, Grid } from '@mui/material';

import HomePageImage from './images/HomePage.png';
import HomeImage1 from './images/HomeImage1.png';
import HomeImage2 from './images/HomeImage2.png';

import HeaderComponent from "../../components/HeaderComponent.js";
import "../../styles.css";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <img src={HomePageImage} className="header-image" alt="Header" />

      <div className="spacer"></div>
      <div className="spacer-line"> </div>

      <HeaderComponent title="About Us" orientation="left" />

      <Grid container spacing={3} style={{ paddingLeft: '20px', paddingRight: '20px' }} alignItems="center">
        <Grid item xs={12} md={6}>
          <div className="paragraph-text">
            <p>We are a group of Case Western Reserve University students who work with the not-for-profit organization MedWish International to repair discarded medical equipment and ship this equipment to countries in need.</p>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src={HomeImage1} className="header-image" alt="Header" style={{ borderRadius: '20px' }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <img src={HomeImage2} className="header-image" alt="Header" style={{ borderRadius: '20px' }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="paragraph-text">
            <p>CWRU MedWish takes volunteer trips downtown to the headquarters of MedWish International. We triage, test, repair and package medical devices. In addition to our regular trips, we host informational workshops for members to learn more about biomedical engineering.</p>
          </div>
        </Grid>
      </Grid>


      <div className="spacer-line"> </div>
      <div className="spacer"></div>
    </div>
  );
}

export default HomePage;
