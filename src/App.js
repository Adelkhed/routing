
import './App.css';
import { Route,Routes} from "react-router-dom";
import WordPage from './components/WordPage';
import NumberPage from './components/NumberPage';
import Home from './components/Home';
import StyledPage from './components/StyledPage';
function App() {
  return (
    
    <Routes>
      <Route path ="/home" element={<Home/>}/>
      
      <Route path ="/:word" element={<WordPage/>}/>
      <Route path ="/:number" element={<NumberPage/>}/>
      <Route path ="/:word/:textColor/:color" element={<StyledPage/>}/>
      </Routes>
    
  );
}

export default App;
