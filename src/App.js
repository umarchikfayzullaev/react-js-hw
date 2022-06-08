import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Footer from './component/Footer';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/section1' component={Section1} />
        <Route path='/section2' component={Section2} />
        <Route path='/section3' component={Section3} />
        <Route path='/section4' component={Section4 } />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>

  );
}



const Home = () => {
  return (
    <div>
    </div>
  )
}

export default App;
