import logo from './logo.svg';
import './App.css';
import GoodyApp from "./Message";


  function App(props){
  const fontSizeHeader = '50px';
  return (
    <div>
      <header className={`App-header ${props.showGreen ? 'header-green' : 'header-blue'}`} style={{top:fontSizeHeader}}>
      My Mega app
      <h3>My name {props.myName}</h3>
    </header>
    </div>
  
  );

  }
 
   

export default App;
