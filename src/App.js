
import React, {useState} from 'react';
import './App.css';
import Card from './Card.js'

function App() {
  // const [name, setName] = useState('Hendra')
const styles = {
  outer: {
    padding: '2rem', 
    backgroundColor: 'blue'
  },

  inner: {
    padding: '2rem',
  backgroundColor: 'green',
  color:'white',
  }
}
const someText = 'halo guys';
const someDiv = <div style={{backgroundColor: 'white', color: 'black'}}>somediv</div>
const [showCard, setShowCard] = useState(true)
const [cards, setCards] = useState([
  {
    id: 1,
    name: 'hendra',
    title: 'programmer'
  },
  {
    id: 2,
    name: 'haqq',
    title: 'pekerja'
  }
])
// const changeNameHandler = (givenName) => {
//   if(name === 'Hendra') {
//     setName(givenName)
//   } else {
//     setName('Hendra')
//   }
  
// } 
// const changeInputHandler = event => setName(event.target.value)


const cardToggle = () => setShowCard(!showCard)

const deleteHandler = (cardIndex) => {
  const cards_copy = [...cards]
  cards_copy.splice(cardIndex, 1)

  setCards(cards_copy)
}
const changeHandler = (event, id) => {
  
  const theCard = cards.findIndex(e => e.id === id)

  const card_copy = [...cards]

  card_copy[theCard].name = event.target.value

  setCards(card_copy)

}
const cardRender = showCard && (cards.map((card, index) => <Card name={card.name} onChangeInput={(event) => changeHandler(event, card.id)} title={card.title} key={card.id}  onDelete={() => deleteHandler(index)}/> )) 



  return (
    <div className="container">
    <div style={styles.outer}>
      <div style={styles.inner}> 
          {someText}
          {someDiv}
      </div>
     
    </div>
    
    <button onClick={cardToggle}>Show/hide</button>
    {cardRender}
    
  
    </div>
    
  );
}

export default App;
