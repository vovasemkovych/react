import React from 'react';
import ReactDOM from 'react-dom';
import AB from './index.js';
import './index.css';
import './style.css';
import './menu.css';

class About extends React.Component {
  render() {
    return (
        
          <div>
        <h1 className="liabAbout pt-5" align="center" style={{fontFamily: '"Arvo", serif', WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#FC766AFF'}}>Little information about me</h1>
        <section className="textBlock text-light">
          <article className="flex-row bioAbout container-fluid flexAbout">
            <figure className="imgAboutB" />
            <section className="flex-column">
              <h2 className="aboutP" align="center">Bio</h2>
              <p className="pl-5 aboutH">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </article>
          <article className="flex-row bioAbout container-fluid flexAbout">
            <figure className="imgAboutE" />
            <section className="flex-column">
              <h2 className="aboutP" align="center">Edu</h2>
              <p className="pl-5 aboutH">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </article>
          <article className="flex-row bioAbout container-fluid flexAbout">
            <figure className="imgAboutS" />
            <section className="flex-column">
              <h2 className="aboutP" align="center">Skills</h2>
              <p className="pl-5 aboutH">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </article>
          <article className="flex-row bioAbout container-fluid flexAbout">
            <figure className="imgAboutH" />
            <section className="flex-column">
              <h2 className="aboutP" align="center">Interests</h2>
              <p className="pl-5 aboutH">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </article>
        </section>
        <br />
      </div>
        
    );
  }
}



class AB extends React.Component {
  render() {
    return( 
      <div className="wrapper">
        <Menu />
        <About />
      </div>
      );
  }
}




ReactDOM.render(
  <AB />,document.getElementById('root'));


