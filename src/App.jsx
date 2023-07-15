import './App.css'
import Header from './assets/Header';
import Content from './assets/Content';
import Footer from './assets/Footer';

function App() {


  return (
    <div className="App">
      <Header title="Simple React App" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;