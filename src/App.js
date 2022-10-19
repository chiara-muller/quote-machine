
import React from 'react';
import './App.css';
import quotes from './quotesDB';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

const logo = <FontAwesomeIcon icon={faSquareTwitter} className="TweetButton"/>
const quoteLogo = <FontAwesomeIcon icon={faQuoteLeft} />

class App extends React.Component {
  constructor(props){  
    super(props);  
    
    this.state = {  
      quote: quotes[0].quote,
      author: quotes[0].author,
      color: '#73A857'
    } 
  }

  randomQuote = (arr) => {
    let num = Math.floor(Math.random() * quotes.length)
    let newQuote = quotes[num]

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
      color: this.randomColor(colors)
    })
  }

  randomColor = (arr) => {
    let color = Math.floor(Math.random() * colors.length)
    let newColor = colors[color]
    return newColor
  }


  render() {
    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor: this.state.color, color: this.state.color}}>
          <div className="Wrapper">
            <div className="Quote">{quoteLogo} {this.state.quote}</div>
            <div className="Author">- {this.state.author}</div>
            <div className="Footer" >
              <a  href={`https://twitter.com/intent/tweet?text=${this.state.quote}-${this.state.author}`} target="_blank" style={{color: this.state.color}} className="Atag">{logo}</a>
              <button className="QuoteButton" onClick={this.randomQuote} style={{backgroundColor:this.state.color}}>New quote</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

