import './App.css';
import web3 from './web3';
import lottery from './lottery';
import { Component } from 'react';

class App extends Component {

  // web3.eth.getAccounts().then(console.log);
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "",
    message: ""
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address)
    console.log(manager, players, balance)
    this.setState({ manager, players, balance })
  }

  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts()

    this.setState({ message:"Waiting on transcation success ...." })

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether")
    })

    this.setState({ message:"You have been entered!" })
  }

  onClick = async event => {
    const accounts = await web3.eth.getAccounts()

    this.setState({ message:"Waiting on transcation success ...." })

    await lottery.methods.pickWinner().send({
      from: accounts[0],
    })

    this.setState({ message:"You have been entered!" })
  }
  
  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
        <p>There are currently {this.state.players.length} people already competing to win {web3.utils.fromWei(this.state.balance, "ether")} ether!</p>
        <br/>

        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter </label>
            <input
              input={this.state.value}
              onChange={event => this.setState({ value:event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr/>

        <h2>Ready to pick a winner?</h2>
        <button onClick={this.onClick}>Pick a winner !</button>

        <hr/>

        <h2>{this.state.message}</h2>

      </div>
    )
  }
}

export default App;
