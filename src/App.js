import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend'

i18next.use(initReactI18next)
  .use(Backend)
  .init({
    backend: {
      loadPath: '/translation/{{lng}}/translations.json'
    },
    lng: 'fr',
    fallbackLng: 'fr'
})


function App() {
  return (
    <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </Router>
  );
}

export default App;
