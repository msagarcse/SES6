import React, { Component } from 'react';
import '../app.css';


class QuesAnswer extends Component {
 constructor(props){
     super(props);
 }
  render() {
      console.log("content loaded ",this.props.match.params);
    return (
      <div>
          <h2 className="content-heading text-center">
                
            </h2>
            <div className="up-to-date-text text-center">Here's how to stay up to date !!!</div>
            <p className="content">Hello World </p>
        </div>
    );
  }
}

export default QuesAnswer;
