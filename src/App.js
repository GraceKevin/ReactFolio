import './App.css';

import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Footer  from './components/footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;