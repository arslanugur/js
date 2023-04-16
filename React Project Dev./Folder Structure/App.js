// Bu bir React Componenti, bir fonksiyon oluşturup kodlar döndürüyorsun.
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



// Test için basit bir şekilde başlatırsak
import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      test
      <img src="/logo.png" alt="" />        // herhangi bir static dosyayı bu şekilde çeker
      // <img src="logo.svg" alt="" />         // bu şekilde bir şey ifade etmez, import edilmeli
      <img src={logo} alt="" />
    </div>
  );
}

export default App;




// Build sırasında proje kodlarının tarayıcı da görünmesini istemiyorsan
"build": "GENERATE_SOURCEMAP=false react-scripts build",...






