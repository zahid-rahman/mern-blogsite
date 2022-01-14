import { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import HomePage from "./pages/home/HomePage"
import CreatePostPage from './pages/post/CreatePostPage'
import { changeSiteName } from './actions/index'
import LoginPage from './pages/home/LoginPage'
import SignUpPage from './pages/home/SignUpPage'
import PrivateRoute from './components/custom-routes/PrivateRoute'
import ProfilePage from './pages/user/ProfilePage'
import PublicRoute from './components/custom-routes/PublicRoute'
import AdminPublicRoute from './components/custom-routes/AdminPublicRoute'
import { saveUserDetailsAfterLogin } from './actions/index'
import { getUserDetails } from './utils/loginSession'
import MyPostsPage from './pages/user/MyPostsPage'
import PostPage from './pages/user/PostPage'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminPrivateRoute from './components/custom-routes/AdminPrivateRoute'
import AdminProfilePage from './pages/admin/AdminProfilePage'
import NotAllowed from './components/custom-routes/NotAllowed'
import NotFound from './components/custom-routes/404NotFound'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    console.log('component called')
    // eslint-disable-next-line
    dispatch(changeSiteName('ZR blog'))
    const userDetails = getUserDetails()
    // eslint-disable-next-line 
    if(userDetails) {
      dispatch(saveUserDetailsAfterLogin(userDetails))
    }
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

          <PublicRoute path="/login" exact component={LoginPage} />
          <PublicRoute path="/signup" exact component={SignUpPage} />
          <AdminPublicRoute path="/authentication/login" exact component={AdminLoginPage} />

          <PrivateRoute path="/post/create" exact component={CreatePostPage} />
          <PrivateRoute path="/user/profile" exact component={ProfilePage} />
          <PrivateRoute path="/post/myPost" exact component={MyPostsPage} />
          <PrivateRoute path="/post/:postId" exact component={PostPage} />
          <AdminPrivateRoute path="/admin/profile" exact component={AdminProfilePage} /> 

          <Route path="/unauthorize" exact component={NotAllowed} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
