import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';

//import logout from './pages/logout'
//import Cards from "./pages/cards";




function AuthRoute(props) {
  return props.isAuthenticated ? props.children : <Navigate to="/login" />
}

function AuthDiv(props) {
  return props.isAuthenticated ? props.children : null
}


function App(props) {

  const [isAuthenticated, setAuthenticated] = useState(false)
  let navigate = useNavigate();


  

  useEffect(() => {

    const handleLogin = () => {
      setAuthenticated(true)
      navigate('/', { replace: true })
    }
  
    
    localStorage.getItem('token') ? handleLogin() : setAuthenticated(false)
  }, [])


  return (

  
    <div className="App">
       
   
       <AuthDiv isAuthenticated={isAuthenticated}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link"  to="/login">Inicia Sesión</Link>  
              <Link className="nav-link" to="/product">Actividades</Link> 
              <Link className="nav-link " to="/logout">Cierra sesión</Link> 
              </div>
            </div>
          </div>
        </nav>
       
      </AuthDiv>
      <Routes>
        <Route path="/" element={
          <AuthRoute><Home /></AuthRoute>
        } />
        <Route path="/Login" element={<Login />} />
        <Route path="/Products" element={
          <AuthRoute><Products /></AuthRoute>
        } />
        <Route path="/Products/:id" element={<Product />} />


        <Route path="/404" element={<h1>Bloqueado</h1>} />

        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
   
    </div>
    
  );
}

export default App;
