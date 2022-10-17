
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
         backgroundColor: colors[0].backgroundColor
      } 
    }

    randomQuote = (arr) => {
      let num = Math.floor(Math.random() * quotes.length)
      let newQuote = quotes[num]
      this.setState({
        quote: newQuote.quote,
        author: newQuote.author
      })
      this.shuffleQuotes(quotes)
    }

    shuffleQuotes = (arr) => {
      return arr.sort(function () { return 0.5 - Math.random() });
    }

    randomColor = (arr) => {
      let color = Math.floor(Math.random() * colors.length)
      let newColor = colors[color]
      this.setState({
        backgroundColor: newColor.backgroundColor
      })
    }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <div style={styles.Wrapper}>
          <div style={styles.Quote}>'{this.state.quote}'</div>
          <div style={styles.Author}>- {this.state.author}</div>
          <button style={styles.QuoteButton} onClick={this.randomQuote}>New Quote</button>
          <a style={styles.TweetButton} href="#">Tweet</a>
        </div>
      </header>
    </div>
    );
    }
  }

export default App;
