
import './App.css';
import Message from './Message';

const Description=()=>{
  return  <strong>Working</strong>
}

const App=()=> {
  
  return (
    <div className="App">
      <Message color="red" msg='React'/>
      <Message color="green" msg='BootCamp'/>
      <Description />     
      
    </div>
  );
}

export default App;
