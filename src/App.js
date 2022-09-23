import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Content from './pages/Content';
import Technologies from './pages/Technologies';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Content/>
      <Technologies/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
