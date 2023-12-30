
import './App.css';
import {NavBar} from './component/NavBar';
import {Banner} from './component/Banner';
import {Skills} from './component/Skills';
import {Experience} from './component/Experience';
import {Projects} from './component/Projects';
import  {Contact} from './component/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills />
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
