import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Posts from './Posts';
import AddPost from './AddPost';
import PageNotFound from './PageNotFound';
import MyForm from './Register'
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route path="/" exact>
          <Posts />
        </Route>
        <Route path="/addPost">
          <AddPost />
        </Route>
        <Route path="/register">
          <MyForm />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
