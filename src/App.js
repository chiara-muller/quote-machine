
import React from 'react';
import './App.css';
import quotes from './quotesDB';
import styles from './styles';

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


class App extends React.Component {
  constructor(props){  
    super(props);  
    this.state = {  
         quote: quotes[0].quote,
         author: quotes[0].author,
      } 
    }

    randomQuote = (arr) => {
      let num = Math.floor(Math.random() * quotes.length)
      let newQuote = quotes[num]
      this.setState({
        quote: newQuote.quote,
        author: newQuote.author
      })
    }


    randomColor = (arr) => {
      let color = Math.floor(Math.random() * colors.length)
      let newColor = colors[color]
      return newColor
    }

    backColor = () => {
      
    }


  render() {
    return (
    <div className="App">
        <header className="App-header" style={{backgroundColor: this.randomColor(colors)}}>
        <div className="Wrapper">
          <div className="Quote">'{this.state.quote}'</div>
          <div className="Author">- {this.state.author}</div>
          <div className="Footer">
            <a className="TweetButton" href="#">Tweet</a>
            <button className="QuoteButton" onClick={this.randomQuote}>New Quote</button>
          </div>
        </div>
        </header>
      </div>
    );
    }
  }

export default App;
