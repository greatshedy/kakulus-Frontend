// import ProfilePicture from "./ProfilePicture";

export default function PersonalInfo2({ data, setData, next,back }) {
  console.log(data);
  return (
    <div className="space-y-6">
      <div className="w-full flex justify-between gap-[20px]">
        {/* Gender */}
        <div>
          <label className="block text-sm text-white/70 mb-2">Gender</label>

          <div className="flex gap-[5px]">
            <input
              type="radio"
              //   placeholder="John Doe"
              name="gender"
              value={"Male"}
              //   value={data.full_name || ""}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />

            <label>Male</label>
          </div>

          <div className="flex gap-[5px]">
            <input
              type="radio"
              //   placeholder="John Doe"
              name="gender"
              value={"Female"}
              //   value={data.full_name || ""}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />

            <label>Female</label>
          </div>
        </div>

        <div>
          {/* Date of Birth */}
          <label className="block text-sm text-white/70 mb-2">
            Date  of Birth
          </label>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            value={data.date_of_birth || ""}
            onChange={(e) => setData({ ...data, date_of_birth: e.target.value })}
            className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      {/* Occupation*/}
      <div>
        <label className="block text-sm text-white/70 mb-2">
          Nature of Current Occupation
        </label>
        <input
          type="text"
          placeholder="Your occupation"
          value={data.occupation || ""}
          onChange={(e) => setData({ ...data, occupation: e.target.value })}
          className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* State & Country */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/70 mb-2">
            Next of Kin
          </label>
          <input
            type="text"
            placeholder="Next of Kin"
            value={data.next_of_kin || ""}
            onChange={(e) =>
              setData({ ...data, next_of_kin: e.target.value })
            }
            className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-2">
            Next of Kin Phone No. or Email
          </label>
          <input
            type="text"
            placeholder="Next of Kin Phone Number"
            value={data.next_of_kin_phone_number || ""}
            onChange={(e) =>
              setData({ ...data, next_of_kin_phone_number: e.target.value })
            }
            className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>


       
      </div>

      {/* Continue */}
      <div className="flex justify-between pt-4">
         <button
          onClick={back}
          className="px-6 py-2 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition"
        >
          Back
        </button>


          {
            !data.gender || !data.date_of_birth 
            ||!data.next_of_kin_phone_number 
            || !data.next_of_kin ||!data.occupation ?
            <h1>Fill the complete form</h1>:
             <button
          onClick={next}
          className="px-8 py-2 rounded-full bg-gradient-to-r from-[#02275A] via-[#0494FC] to-[#FCB709] text-white font-medium shadow-lg hover:opacity-90 transition"
        >
          Continue
        </button>
          }
       
      </div>
    </div>
  );
}
