import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';

function App() {
  return (
    <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer content="Copyright 2020 Argent Bank" />
        </Router>
  );
}

export default App;
