import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";
import Reset from "./components/reset";

const App = () => {
  return (
    <div className="container text-secondary">
      <Header />
      <Counter />
      <Reset />
    </div>
  );
};

export default App;
