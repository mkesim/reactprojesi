import React from 'react';
import Portfolio from './Portfolio';

function MainContent() {
  return (
    <main>
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to my professional website. Here you can find information about me and my work.</p>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>My name is Mehmet and I am a software engineer specializing in React development.</p>
      </section>
      <Portfolio />
      <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at myemail@example.com.</p>
      </section>
    </main>
  );
}

export default MainContent;
