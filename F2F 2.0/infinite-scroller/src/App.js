import './App.css';
import InfiniteDataScroll from './components/InfiniteDataScroll';
import { SignUpForm } from './components/SignUpForm';

function App() {
  return (
    <div className="App">
     
     <InfiniteDataScroll />
     <hr />
    
     <SignUpForm />
    </div>
  );
}

export default App;
