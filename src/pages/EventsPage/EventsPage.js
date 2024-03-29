import React, { useState, useEffect } from "react";
import { Card, Typography, Grid, CardContent } from '@mui/material';
import EventImage from './images/EventImage.png';
import EventCard from './EventCard';
import "./EventsPage.css";
import "../../styles.css";
import FadeInComponent from "../../components/FadeInComponent.js";


function EventsPage() {

  /**
   * Fetch events from Google Sheets.
   */
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://sheetdb.io/api/v1/h9ubv4uj59j4c"
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  /**
   * Groups events by month.
   */
  const groupedEvents = events.reduce((acc, event) => {
    const eventMonth = new Date(event.date_time_start).toLocaleString('default', { month: 'long' });
    if (!acc[eventMonth]) {
      acc[eventMonth] = [];
    }
    acc[eventMonth].push(event);
    return acc;
  }, {});

  return (
    <div className="EventsPage">
      <FadeInComponent>
        <img src={EventImage} className="header-image" alt="Header" />
      </FadeInComponent>

      {/* Events Page Description */}
      <div className="spacer"></div>
      <div className="spacer-line"> </div>

      <div className="paragraph-text">
        <p>CWRU MedWish is active year round! Check out some of our upcoming events below to see how you can help your community and the world. More information about upcoming events can be found at the <a href="https://community.case.edu/medwish/home">CWRU MedWish CampusGroup page</a>.</p>
      </div>


      <div className="spacer-line"> </div>
      <div className="spacer"></div>

      {/* Events */}
      {Object.entries(groupedEvents).map(([month, monthEvents]) => (
        <Card key={month} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4" style={{ paddingBottom: '10px' }}>{month}</Typography>

            <Grid container spacing={2}>
              {monthEvents.map((event) => (
                <Grid item key={event.id} xs={12} sm={6} md={4}>
                  <EventCard
                    name={event.name}
                    start={event.date_time_start}
                    end={event.date_time_end}
                    description={event.description}
                    image={event['image_link']}
                    location={event.location}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>

  );
}

export default EventsPage;