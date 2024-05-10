import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Dashboard from "../src/pages/Dashboard";
import axios from "axios";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import {Toaster} from "react-hot-toast"
import { UserContextProvider } from "../context/userContext";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;



export default function App() {
  return (

    <UserContextProvider>
      <Navbar/>
      <Toaster position="bottom-center" toastOptions={{duration: 3000}}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </UserContextProvider>
  )
}