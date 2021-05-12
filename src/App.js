import  ParamsExample from './Navigation';
import ProductContext from "./ProductContext";
import "./App.css";
function App() {
  return (
    <div className="App">
  <div className="App-header">
    <ProductContext>
      <ParamsExample/>
    </ProductContext>
  </div>

    </div>
  );
}

export default App;
