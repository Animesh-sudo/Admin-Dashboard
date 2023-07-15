import './app.css'
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        {/* <div className="others">other pages</div> */}
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/users' element={ <UserList/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;