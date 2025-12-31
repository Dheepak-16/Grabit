import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImgCarousel from './components/ImgCarousel';
import Container1 from './components/Container1';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import Container4 from './components/Container4';
import Container5 from './components/Container5';
import Container6 from './components/Container6';
function App() {
  return (
    <div className="App">
      <div className='cont'>
        <Header/>
        <ImgCarousel/>
        <Container1/>
        <Container2/>
        <Container3/>
        <Container4/>
        <Container5/>
        <Container6/>
      </div>
    </div>
  );
}
export default App;
