
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Singers from './Components/Singers';
import Contact from './Components/Contact';
import Multifunctional from './Components/Multifunctional';
import Parent from './Components/Parent';
import ParentFunc from './Components/ParentFunc';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Content></Content>
      <Singers></Singers>
      <Contact></Contact>
      <Multifunctional></Multifunctional>
      <Parent />
      <ParentFunc />
      <Footer></Footer>
    </div>
  );
}

export default App;
