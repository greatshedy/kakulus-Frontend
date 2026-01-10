import { useState } from "react";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const data1 = {
    email: email,
    password: password,
  };
 
  

  const submit =async (e) => {
    e.preventDefault();
    

    const response = await api.post("/login", data1);
    if (response?.data?.status=== "success") {
      
      console.log("token", response?.data?.token);
      localStorage.setItem("token", response?.data?.token);
      setLoading(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
      
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br  from-[#02275A] via-[#0494FC] to-[#FCB709] px-4 text-white">
      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 space-y-6"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Admin Login</h1>
          <p className="text-sm text-white/60 mt-1">
            Enter your email to receive access
          </p>
        </div>

        

        {/* Email */}
        <div>
          <label className="text-xs text-white/70">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* password */}
        <div>
          <label className="text-xs text-white/70">Email Address</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 transition py-3 text-sm font-medium"
        >
          Send Access Link
        </button>

        {/* Footer */}
        <p className="text-xs text-center text-white/50">
          Secure admin access only
        </p>

        {
          loading && (
            <div className="content-center flex justify-center">
                <BarLoader color="white"/>
            </div>
          )
        }
        
      </form>
    </div>
  );
}
