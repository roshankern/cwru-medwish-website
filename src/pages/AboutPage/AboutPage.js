// AboutPage.js
import React from "react";
import { Card, CardMedia, Typography, Divider } from '@mui/material';
import About from '../Images/About Text.png';
import Recover from '../Images/Recover.png';
import Repurpose from '../Images/REPURPOSE.png';
import Redistribute from '../Images/Redistribute.png';

function AboutPage() {
    return (
        <div>
            {/* holds the image and about text  */}
            <Card>
                {/* holds the header image */}
                <CardMedia
                    component="img"
                    alt="About Image"
                    image={About}
                    style={{ height: "500px", width: "5000px" }}
                />
            </Card>
            {/* the first dividing line */}
            <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '30px 0', color: 'white', width:"1370px", position: "relative", left:"25px", right: "130px" }} />
            {/* holds the text about Medwish */}
            <Typography variant="body1"
                align='center'
                style={{
                    position: 'absolute',
                    right: '20%',
                    left: '20%',
                    fontFamily: 'Work Sans, sans-serif',
                    fontSize: "20px"
                }}
            >CWRU MedWish promotes healthcare equity on an international scale assisting MedWish International in processing medical devices. Our priority is to increase access to healthcare globally by repurposing locally donated medical equipment. CWRU MedWish assists in repairing and packaging priority medical devices for use in underserved regions. Our methods of device processing are based on a comprehensive and officially verified understanding of medical device guidelines.</Typography>
            {/* the second dividing line */}
            <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '240px 0', color: 'white', width:"1370px", position: "relative", left:"25px", right: "130px" }} />
            {/*Text for What We Do */}
            <Typography variant="h1"
                align='center'
                style={{
                    position: 'absolute',
                    right: '23%',
                    left: '20%',
                    bottom: '50%',
                    top: '115%',
                    color: '#6599CC',
                    fontWeight: '800'
                }}
            >
                WHAT WE DO
            </Typography>
            {/*Recover Sticker and Text */}
            <Card>
                <CardMedia
                    component="img"
                    image={Recover}
                    alt="Recover Sticker"
                    height="10px"
                    width="5px"
                    style={{
                        position: "absolute",
                        bottom: "120%",
                        top: "124%",
                        left: "20%",
                        height: '125px',
                        width: '100px'
                    }}
                />
            </Card>
             {/*Repurpose Sticker and Text */}
            <Card>
                <CardMedia
                    component="img"
                    image={Repurpose}
                    alt="Repurpose Sticker"
                    height="10px"
                    width="5px"
                    style={{
                        position: "absolute",
                        bottom: "80%",
                        top: "125%",
                        left: "45%",
                        height: '110px',
                        width: '100px'
                    }}
            />
            </Card>
             {/*Redistribute Sticker and Text */}
            <Card>
                <CardMedia
                    component="img"
                    image={Redistribute}
                    alt="Redistribute Sticker"
                    height="10px"
                    width="5px"
                    style={{
                        position: "absolute",
                        bottom: "80%",
                        top: "125%",
                        left: "70%",
                        height: '100px',
                        width: '110px'
                    }}
            />
            </Card>
             {/* What We Do Body Text */}
            <div style= {{height: "10px", width: "90px"}}>
            <Typography variant= "body1"
                align = "center"
                style={{
                    position: 'absolute',
                    textAlign: 'center',
                    right: '20%',
                    left: '20%',
                    bottom: '100%',
                    top: '145%',
                    color: 'gray',
                    fontFamily: "Work Sans, sans-serif",
                    fontWeight: "200px",
                    fontSize: "17px"
                }}
            >
            MedWish bridges the gap between abundance and absence, surplus, and scarcity. Our 
            work improves access to quality healthcare while promoting enviromental 
            stewardship.
            </Typography>
            <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '120px 0', color: 'white', width:"1370px", position: "relative", left:"25px", right: "130px" }} />
            </div>
            </div>
        );
    }
                    

export default AboutPage;
