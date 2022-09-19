
import "./app.scss";
import AllCountries from "./components/allCountries/AllCountries";
import Navbar from "./components/navbar/Navbar";
import Searcher from "./components/seacher/Searcher";


function App() {

  return (
    <div>
      <Navbar/>
      <Searcher/>
      <AllCountries/>
    </div>
  )
}

export default App
