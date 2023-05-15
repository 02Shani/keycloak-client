import './App.css';
import Public from './Components/Public';
import Protected from './Components/Protected';
import useAuth from './Hooks/useAuth';

function App() {
  let [isLogin,token]=useAuth()
  console.log(isLogin);
  return isLogin ? <Protected token={token}/> : <Public/>
}

export default App;
