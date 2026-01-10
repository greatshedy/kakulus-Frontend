// import ProfilePicture from "./ProfilePicture";

export default function PersonalInfo3({ data, setData, next,back }) {
  console.log(data);

  const fileToByteString = (file, maxSize = 400, quality = 0.6) => {
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result;
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = Math.min(maxSize / img.width, maxSize / img.height);

      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const compressed = canvas.toDataURL("image/jpeg", quality);
      resolve(compressed);
    };

    reader.readAsDataURL(file);
  });
};

  const edu_quali=[
    "SSCE/OND",
    "BSC", 
    "MBA/MSC",
    "Others",
  ]
  return (
    <div className="space-y-6">
      <div className="w-full flex justify-between gap-5">
        {/* Title */}
        <div>
          <label className="block text-sm text-white/70 mb-2">Title</label>

          <div className="flex gap-1.25">
            <input
              type="radio"
              //   placeholder="John Doe"
              name="title"
              value={"Mr"}
              //   value={data.full_name || ""}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />

            <label>Mr</label>
          </div>

          <div className="flex gap-[5px]">
            <input
              type="radio"
              //   placeholder="John Doe"
              name="title"
              value={"Mrs"}
              //   value={data.full_name || ""}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />

            <label>Mrs</label>
          </div>

          <div className="flex gap-[5px]">
            <input
              type="radio"
              //   placeholder="John Doe"
              name="title"
              value={"Others"}
              //   value={data.full_name || ""}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />

            <label>Others</label>
          </div>
        </div>

        <div>
          {/* Identification */}
          <label className="block text-sm text-white/70 mb-2">
            Means of ID 
          </label>
          <input
            type="file"
            accept="image/*"
            placeholder="E.g Passport"
            

            onChange={async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const byteString = await fileToByteString(file);

  setData({
    ...data,
    means_of_id: byteString, // now a string of bytes
  });
}}

            // onChange={(e) => setData({ ...data, means_of_id: e.target.value })}
            className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      {/* Empoyer Details*/}

      <div className="flex flex-col lg:flex flex-row gap-5 ">
            <div>
        <label className="block text-sm text-white/70 mb-2">
          Name of Employer
        </label>
        <input
          type="text"
          placeholder="Employer Name"
          value={data.employer_name || ""}
          onChange={(e) => setData({ ...data, employer_name: e.target.value })}
          className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>


      <div>
        <label className="block text-sm text-white/70 mb-2">
          LGA of Residence
        </label>
        <input
          type="text"
          placeholder="LGA of Residence"
          value={data.lga_resisdence || ""}
          onChange={(e) => setData({ ...data, lga_resisdence: e.target.value })}
          className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
      </div>
      

    {/* Educational Qualification  and utility bil;*/}
    <div className="flex flex-col lg:flex-row gap-5">
        <div>
          <label className="block text-sm text-white/70 mb-2">
            Educational Qualification
          </label>
          <select
            value={data.edu_qualification || ""}
            onChange={(e) => setData({ ...data, edu_qualification: e.target.value })}
            className="w-full rounded-xl bg-white/20 text-white border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="" className="text-black">
              Select Educational Qualification
            </option>
             {edu_quali.map((option) => {
            return (
                <option value={option} className="text-black">{option}</option>
            );
          })}
            
          </select>
        </div>


        <div>
          {/*Utility Bill*/}
          <label className="block text-sm text-white/70 mb-2">
            Utilitiy Bill
          </label>
          <input
            type="file"
            placeholder="E.g Nepa"
            accept="image/*"
            onChange={async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const byteString = await fileToByteString(file);

  setData({
    ...data,
   utility_bill: byteString, // now a string of bytes
  });
}}
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
            !data.title || !data.means_of_id 
            ||!data.employer_name 
            || !data.lga_resisdence ||!data.edu_qualification ?
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
