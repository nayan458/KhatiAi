import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import KishanDashbord from './pages/Iot/KishanDashbord';
import Learn from './pages/Learn/Learn'
import Home from './pages/Learn/Home'
import Mart from './pages/Mart/Mart';
import KishanChat from './pages/Iot/KishanChat';
import NodeState from './contexts/NodeState';
function App() {
  return (
    <NodeState>
    <BrowserRouter>
      <Routes>{/* home */}
        <Route path='/home' element={<Home/>}/>
        {/* Learn */}
        <Route path='/learn' element={<Learn/>}/>
        {/* Mart */}
        <Route path='/mart' element={<Mart/>}/>
        <Route path='/chat' element={<KishanChat/>}/>
        {/* Iot */}
        <Route path='/' element={<KishanDashbord/>}/>
        <Route path='/*' element={<>404</>}/>
      </Routes>
    </BrowserRouter>
    </NodeState>
  );
}

export default App;
