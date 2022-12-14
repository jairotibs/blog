import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Atualizar from './Atualizar';
import CreateAuthor from './CreateAuthor';
import CriarCategoria from './CriarCategoria';
import CriarDominio from './CriarDominio';
import CriarCriterioBusca from './CriarCriterioBusca';

function App() {

  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/createAuthor">
              <CreateAuthor />
            </Route>
            <Route path="/criarCategoria">
              <CriarCategoria />
            </Route>
            <Route path="/criarDominio">
              <CriarDominio />
            </Route>

            <Route path="/criarCriterioBusca">
             <CriarCriterioBusca />
            </Route>

            <Route path="/atualizar/:id">
              <Atualizar />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;