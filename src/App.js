import React from "react";

import Card from "./components/Card";
import Modal from "./components/Modal/Modal";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [],
      deck: require('./deck.json').deck,
      modalVisible: false
    }

    this.style = {height:"100vh"}

    this.pickRandomCard = this.pickRandomCard.bind(this)
    this.pickCard = this.pickCard.bind(this)
    this.clearTable = this.clearTable.bind(this)

    this.handleModalVisible = this.handleModalVisible.bind(this)
    this.closeModalWindow = this.closeModalWindow.bind(this)
  }

  pickRandomCard(e) {
    const random = Math.floor(Math.random() * this.state.deck.length);
    const card = this.state.deck[random]
    Math.random()>0.5? card['flip']=true: card['flip']=false
    this.setState({
      cards:[...this.state.cards, card],
      deck: this.state.deck.filter(el => {return el.title !== card.title})
    })
  }

  clearTable(e) {
    this.setState({
      cards: [],
      deck: require('./deck.json').deck
    })
  }

  pickCard(cardTitle) {
    const deck = this.state.deck
    const indexOfCard = deck.map((el) => { return el.title; }).indexOf(cardTitle)
    const card = this.state.deck[indexOfCard]
    this.setState({
      cards:[...this.state.cards, card],
      deck: this.state.deck.filter(el => {return el.title !== card.title})
    })
  }

  handleModalVisible (e) {
    const visible = !this.state.modalVisible
    this.setState({
      modalVisible: visible
    })
  }

  closeModalWindow (e) {
    this.setState({
      modalVisible: false
    })
  }

  render() {
    let cardsItems = this.state.cards.map(card => 
      <Card key={card.title} title={card.title} img={card.img} descr={card.descr} flip={card.flip}/>
    )
    return (
      <div className="App container-fluid">
        <Modal visible={this.state.modalVisible} closeEvent={this.closeModalWindow}/>
        <div className="row gap-3" style={this.style}>
          <div className="col-2  border border-dark">
            <div className="list-group">
              <button className="list-group-item list-group-item-action list-group-item-secondary text-center" onClick={this.pickRandomCard}>Получить случайную карту</button>
              <button className="list-group-item list-group-item-action list-group-item-secondary text-center" onClick={this.handleModalVisible}>Добавить карту на стол</button>
              <button className="list-group-item list-group-item-action list-group-item-secondary text-center" onClick={this.clearTable}>Очистить весь стол</button>
            </div>
          </div>
          <div className="col-9" style={this.style}>
            <div className="row">{cardsItems}</div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
