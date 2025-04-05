import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Skill Exchange Platform 👋</h1>
      <p>
        A place where you can share your skills, learn from others, and collaborate on awesome ideas.
      </p>
      <p>
        Sign up to create your profile, list your skills, and connect with the community!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
};

export default Home;
