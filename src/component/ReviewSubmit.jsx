import { useState } from "react";
import { api } from "../../api";
import { BarLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export default function ReviewSubmit({ data, back,setData }) {
   const [loading, setLoading] = useState(false);
   const [sub,setSub]=useState(false)
   const [privacycheck, setPrivacycheck]=useState(false)
   const [readMore,setReadMore]=useState(false)
   const [error,setError]=useState(false)

   const navigate=useNavigate()

  console.log("Review Data",data)

   const privacyTest=`
            I hereby consent to the collection, verification, 
            and use of my Know Your Customer (KYC) information, 
            including but not limited to my identity documents, proof 
            of address, and financial information for the purpose of 
            compliance with regulatory requirements, customer 
            identification, and management of my investment portfolio. 
            I understand that my KYC data will be handled securely and 
            will not be shared with third parties except as required by 
            law or with my explicit consent. Kakulus Capital Limited is 
            hereby committed to protecting your personal data and preserving 
            the confidentiality of information provided. Your personal data 
            through this medium will be used for account opening and 
            other lawful processing in line the applicable data protection 
            regulations. By signing below, you are consenting to the processing 
            of your personal data in line with the Company’s Privacy Policy.
            `

    console.log("ReviewSubmit data:", data);
    const sendUserData = async () => {
      setLoading(true)
        try{
            const response =await api.post("/submit_kyc", data);
            console.log("Data submitted successfully:", response.data);
            setError(false)
            setTimeout(()=>{
              setLoading(false)
              setSub(true)
              window.location.reload()
            },3000)
          
            
            
          }
        catch(error){
            console.error("Error submitting data:", error);
            setError(true)
            setLoading(false)
        }
    }
    
  return (
    <div className="space-y-6">

      <h3 className="text-lg font-semibold text-white">
        Review & Confirm
      </h3>

      {/* Summary Card */}
      <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 space-y-4 text-sm text-white">

        {/* Personal */}
        <div>
          <p className="text-white/50 text-xs mb-1">Personal Info</p>
          <p><span className="text-white/60">Name:</span> {data.full_name}</p>
          <p><span className="text-white/60">Phone:</span> {data.phone}</p>
          <p><span className="text-white/60">Email:</span> {data.email}</p>
        </div>

        <hr className="border-white/10" />

        {/* Address */}
        <div>
          <p className="text-white/50 text-xs mb-1">Address</p>
          <p>
            {data.address}, {data.state}, {data.country}
          </p>
        </div>

        <hr className="border-white/10" />

        {/* Investment */}
        <div>
          <p className="text-white/50 text-xs mb-1">Investment Profile</p>
          <p><span className="text-white/60">Risk:</span> {data.risk}</p>
          <p className="text-white/70 text-xs mt-1">
            {data.objective}
          </p>
        </div>

        {/* Profile Picture Preview */}
        {data.profile_picture && (
          <>
            <hr className="border-white/10" />
            <div>
              <p className="text-white/50 text-xs mb-2">
                Profile Picture
              </p>
              <img
                src={data.profile_picture}
                className="w-20 h-20 rounded-full object-cover border border-white/30"
              />
            </div>
          </>
        )}
      </div>

      {/* confirm privacy */}
      <div className="flex gap-[20px]">
        <input 
    
        type="checkbox" 
        checked={data?.privacy ==="true"}
        value={privacycheck}
        onChange={(e)=>{
            setPrivacycheck(!privacycheck)
            setData({ ...data, privacy: e.target.value })
        }}
        />

    <div className="flex ">
        <p>
          {
            readMore===false> 200 ? privacyTest.slice(0,200):
            privacyTest
          }
          <span onClick={()=>setReadMore(!readMore)} className="ml-12.5 text-[blue]">
            {
              readMore ===false?"Read More...":
              "Read Less"
            }
            
          </span>
        </p>
    </div>
        
      </div>

      {/* Actions */}
      <div className="flex justify-between gap-12.5 pt-4">
        <button
          onClick={back}
          className="px-6 py-2 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition"
        >
          Back
        </button>


        {
          data.privacy === "false" || !data.privacy  ? 
            "Please Check The box to accept consent":
          <button
          onClick={sendUserData}
          className="px-8 py-2 rounded-full bg-linear-to-r from-[#02275A] via-[#0494FC] to-[#FCB709] text-white font-medium shadow-lg hover:opacity-90 transition"
        >
          Submit
        </button>
          
        }
        
      </div>

      <div className="flex flex-col justify-center items-center">
        {
          loading && (
            <div className="content-center flex justify-center">
                <BarLoader color="white"/>
                
            </div>
          )
        }
        {
          sub?<p className="text-[white]">Submited</p>:
          null
        }
        {
          error?<p className="text-[red] text-center">
            There was an Error submitting your file, can you try again.
          </p>:
          null
        }
      </div>
    </div>
  );
}
