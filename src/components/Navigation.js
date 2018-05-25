import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
        <div className="container">
            <div className="navbar-translate">
                <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar"></span>
                    <span className="navbar-toggler-bar"></span>
                    <span className="navbar-toggler-bar"></span>
                </button>
                <p className="navbar-brand">SpeechText</p>
            </div>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/mainpage">
                        <button className="nav-item f5 link dim ma2 ph3 pv2 mb2 dib white bg-dark-gray">
                          Proceed
                        </button>
                      </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  );

}

export default Navigation;
