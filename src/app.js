import '../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import './app.css';
import React, { Component } from 'react';
import HighLight from 'react-syntax-highlight';
import beautify  from 'js-beautify';
import MobNavigation from './components/mob-navigation';
import NavigationSection from './components/navigation-section';
import ContentSection from './components/content-section';
import RightInfoSection from './components/right-info-section';

class App extends Component {

  render() {
    //let data = beautify(this.state.value, { indent_size: 2 });
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="mobile-nav-bar-section navbar navbar-default navbar-fixed-top">
            <MobNavigation/>
          </nav>
          <div className="col-sm-4 col-md-3 col-lg-3 navigation-section">
            <NavigationSection/>
          </div>
          <div className="col-sm-6 col-md-7 col-lg-7 content-section mobile-content">
            <ContentSection/>
          </div>
          <div className="col-sm-2 col-md-2 col-lg-2 right-info-section">
            <RightInfoSection/>
          </div>
        </div>
        {/*<HighLight
            lang={this.state.lang}
            value={data}
          />*/}
      </div>
    );
  }
}

export default App;
