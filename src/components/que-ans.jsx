import React, { Component } from 'react';
import beautify  from 'js-beautify';
import Highlight from 'react-highlight.js';
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import '../app.css';
import {data} from '../json/content';


class QuesAnswer extends Component {
 constructor(props){
     super(props);
     this.ques_ans = [];
     }
 componentWillMount(){
    this.ques_ans = data[this.props.match.params.topic];
    console.log("ques_ans ",this.ques_ans.type);
 }

  render() {
      const divStyle={
          display:'block'
      }
      console.log("content loaded ",this.props.match.params);
    return (
      <div>
          <div className="topic-header text-center">{this.ques_ans.title}</div>
                { this.ques_ans.type && this.ques_ans.type.map( (list , index ) => {
                    return (
                        <div className="question-set-section" key={index}>  
                            <div className="console-question">{index+1}. What shows in the console ?</div>
                            <div className="question-block">
                                <Highlight language="javascript">
                                  { beautify(list.question)}
                                </Highlight>
                            </div>
                             <div className="answer-section">
                                <div className="show-answer-text">Show Answer</div>
                            </div>
                        </div>
                    )
                }) }
        </div>
    );
  }
}

export default QuesAnswer;
