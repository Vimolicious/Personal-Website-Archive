import React from 'react';

import './css/About.css';
import useResetScroll from '../../hooks/useResetScroll.js';

import retrieveImage from '../../middleware/retrieveImage';

import { Card, ButtonLink, Grid, GridItem } from '../pieces';

import { about } from '../../data';

const About = props => {
    useResetScroll();
    return (
        <main>
            <div className="responsive">
                <h1>It's me.</h1>
            </div>
            <Card heading="Summary" subheading="A little about me.">
                <div className="about-profile" />
                <p className="card-body">{about.full}</p>
            </Card>

            <Card heading="Passions">
                <Grid>
                    <GridItem imgSrc={retrieveImage('passions/design.jpg')}>
                        Design
                    </GridItem>
                    <GridItem imgSrc={retrieveImage('passions/music.jpg')}>
                        Music
                    </GridItem>
                    <GridItem imgSrc={retrieveImage('passions/philosophy.jpg')}>
                        Philosophy
                    </GridItem>
                    <GridItem
                        imgSrc={retrieveImage('passions/programming.jpg')}
                    >
                        Programming (shocker)
                    </GridItem>
                </Grid>
            </Card>

            <Card heading="Contact" subheading="Want to get in touch?">
                <ButtonLink to="/contact">Contact Me</ButtonLink>
            </Card>
        </main>
    );
};

export default About;
