import React, { Component } from 'react';
import '../App.css';
import '../assets/book1.jpg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class ProductDiv extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
    
    render() {
      return (
        <div className="ProductDiv">
          <MuiThemeProvider>
            <div className="imgDiv">
              <img src={this.props.details.imageURL} id="productImg"/>
            </div>
            <div className="infoDiv">
              <span id="bookName">{this.props.details.title}</span><br/>
              <span id="author">{this.props.details.author}</span><br/>
              <span id="price">Rs {this.props.details.price}</span><br/><br/>
  
            </div>
          </MuiThemeProvider>
        </div>
        
      );
    }
  }
  
  export default ProductDiv;