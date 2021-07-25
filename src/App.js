import classes from './App.module.css';
import Ranker from './components/Ranker/Ranker';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import { useState} from 'react';
import { worldData, indiaData } from './data';


const App = () => {
  
  const [id, setId] = useState('7');
  const [btnClicked , setBtnClicked] = useState(false);

  const clickId = (id)=>{
    setBtnClicked(true);
    
    setId(id);
    setTimeout(()=>{
      setBtnClicked(false)
      
    },1200) 
  }
  const searchChange  = (id)=>{
    setBtnClicked(true);
    setId(id);
    setTimeout(()=>{
      setBtnClicked(false)
      
    },1200) 
  }

  return (
    <div className={classes.app}>
      
      <Header/>
      <main >
      <Ranker players={worldData}  clickId={clickId} />
      <Container id={id} onSearchChange={searchChange} isClicked={btnClicked} />
      <Ranker players={indiaData} clickId={clickId} />

      </main>
   
      
    </div>
  )
}

export default App

