import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './index.js';
import './index.css';
import './style.css';
import './menu.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import './menu.css';

const {
  HashRouter,
  Switch,
  Route,
  Link
} = ReactRouterDOM

const HomePage = () => (
        <div>
        <div className="showcase centerBlock text-ligth text-center ">
          <h1 style={{fontFamily: '"Arvo", serif', textShadow: '1px 1px 2px black, 0 0 1em black', fontColor: '#CDB599FF'}} className="welcome font-weight-bold">Welcome at my personal page</h1>
          <p className="font-italic text-monospace text-white-50" style={{WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: 'white', fontColor: '#CDB599FF'}}>by Vova Semkovych</p>
        </div>
      </div>
)

const About = () => (
  <section className="container">
        <h1 className="display-4 text-light" style={{WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#FC766AFF'}}>Some ways to contact me</h1>
        <hr className="my-4" />
        <ul className="contactsUL text-light">
          <li><strong>E-mail:</strong><a className="ancContact" href="mailto: v.semkovych2407@gmail.com"> v.semkovych2407@gmail.com</a></li>
          <li><strong>Phone:</strong><a className="ancContact" href="tg://resolve?domain=@jotmina"> +380997694679</a></li>
          <li><strong>Facebook:</strong><a className="ancContact" target="_blanc" href="https://www.facebook.com/vova.semkovych"> Vova Semkovych</a></li>
          <li><strong>Twitter:</strong><a className="ancContact" target="_blanc" href="https://twitter.com/volodkasem"> @volodkasem</a></li>
        </ul>
      </section>
)

const Contact = () => (
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
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)
const Header = () => (
  <div>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div/>  
            </div>
              <div className="menu">
                <div>
                  
                    <ul className="menuList PrimaryNav with-indicator ">
                      <li className="menuListLines Nav-item is-active"><a href="index.html" data-hover="Home">Home</a></li>
                      <li className="menuListLines Nav-item"><a href="about.html" data-hover="About me">About me</a></li>
                      <li className="menuListLines Nav-item"><a href="projects.html" data-hover="Projects">Projects</a></li>
                      <li className="menuListLines Nav-item"><a href="contact.html" data-hover="Contacts">Contacts</a></li>
                      <li className="menuListLines Nav-item"><a href="blog.html" data-hover="Blog">Blog</a></li>
                    </ul>
                  
                </div>
              </div>
        </div>
    </div>  
)
const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))


// ========================================


// ReactDOM.render(
//   <Index />,document.getElementById('ab'));



