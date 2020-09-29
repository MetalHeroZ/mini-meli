import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import { Container } from '../common';

const Home = () => {
  return (
    <Container>
      Aca estaria la grandios HOME
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
