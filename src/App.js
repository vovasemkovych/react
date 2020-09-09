import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './menu.css';
import './animation.css'

class Menu extends React.Component {
  render() {
    return(
      <div>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div/>  
            </div>
              <div className="menu">
                <div>
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
    </div>  
      );
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="showcase centerBlock text-ligth text-center ">
          <h1 style={{fontFamily: '"Arvo", serif', textShadow: '1px 1px 2px black, 0 0 1em black', fontColor: '#CDB599FF'}} className="welcome font-weight-bold">Welcome at my personal page</h1>
          <p className="font-italic text-monospace text-white-50" style={{WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: 'white', fontColor: '#CDB599FF'}}>by Vova Semkovych</p>
        </div>
      </div>
    );
  }
}



class Index extends React.Component {
  render() {
    return( 
      <div className="wrapper">
        <Menu />
        <HomePage />
      </div>
      );
  }
}




// ========================================

ReactDOM.render(
  <Index />,document.getElementById('root'));



