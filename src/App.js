
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Singers from './Components/Singers';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Content></Content>
      <Singers></Singers>
      <Footer></Footer>
    </div>
  );
}

export default App;
