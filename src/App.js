import react, {useContext} from "react"
import SearchBox from "./components/searchBox";
import Stories from './components/stories';
function App() {
  return (
    <div className="App">
      <SearchBox/>
      <Stories/>
    </div>
  );
}

export default App;
