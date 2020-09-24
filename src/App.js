import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  withRouter,
  Route,
  Outlet,
  Link
} from "react-router-dom";
import logo from './images/nope1.jpg';
import {BlogPage} from './blogpage'
import uncheck from './function.js'
import Blog from './Blog'




// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      
    
  <div>
        <menu className="menu-wrap">
          <input type="checkbox" className="toggler" id="tog"/>
            <div className="hamburger">
              <div/>  
            </div>
              <div className="menu">
                <div>
                  <div> 
                    <ul className="menuList PrimaryNav with-indicator ">
                      <li className="menuListLines Nav-item is-active" onClick={uncheck}><Link to="/" >Home</Link></li>
                      <li className="menuListLines Nav-item" onClick={uncheck}><Link to="/about" >About</Link></li>
                      <li className="menuListLines Nav-item" onClick={uncheck}><Link to="/projects" >Projects</Link></li>
                      <li className="menuListLines Nav-item" onClick={uncheck}><Link to="/contact" >Contacts</Link></li>
                      <li className="menuListLines Nav-item" onClick={uncheck}><Link to="/Blog" >Blog</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
        </menu>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
    </div>
</Router>
  );
}

// You can think of these components as "pages"
// in your app.



class Home extends React.Component {
  render() {
    return (
      <div className="bg  bg-dark text-white">
        <div className="showcase centerBlock text-ligth text-center ">
          <h1 className="welcome font-weight-bold">Welcome at my personal page</h1>
          <p className="font-italic text-monospace text-white-50" >by Vova Semkovych</p>
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
       <div className="bgAb showcase">
        <h1 className="liabAbout pt-5" align="center" >Little information about me</h1>
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

class Projects extends React.Component {
  render() {
    return (
      <div className="bgOneMore area">
        <h1 align="center" className=" font-weight-bold text-light pt-">Here you can see my portfolio</h1>
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <section className="projDiv">
          <div className="card cardM" >
            <img className="card-img-top" src={require('./images/nope1.jpg')} alt="Card " />
            <article className="card-body">
              <h4 className="card-title text-dark">First CV</h4>
              <p className="card-text text-dark">It was my first try to make a site. So I decided to make CV using such technologies as HTML5 and CSS3.</p>
              <a href="menu.html" className="btn btn-primary btn-block ">Click on for more info</a>
            </article>
          </div>
          <div className="card cardM" >
            <img className="card-img-top" src={require('./images/nope1.jpg')} alt="Card " />
            <article className="card-body">
              <h4 className="card-title text-dark">First CV</h4>
              <p className="card-text text-dark">It was my first try to make a site. So I decided to make CV using such technologies as HTML5 and CSS3.</p>
              <a href="menu.html" className="btn btn-primary btn-block ">Click on for more info</a>
            </article>
          </div>
          <div className="card cardM" >
            <img className="card-img-top" src={require('./images/nope1.jpg')} alt="Card" />
            <article className="card-body">
              <h4 className="card-title text-dark">First CV</h4>
              <p className="card-text text-dark">It was my first try to make a site. So I decided to make CV using such technologies as HTML5 and CSS3.</p>
              <a href="menu.html" className="btn btn-primary btn-block ">Click on for more info</a>
            </article>
          </div>
          <div className="card cardM" >
            <img className="card-img-top" src={require('./images/nope1.jpg')} alt="Card " />
            <article className="card-body">
              <h4 className="card-title text-dark">First CV</h4>
              <p className="card-text text-dark">It was my first try to make a site. So I decided to make CV using such technologies as HTML5 and CSS3.</p>
              <a href="menu.html" className="btn btn-primary btn-block ">Click on for more info</a>
            </article>
          </div>
        </section>
        <br />
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div className="bgas" >
      <section className=" conkek">
        <h1 className="display-4 text-light" >Some ways to contact me</h1>
        <hr className="my-4" />
        <ul className="contactsUL text-light">
          <li><strong>E-mail:</strong><a className="ancContact" href="mailto: v.semkovych2407@gmail.com"> v.semkovych2407@gmail.com</a></li>
          <li><strong>Phone:</strong><a className="ancContact" href="tg://resolve?domain=@jotmina"> +380997694679</a></li>
          <li><strong>Facebook:</strong><a className="ancContact" target="_blanc" href="https://www.facebook.com/vova.semkovych"> Vova Semkovych</a></li>
          <li><strong>Twitter:</strong><a className="ancContact" target="_blanc" href="https://twitter.com/volodkasem"> @volodkasem</a></li>
        </ul>
      </section>
      </div>
    );
  }
}






// export default withRouter(Blog);

 // routeChange=()=> {
 //    let path = `/Home`;
 //    let history = useHistory();
 //    history.push(path);
 //  }