import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import Insumos from './components/insumos/insumos';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/insumos"} element={<Insumos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
