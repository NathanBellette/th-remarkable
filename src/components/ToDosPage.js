import React from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-flexbox-grid';

const TodosPage = () => {
  return (
    <Grid>
      <Row>
        <Col md={8} mdOffset={2}>
          <h4>
            To Dos Page
          </h4>
          <Link to="/"> Go back to homepage </Link>
        </Col>
      </Row>
    </Grid>
  );
};

export default TodosPage;
