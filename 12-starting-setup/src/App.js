import React,{useState} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';

function App() {
  const [showParagraph, setshowParagraph]= useState(false);
 
  console.log('APP RUNNING')
  const toggleParagraphHandler = () => {
    setshowParagraph(true)
  }
 
  return (
   <div className="app">
    <h1>Hi there!</h1>
      { showParagraph && <p>hello world</p>   }
      <Button onClick={toggleParagraphHandler}> Toggle Paragraph</Button>
    </div>
  );
}

export default App;
