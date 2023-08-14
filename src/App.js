import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/Header/Header';
import ProductDetails from './containers/ProductDetails/ProductDetails';
import ProductListing from './containers/ProductListing/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
