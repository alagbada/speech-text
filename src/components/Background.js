import React from 'react';
import './Background.css';
import {Link} from 'react-router-dom';

const Background = () => {
  return (
    <div className="wrapper">
        <div className="page-header section-dark sectionDark">
            <div className="filter"></div>
        <div className="content-center">
          <div className="container">
            <div className="title-brand">
              <h1 className="presentation-title">Diary</h1>
              <div className="fog-low">
                <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt=""/>
              </div>
              <div className="fog-low right">
                <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt=""/>
              </div>
            </div>

            <h2 className="presentation-subtitle text-center">Record your SPEECH and let it be converted to TEXT</h2>
            <div className="cent">
              <Link to="/mainpage">
                Proceed
              </Link>
            </div>
          </div>
        </div>
            <div className="moving-clouds cloudNine">

            </div>
        </div>
    </div>
  );
}

export default Background;
