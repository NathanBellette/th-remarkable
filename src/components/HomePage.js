import React from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-flexbox-grid';

const HomePage = () => {
  return (
    <Grid>
      <Row>
        <Col md={8} mdOffset={2}>
          <h1>React Starter Kit</h1>

          <h2>Get Started</h2>
          <ol>
            <li>Review the <Link to="todos">demo app</Link></li>
            <li>Remove the demo and start coding: npm run remove-demo</li>
          </ol>
        </Col>
      </Row>
    </Grid>
  );
};

export default HomePage;
