import './App.css';
import { Header } from './components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Thumb } from './components/Thumb';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Thumb />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
