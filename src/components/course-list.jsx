import React, { Component } from 'react';
import '../app.css';


class CourseList extends Component {
 constructor(props){
     super(props);
 }

 
  render() {
    return (<section className="container-fluid sc-course-container">
        <div className="row sc-course-layout">
            <div className="col-xs-1"></div>
            <div className="col-xs-10">
                <div className="row">
                    <div className="col-xs-3">
                        <div className="box"></div>
                    </div>
                    <div className="col-xs-3">
                        <div className="box"></div>
                    </div>
                    <div className="col-xs-3">
                        <div className="box"></div>
                    </div>
                    <div className="col-xs-3">
                        <div className="box"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">5</div>
                    <div className="col-xs-3">6</div>
                    <div className="col-xs-3">7</div>
                    <div className="col-xs-3">8</div>
                </div>
            </div>
            <div className="col-xs-1"></div>
        </div>
        </section>
    );
  }
}

export default CourseList;