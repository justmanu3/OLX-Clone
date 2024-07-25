import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import {AuthContext, FirebaseContext} from './store/Context';
import Create from './Components/Create/Create';
import View from './Components/View/View';
import Post from './store/postContext';
import Posts from './Components/Posts/Posts';


function App() {
  const {firebase} = useContext(FirebaseContext)
  const {setUser}= useContext(AuthContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    }) 
  })

  return (
    <div >

    <Post> 
      <Router>
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/signup' element={<Signup/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/create' element={<Create/>}/>
         <Route path='/view' element={<View/>}/>
         <Route path='/post' element={<Posts/>}/>
        </Routes>
      </Router>
    </Post> 
    </div>
  );
}

export default App;
