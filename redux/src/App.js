import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./Pages/UserDetails";
import UsersList from "./Pages/UsersList";
import Products from "./Pages/Products";
import NavBar from "./Components/NavBar";
import FooterPage from "./Components/FooterPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<UsersList />} />
        <Route path='/products' element={<Products />} />
        <Route path='/users/:userId' element={<UserDetails />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;