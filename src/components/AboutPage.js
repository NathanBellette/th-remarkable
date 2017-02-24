import React from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-flexbox-grid';

const AboutPage = () => {
  return (
    <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
              <h2>About Page</h2>
              <p>This is the about page for this site.</p>
          </Col>
        </Row>
    </Grid>
  );
};

export default AboutPage;
