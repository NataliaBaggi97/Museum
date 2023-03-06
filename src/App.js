import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Author from './Author';
import Exhibition from './Exhibition';
import Contacts from './Contacts';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from 'react';

function App() {

  const [language, setLanguage] = useState('EN')

  return (
    <Router>
      <Navbar setLanguage={setLanguage} language={language}/>
      <Routes>
        <Route path="/" element={<Home language={language}/>}/>
        <Route path="/markrothko" element={<Author language={language} />}/>
        <Route path="/exhibition" element={<Exhibition language={language}/>}/>
        <Route path="/contacts" element={<Contacts language={language}/>}/>
      </Routes >
    </Router>
  );
}

export default App;
