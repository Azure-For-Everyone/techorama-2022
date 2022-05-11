import React from "react";

export default class Lottery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      winner: null
    }
    this.finishHandler = this.finishHandler.bind(this)
    this.handleClick = this.handleClick.bind(this);
  }  

  handleClick() { 
    this.setState({ winner: null });
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
  }

  static loser = [
    'Not quite', 
    'Stop gambling', 
    'Hey, you lost!', 
    'Ouch! I felt that',      
    'Don\'t beat yourself up',
    'There goes the college fund',
    'I have a cat. You have a loss',
    'You\'re awesome at losing',
    'Coding is hard',
    'Don\'t hate the coder'
  ];

  static matches = [];

  finishHandler(value) {
    Lottery.matches.push(value);  

    if (Lottery.matches.length === 3) {
      const { winner } = this.state;
      const first = Lottery.matches[0];
      let results = Lottery.matches.every(match => match === first)
      this.setState({ winner: results });
    }
  }

  emptyArray() {
    Lottery.matches = [];
  }

  render() {
    const { winner } = this.state;
    const getLoser = () => {       
      return Lottery.loser[Math.floor(Math.random()*Lottery.loser.length)]
    }
    let repeatButton = null;
    let winningSound = null;

    if (winner !== null) {
      repeatButton = <RepeatButton onClick={this.handleClick} />
    }
    
    if (winner) {
      winningSound = <WinningSound />
    }

    return (
      <div>
        {winningSound}
     
        <div className="container">
          <div className={`spinner-container`}>
            <Spinner onFinish={this.finishHandler} ref={(child) => { this._child1 = child; }} timer="1000" />
            <Spinner onFinish={this.finishHandler} ref={(child) => { this._child2 = child; }} timer="1400" />
            <Spinner onFinish={this.finishHandler} ref={(child) => { this._child3 = child; }} timer="2200" />
            <div className="gradient-fade"></div>
          </div>
          {repeatButton}   
        </div>

        { /* <h1 style={{ color: 'white'}}>
          <span>{winner === null ? 'Waiting…' : winner ? '🤑 Pure skill! 🤑' : getLoser()}</span>
    </h1> */ }
       
      </div>
    );
  }
}  
  
class Spinner extends React.Component {  
  constructor(props){
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler(){
    this.reset();
  }; 

  reset() {
    if (this.timer) { 
      clearInterval(this.timer); 
    }  

    this.start = this.setStartPosition();

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer        
    });

    this.timer = setInterval(() => {
      this.tick()
    }, 100);      
  }

  state = {
    position: 0,
    lastPosition: null
  }
  static iconHeight = 188;
  multiplier = Math.floor(Math.random()*(4-1)+1);

  start = this.setStartPosition();
  speed = Spinner.iconHeight * this.multiplier;    

  setStartPosition() {
    return ((Math.floor((Math.random()*9))) * Spinner.iconHeight)*-1;
  }

  moveBackground() {
    this.setState({ 
      position: this.state.position - this.speed,
      timeRemaining: this.state.timeRemaining - 100
    })
  }

  getSymbolFromPosition() {
    let { position } = this.state;
    const totalSymbols = 9;
    const maxPosition = (Spinner.iconHeight * (totalSymbols-1)*-1);
    let moved = (this.props.timer/100) * this.multiplier
    let startPosition = this.start;
    let currentPosition = startPosition;    

    for (let i = 0; i < moved; i++) {              
      currentPosition -= Spinner.iconHeight;

      if (currentPosition < maxPosition) {
        currentPosition = 0;
      }      
    }

    this.props.onFinish(currentPosition);
  }

  tick() {      
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.timer);        
      this.getSymbolFromPosition();    

    } else {
      this.moveBackground();
    }      
  }

  componentDidMount() {
    clearInterval(this.timer);

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer
    });

    this.timer = setInterval(() => {
      this.tick()
    }, 100);
  }

  render() {
    let { position, current } = this.state;   
    return (            
      <div 
        style={{backgroundPosition: '0px ' + position + 'px'}}
        className={`icons`}          
      />
    )
  }
}

function RepeatButton(props) {
    return (
      <button 
        aria-label='Play again.' 
        id='repeatButton' 
        onClick={props.onClick}>
      </button>
    );
  }
  
  function WinningSound() {
    return (
    <audio autoplay="autoplay" className="player" preload="false">
      <source src="https://andyhoffman.codes/random-assets/img/slots/winning_slot.wav" />
    </audio>  
    );
  }