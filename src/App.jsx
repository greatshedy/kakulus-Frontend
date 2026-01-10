import KycForm from "./component/KycForm";
import "./App.css";
import Admin from "./Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./admin_component/Login";
import Auth from "../Auth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth/>}>
            <Route path="/dashboard" element={<Admin />} />
        </Route>
        
        <Route path="admin-login" element={<Login/>}/>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-linear-to-br from-[#02275A] via-[#0494FC] to-[#FCB709] flex items-center justify-center px-4">
              <KycForm />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
