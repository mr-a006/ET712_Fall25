import './App.css';
import {useState} from 'react';

//list of three message
const message = ["I think, therefore I am", "I have a dream", "The only thing we have to fear is fear itself"]

function App(){
 
  // set initial state (slice card)
  const [counter, setCounter] = useState(1)

  // set initial state (open and close)
  const [isOpen, setIsopen] = useState(false)


  return(
    <div className="App">
      <h1 className='title'>Slice card by Aqeel Hussain</h1>
      
      {/** slice cards */}
      <section className='slidewrapper'>
        <div className='numberWrapper'>
          <p className='msg'>{message[counter-1]}</p>
          <div className={counter==1 ? "active" : ""}><p>1</p></div>
          <div className={counter==2 ? "active" : ""}><p>2</p></div>
          <div className={counter==3 ? "active" : ""}><p>3</p></div>
        </div>

        
        <div className='btngroup'>
          <button onClick={function(){if(counter<message.length)setCounter(counter+1)}}>Next</button>
          <button onClick={function(){if(counter>1)setCounter(counter-1)}}>Previous</button>
        </div>
      </section>

      {/** open and close */}
      <section className='info'>
        <p><b>Cat (Felis catus)</b>, commonly referred to as domestic cat or house cat <button className='readmorebtn' onClick={function(){setIsopen(!isOpen)}}>{isOpen ? "Hide" : "Read More"}</button></p>
      </section>

      <section>
        {
          isOpen && (
            <div className='readmore'>
              <p>The cat, commonly referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae</p>
            </div>
          )
        }
      </section>

    </div>
  );
}

export default App;
