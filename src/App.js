import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Portfolio from "./Components/Portfolio";
import './App.css';
import Intro from "./Components/Intro";

function App() {
  return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/Portfolio" element={<Portfolio />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
