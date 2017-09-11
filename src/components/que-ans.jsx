import React, { Component } from 'react';
import beautify  from 'js-beautify';
import $ from 'jquery';
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import '../app.css';
import {data} from '../json/content';


class QuesAnswer extends Component {
 constructor(props){
     super(props);
     }
 
 toggleAns= (e) => {
     $(e.target).toggleClass('show-ans-active');
        //$(this).parent().next().toggleClass('open', 1000);
        $(e.target).parent().next().slideToggle('slow');
 }

  render() {
      const divStyle={
          display:'none'
      }
      console.log("content loaded ",this.props.match.params);
      let ques_ans = data[this.props.match.params.topic];
      console.log("ques_ans ",ques_ans.type);
    return (
      <div>
          <div className="topic-header text-center">{ques_ans.title}</div>
                { ques_ans.type && ques_ans.type.map( (list , index ) => {
                    return (
                        <div className="question-set-section" key={index}>  
                            <div className="console-question">{index+1}. What shows in the console ?</div>
                            <div className="question-block">
                                <Highlight language="javascript">
                                  { beautify(list.question)}
                                </Highlight>
                            </div>
                             <div className="answer-section">
                                <div className="show-answer-text" onClick={this.toggleAns}>Show Answer</div>
                            </div>
                            <div className="show-answer" style={divStyle}>undefined</div>
                        </div>
                    )
                }) }
        </div>
    );
  }
}

export default QuesAnswer;
