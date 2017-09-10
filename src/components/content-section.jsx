import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePageContent from './homepage-content';
import QuesAnswer from './que-ans';
import '../app.css';


class ContentSection extends Component {
 constructor(props){
     super(props);
 }
  render() {
    return (
    <Switch>
      <Route exact path='/' component={HomePageContent}/>
      <Route exact path='/:topic' component={QuesAnswer}/>
    </Switch>
    );
  }
}

export default ContentSection;
