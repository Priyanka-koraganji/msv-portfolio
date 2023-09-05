import { Home } from "./components/Home/home";
import { Contact } from './components/Contact/contact';
import { About } from './components/About/about';
import { NoPage } from './components/nopage';
import { Work } from './components/Work/work';
import {Event} from './components/Event/event';
import { Portraits } from "./components/Portraits/portraits";
import {Kids} from './components/Kids/kids';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CouplePhotos } from "./components/Couplephotos/couplephotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Work />} />
        <Route path='portraits' element={<Portraits/>} />
        <Route path='couple' element={<CouplePhotos/>} />
        <Route path='kids' element={<Kids />} />
        <Route path='/event' element={<Event />} />    
        <Route path='*' element={<NoPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
