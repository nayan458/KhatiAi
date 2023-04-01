import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import KishanDashbord from './pages/Iot/KishanDashbord';
import Learn from './pages/Learn/Learn'
import Home from './pages/Learn/Home'
import Mart from './pages/Mart/Mart';
function App() {
  return (
    <BrowserRouter>
      <Routes>{/* home */}
        <Route path='/home' element={<Home/>}/>
        {/* Learn */}
        <Route path='/learn' element={<Learn/>}/>
        {/* Mart */}
        <Route path='/mart' element={<Mart/>}/>
        {/* Iot */}
        <Route path='/' element={<KishanDashbord/>}/>
        <Route path='/*' element={<>404</>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
