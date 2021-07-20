import { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import HomePage from "./pages/home/HomePage"
import CreatePostPage from './pages/post/CreatePostPage'
import { changeSiteName } from './actions/index'


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeSiteName('ZR blog'))
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>


          <Route path="/about" exact>
            <AboutPage />
          </Route>


          <Route path="/contact" exact>
            <ContactPage />
          </Route>


          <Route path="/post/create">
            <CreatePostPage></CreatePostPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
