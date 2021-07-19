import React, { Fragment } from 'react';

import useResetScroll from '../../hooks/useResetScroll.js';

import { Card, ButtonLink, Grid, GridItem, List, ListItem, ProjectGrid } from '../pieces';
import './css/Landing.css';

import { experiences, goals, about } from '../../data';
import images from '../../img/exp';

const Landing = props => {
    useResetScroll();
    return (
        <Fragment>
            <div id="hero-img">Vimolicious</div>
            <main landing="">
                <Card heading="Hello, World!" subheading={about.brief}>
                    <ButtonLink to="/me">More About Me</ButtonLink>
                </Card>

                <Card heading="Recent Projects">
                    <ProjectGrid top={3} />
                    <ButtonLink to="/projects">See More</ButtonLink>
                </Card>

                <Card
                    heading="Experience"
                    subheading="All of the technologies I'm semi-familar with!"
                >
                    <Grid>
                        {experiences.map(({ title, description, id }) => (
                            <GridItem
                                key={id}
                                title={title}
                                subtitle={description}
                                imgSrc={images[title.replace(/,/g, '').replace(/ /g, '_')]}
                            />
                        ))}
                    </Grid>
                </Card>

                <Card heading="Future Goals" subheading="What I'm up to next!">
                    <List>
                        {goals.map(name => (
                            <ListItem emphasis key={name}>
                                {name}
                            </ListItem>
                        ))}
                    </List>
                </Card>
                <Card heading="Contact" subheading="Want to get in touch?">
                    <ButtonLink to="/contact">Contact Me</ButtonLink>
                </Card>
            </main>
        </Fragment>
    );
};

export default Landing;
