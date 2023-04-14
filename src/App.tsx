import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "@pages/auth/Register";
import Login from "@pages/auth/Login";
import Home from "@pages/home/Home";
import Dashboard from "@pages/dashboard/Dashboard";
import Abstracts from "@pages/dashboard/Abstracts";
import Reviewers from "@pages/dashboard/Reviewers";
import { ReactElement } from "react";
import Settings from "@pages/dashboard/Settings";

function App():ReactElement {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/abstracts" element={<Abstracts />} />
        <Route path="/dashboard/reviewers" element={<Reviewers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
