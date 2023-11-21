
import './App.css';
import {Routes , Route } from 'react-router-dom'
import Home from './components/Home';
import ChatbotCom from './components/ChatbotCom';
import Info from './components/Info';
import 'react-chatbot-kit/build/main.css'


function App() {
  return (
    <div className="App">
      
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/chatbot' element={<ChatbotCom></ChatbotCom>}></Route>

        <Route path='/info' element={<Info></Info>}></Route>

      </Routes>

    </div>
  );
}

export default App;
