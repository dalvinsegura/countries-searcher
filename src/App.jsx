import "./app.scss";
import AllCountries from "./components/allCountries/AllCountries";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <AllCountries />
      </main>
    </div>
  );
}

export default App;
