import './app.css'
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/users' element={ <UserList/>}/>
          <Route path='/user/:userId' element={ <User/> }/>
          <Route path='/newUser' element={ <NewUser/>}/>
          <Route path='/products' element={ <ProductList/> } />
          <Route path='/product/:productId' element={ <Product/> }/>
          <Route path='/newproduct' element={ <NewProduct/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;