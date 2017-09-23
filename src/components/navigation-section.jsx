import $ from 'jquery';
import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import {data} from '../json/content';
import '../app.css';


class NavigationSection extends Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        console.log(data.es6);
    }

   toggleMenu = (e) =>{
         $(e.target).toggleClass('menu-box-open');
        $(e.target).next().slideToggle('slow').removeClass('open-links');
    }

  render() {
    return (
      <div>
         <div className="logo-text text-center"><Link to='/'><span className="rapid-text">RAPID</span><span className="es6-text">ES6</span></Link></div>
         <div className="tag-line text-center">Your Guide for quick checks</div>
         <div className="row navigation-links-section">
            { data.es6 && data.es6.map ( (topics,index) => {
                return( 
                    <div className="menu-box " key ={index} >
                    <div className="menu" onClick={this.toggleMenu}>{topics.menu}</div>
                        <ul  className="menu-items list-unstyled">
                        { topics.sub_menu && topics.sub_menu.map( (subTopic,ind)=>{
                            return( <li key={ind}><NavLink  to={`/${Object.keys(subTopic)[1]}`}>{subTopic.sub_menu_name}</NavLink></li>)
                        })}
                        </ul>                        
                    </div>
                );
            })}
               {/* <div className="menu-box ">
                    <div className="menu" onClick={this.toggleMenu}>New ES6 Syntax</div>
                    <ul  className="menu-items list-unstyled">
                        <li><NavLink activeClassName="active" to='/let_const'>let, const and Block Scoping</NavLink></li>
                        <li><NavLink to='/arrow_func'>Arrow Functions</NavLink></li>
                        <li><a href="">Default Function Parameters</a></li>
                        <li><a href="">Rest and Spread</a></li>
                        <li><a href="">Object Literal Extensions</a></li>
                        <li><a href="">for...of Loops</a></li>
                        <li><a href="">Octal and Binary Literals</a></li>
                        <li><a href="">Template Literals</a></li>
                        <li><a href="">Destructuring</a></li>
                    </ul>
                </div>
                <div className="menu-box">
                    <div className="menu" onClick={this.toggleMenu}>New Types</div>
                    <ul className="menu-items list-unstyled">
                        <li><a href="">Symbols</a></li>
                        <li><a href="">Well-known Symbols</a></li>
                    </ul>
                </div>
                <div className="menu-box">
                    <div className="menu" onClick={this.toggleMenu}>Object Extensions</div>
                    <ul  className="menu-items list-unstyled">
                        <li><a href="">Object Extensions</a></li>
                        <li><a href="">String Extensions</a></li>
                        <li><a href="">Number Extensions</a></li>
                        <li><a href="">Math Extensions</a></li>
                        <li><a href="">RegExp Extensions</a></li>
                        <li><a href="">Function Extensions</a></li>
                    </ul>
                </div>
                <div className="menu-box">
                    <div className="menu" onClick={this.toggleMenu}>ES6 Modules and Classes</div>
                    <ul className="menu-items list-unstyled">
                        <li><a href="">Module Basics</a></li>
                        <li><a href="">Named Exports</a></li>
                        <li><a href="">Classes</a></li>
                        <li><a href="">extends and super</a></li>
                        <li><a href="">Constructor Function</a></li>
                        <li><a href="">Static Members</a></li>
                        <li><a href="">new.target</a></li>
                    </ul>
                </div>
                <div className="menu-box">
                    <div className="menu" onClick={this.toggleMenu}>Iterators, Generators</div>
                    <ul className="menu-items list-unstyled">
                        <li><a href="">Iterators</a></li>
                        <li><a href="">Generators</a></li>
                        <li><a href="">Yielding in Generators</a></li>
                        <li><a href="">throw and return</a></li>
                    </ul>
                </div>
                <div className="menu-box">
                    <div className="menu" onClick={this.toggleMenu}>Arrays and Collections</div>
                    <ul  className="menu-items list-unstyled">
                        <li><a href="">Array Extensions</a></li>
                        <li><a href="">ArrayBuffer and Typed Array</a></li>
                        <li><a href="">DataView and Endianness</a></li>
                        <li><a href="">Map and WeakMap</a></li>
                        <li><a href="">Set and WeakSet</a></li>
                        <li><a href="">Subclassing</a></li>
                    </ul>
                </div>
                <div className="menu-box">
                    <div className="menu" onClick={this.toggleMenu}>Promises</div>
                    <ul className="menu-items list-unstyled">
                        <li><a href="">Promises</a></li>
                        <li><a href="">More Promise Features</a></li>
                    </ul>
                </div>
                <div className="menu-box">
                    <div className="menu" onClick={this.toggleMenu}>The Reflect API</div>
                    <ul className="menu-items list-unstyled">
                        <li><a href="">Construction and Method Calls</a></li>
                        <li><a href="">Reflect and Prototypes</a></li>
                        <li><a href="">Reflect and Properties</a></li>
                        <li><a href="">Reflect and Property Extensions</a></li>
                    </ul>
                </div>
                <div className="menu-box">
                    <div className="menu" onClick={this.toggleMenu}>The Proxy API</div>
                    <ul className="menu-items list-unstyled">
                        <li><a href="">Get by Proxy</a></li>
                        <li><a href="">Calling Functions by Proxy</a></li>
                        <li><a href="">A Proxy as a Prototype</a></li>
                        <li><a href="">Revocable Proxies</a></li>
                    </ul>
                </div>*/}
            </div>
        </div>
    );
  }
}

export default NavigationSection;
