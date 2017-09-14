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
  componentDidMount(){
    // this.obj = Object.assign({},originalFlow.eformFlow);
    // console.log("before progressSteps ",originalFlow.eformFlow.progressSteps);
    // let progressSteps = originalFlow.eformFlow.progressSteps;
    // let indexOfOrder1 = progressSteps.map( (object , index) =>{
    //   return object.order === 1
    // }).indexOf(true);

    // this.changeStartNextPage(this.obj.progressSteps[indexOfOrder1], this.obj.progressSteps[0]);
    // console.log("final ",this.obj.progressSteps);


  }

  changeStartNextPage( order1Data, currentFirstIndexData ){
    let order1DataInitializeAction = [] ,  currentFirstIndexDataIntializeAction = [];
     if( order1Data.progressSubSteps && order1Data.progressSubSteps.length){
        order1Data.startPage = null;
        order1Data.nextCaption = null;
        order1Data.progressSubSteps.map( (object , index) => {
          if( object.order === 1){
            object.startPage = null;
            object.nextCaption = 'next.button.label';
            order1DataInitializeAction = object.initialisationActions;
          }
          });
    }else{
      order1Data.startPage = null;
      order1Data.nextCaption = 'next.button.label';
       if( order1Data.initialisationActions.length !== 9 ){
         order1DataInitializeAction = order1Data.initialisationActions;
       }  
    }
    if( currentFirstIndexData.progressSubSteps &&  currentFirstIndexData.progressSubSteps.length){
      currentFirstIndexData.startPage = null;
      currentFirstIndexData.nextCaption = null;
        let indexOfOrder1 = currentFirstIndexData.progressSubSteps.map( (object , index) =>{
          if( object.order === 1){
            currentFirstIndexDataIntializeAction = object.initialisationActions;
          }
          return object.order === 1
          }).indexOf(true);
          console.log("indexOfOrder1 ",indexOfOrder1);
          this.changeOrder1DataAction(order1Data,currentFirstIndexDataIntializeAction);
          if(indexOfOrder1 !== 0){
            currentFirstIndexData.progressSubSteps[0].initialisationActions = order1DataInitializeAction;
            this.changeStartNextPage(currentFirstIndexData.progressSubSteps[indexOfOrder1], currentFirstIndexData.progressSubSteps[0]);
          }else{
            currentFirstIndexData.progressSubSteps[0].startPage = 'FLOW_XHTML';
            currentFirstIndexData.progressSubSteps[0].nextCaption = null;
            currentFirstIndexData.progressSubSteps[0].initialisationActions = order1DataInitializeAction;
          }
    }else{
      currentFirstIndexData.startPage = 'FLOW_XHTML';
      currentFirstIndexData.nextCaption = null;
      if( currentFirstIndexData.initialisationActions.length !== 9 ){
         currentFirstIndexData.initialisationActions = order1DataInitializeAction;
         this.changeOrder1DataAction(order1Data,currentFirstIndexDataIntializeAction);
      }
     
    }
  }

  changeOrder1DataAction(order1,action){
    console.log("order 1" ,order1);
    if( order1.progressSubSteps && order1.progressSubSteps.length){
        order1.progressSubSteps.map( (object , index) => {
          if( object.order === 1){
            object.initialisationActions = action; 
          }
          });
    }else{
      order1.startPage = null;
      order1.nextCaption = 'next.button.label';
      order1.initialisationActions = action;
    }
    
  }

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
