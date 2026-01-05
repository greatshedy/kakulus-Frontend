import KycForm from "./component/KycForm";
import "./App.css";
import Admin from "./Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./admin_component/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Admin />} />
        <Route path="admin-login" element={<Login/>}/>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-700 flex items-center justify-center px-4">
              <KycForm />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
