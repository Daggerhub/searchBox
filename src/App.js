import Appshell from "./components/appshell";
import Discover from "./components/discover";
import Navbar from "./components/navbar";
import SearchBox from "./components/searchBox";
import Smallcase from "./components/smallcases";
import Stories from './components/stories';
function App() {
  return (
    <Appshell>
      <Navbar/>
      <Discover/>
      <Smallcase/>
    </Appshell>
  );
}

export default App;
