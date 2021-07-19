import { BrowserRouter, Route } from 'react-router-dom'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import HomePage from "./pages/home/HomePage"
const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path="/" exact>
              <HomePage />
            </Route>


            <Route path="/about" exact>
              <AboutPage />
            </Route>


            <Route path="/contact" exact>
              <ContactPage />
            </Route>


        </BrowserRouter>
    </div>
  );
}

export default App;
