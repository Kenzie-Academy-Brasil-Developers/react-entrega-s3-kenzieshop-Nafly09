import "./App.css";
import Products from "./components/products";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <NavBar />
          <Products />
        </div>
      </header>
    </div>
  );
}

export default App;
