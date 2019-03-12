import React from "react";
import PropTypes from "prop-types";

const Home = ({ username, tasks }) => (
  <div>
    <p>Welcome, {username}!</p>
    <ul>{tasks && tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
  </div>
);

Home.propTypes = {
  username: PropTypes.string,
  tasks: PropTypes.array
};

export default Home;
