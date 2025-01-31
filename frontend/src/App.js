// import React, {useEffect, useState} from 'react';
// import Axios from 'axios';

// const App = () => {

//   const [data, setData] = useState("");
//   const [transactions, setTransactions] = useState("");

//   const getData = async () => {
//     const response = await Axios.get("http://localhost:4000/getData");
//     setData(response.data);
//   }

//   useEffect(() => {
//     getData()
//   }, []);

//   const getTransactions = async () => {
//       Axios.get("http://localhost:4000/transactions/all")
//       .then(response => setTransactions(response.data))
//       .catch(error => console.error('error fetching data'))
    
//   }

//   useEffect(() => {
//     getTransactions()
//   }, []);

//   return ( 
//     <>
//     <div> {data} </div>
//     <div> {JSON.stringify(transactions)} </div>
//     </>


//   )
// }

// export default App;

import './styles.css';
import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import {UserProvider} from './context';
import AllData from './alldata'; 
import Balance from './balance';  
import CreateAccount from './createaccount'; 
import DeleteAccount from './deleteAccount';
import Deposit from './deposit';
import Home from './home';  
import Login from './login';  
import NavBar from './navbar';
import Withdraw from './withdraw';




function App() {

  return (
    // using the routing components loaded in context.js to create a routing mechanism that points to components
    // the context provider tag takes an initial value, which is shared by all of the consuming components
    <HashRouter>
      <UserProvider>
        <NavBar />
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/CreateAccount/*" element={<CreateAccount/>} />
        <Route path="/login/*" element={<Login/>} />
        <Route path="/deposit/*" element={<Deposit/>} />
        <Route path="/withdraw/*" element={<Withdraw/>} />
        <Route path="/balance/*" element={<Balance/>} />
        <Route path="/DeleteAccount/*" element = {<DeleteAccount/>} />
        <Route path="/alldata/*" element={<AllData/>} />
        </Routes>
      </UserProvider>
    </HashRouter>
  );
}


export default App;