import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  withRouter,
  Route,
  Link
} from "react-router-dom";
import logo from './images/nope1.jpg';
import {BlogPage} from './blogpage'
import {BlogPage1} from './blogpage1'
import {BlogPage2} from './blogpage2'
import {BlogPage3} from './blogpage3'
import {BlogPage4} from './blogpage4'
import {BlogPage5} from './blogpage5'



class Blog extends React.Component {
 hide=()=>  {
  let x = document.getElementById("main-doc");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
 toStart=(e)=> {
window.location.href="#start";
e.preventDefault();
e.stopPropagation(); 
}
  render() {
  
    return (
     <Router basename="/Blog"> 
     
      <div className="bgBody showcase" id="back">
      

        <div className="topBackGR" align="center">
          <h1 className="h1Blog" >Personal thougts about something</h1>
          <div className="container">
            <a data-scroll href="#full" onClick={this.toStart}>
              <div className="arrowB" />
            </a>
          </div>
        </div>
        <div className=" container-fluid" id="start">
          <div className="row">
            <div className="col-md-10 col-sm-12 col-xs-12">
            	<Switch>
                    <Route path="/BlogPage">
                      <BlogPage />
                    </Route>
                    <Route path="/BlogPage1">
                      <BlogPage1 />
                    </Route>
                    <Route path="/BlogPage2">
                      <BlogPage2 />
                    </Route>
                    <Route path="/BlogPage3">
                      <BlogPage3 />
                    </Route>
                    <Route path="/BlogPage4">
                      <BlogPage4 />
                    </Route>
                    <Route path="/BlogPage5">
                      <BlogPage5 />
                    </Route>
                </Switch>
                
              <main id="main-doc">
              
                 <section className="main-section blogSec" id="post1">
                  <div className="card flex-row cardB" >
                    <img className="card-img-top imgPost" src={logo} alt="Card"  />
                    <div className="card-body">
                      <h4 className="card-title text-dark">First CV</h4>
                      <p className="card-text text-dark">It was my first try to make a site. So I decided to make CV using such technologies as HTML5 and CSS3.</p>
                      <span className="card-link btn " onClick={this.hide}> <Link to="/BlogPage" > Show more </Link></span>
                    </div>
                  </div>
                </section>
               
                 
                <section className="main-section blogSec" id="post2">
                  <div className="card flex-row cardB" >
                    <img className="card-img-top imgPost" src={logo} alt="Card"  />
                    <div className="card-body">
                      <h4 className="card-title text-dark">First CV</h4>
                      <p className="card-text text-dark">It was my first try to make a site. So I decided to make CV using such technologies as HTML5 and CSS3.</p>
                      <span  className="card-link btn " onClick={this.hide}><Link to="/BlogPage1" > Show more </Link></span>
                    </div>
                  </div>
                  
                </section>
                <section className="main-section blogSec"  id="post3">
                  <div className="card flex-row cardB" >
                    <img className="card-img-top imgPost" src={logo} alt="Card"  />
                    <div className="card-body">
                      <h4 className="card-title text-dark">First CV</h4>
                      <p className="card-text text-dark">It was my first try to make a site. So I decided to make CV using such technologies as HTML5 and CSS3.</p>
                      <span  className="card-link btn " onClick={this.hide}><Link to="/BlogPage2" > Show more </Link></span>
                      
                    </div>
                  </div>
                </section>
                <section className="main-section blogSec"  id="post4">
                  <div className="card flex-row cardB" >
                    <img className="card-img-top imgPost" src={logo} alt="Card"  />
                    <div className="card-body">
                      <h4 className="card-title text-dark">First CV</h4>
                      <p className="card-text text-dark">It was my first try to make a site. So I decided to make CV using such technologies as HTML5 and CSS3.</p>
                      <span  className="card-link btn " onClick={this.hide}><Link to="/BlogPage3" > Show more </Link></span>
                    </div>
                  </div>
                </section>
                <section className="main-section blogSec"  id="post5">
                  <div className="card flex-row cardB" >
                    <img className="card-img-top imgPost" src={logo} alt="Card" />
                    <div className="card-body">
                      <h4 className="card-title text-dark">First CV</h4>
                      <p className="card-text text-dark">It was my first try to make a site. So I decided to make CV using such technologies as HTML5 and CSS3.</p>
                      <span  className="card-link btn " onClick={this.hide}><Link to="/BlogPage4" > Show more </Link></span>
                    </div>
                  </div>
                </section>
                <section className="main-section blogSec"  id="post6">
                  <div className="card flex-row cardB" >
                    <img className="card-img-top imgPost" src={logo} alt="Card"  />
                    <div className="card-body">
                      <h4 className="card-title text-dark">First CV</h4>
                      <p className="card-text text-dark">It was my first try to make a site. So I decided to make CV using such technologies as HTML5 and CSS3.</p>
                      <span  className="card-link btn " onClick={this.hide}><Link to="/BlogPage5" > Show more </Link></span>
                    </div>
                  </div>
                </section>
              </main>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 navibar">
              <nav id="navbar">
                <h3 className="text-dark">Latest states:</h3>
                <div className="card" style={{width: '12rem'}}>
                  <ul className="list-group list-group-flush">
                    <li className=" btnNavPost list-group-item"><a className=" btn stretched-link" href="#post1">Post1</a></li>
                    <li className="btnNavPost list-group-item"><a className=" btn stretched-link" href="#post2">Post2</a></li>
                    <li className="btnNavPost list-group-item"><a className=" btn stretched-link" href="#post3">Post3</a></li>
                    <li className="btnNavPost list-group-item"><a className=" btn stretched-link" href="#post4">Post4</a></li>
                    <li className="btnNavPost list-group-item"><a className=" btn stretched-link" href="#post5">Post5</a></li>
                    <li className="btnNavPost list-group-item"><a className=" btn stretched-link" href="#post6">Post6</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

       </Router>
    );
  }
}



export default withRouter(Blog);
