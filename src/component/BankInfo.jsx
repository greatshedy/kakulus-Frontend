export default function BankInfo({ data, setData, next, back }) {
  return (
    <div className="space-y-6">

      {/* Bank Name */}
      <div>
        <label className="block text-sm text-white/70 mb-2">
          Bank Name 
        </label>
        <input
          type="text"
          placeholder="Type Bank Name e.g Access Bank"
          value={data.bank_name || ""}
          onChange={(e) =>
            setData({ ...data, bank_name: e.target.value })
          }
          className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
          {/* Account Name */}
       <div>
        <label className="block text-sm text-white/70 mb-2">
          Account Name 
        </label>
        <input
          type="text"
          placeholder="Account Name"
          value={data.account_name || ""}
          onChange={(e) => setData({ ...data, account_name: e.target.value })}
          className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>



      {/* Account Number  */}
       <div>
        <label className="block text-sm text-white/70 mb-2">
          Account Number 
        </label>
        <input
          type="number"
          placeholder="Account Number"
          value={data.account_number || ""}
          onChange={(e) => setData({ ...data, account_number: e.target.value })}
          className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

     

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button
          onClick={back}
          className="px-6 py-2 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition"
        >
          Back
        </button>

         {
            !data.account_name || !data.account_name
            ||!data.bank_name ?
            <h1>Fill the complete form</h1>:
             <button
          onClick={next}
          className="px-8 py-2 rounded-full bg-linear-to-r from-[#02275A] via-[#0494FC] to-[#FCB709] text-white font-medium shadow-lg hover:opacity-90 transition"
        >
          Continue
        </button>
          }
       
      </div>
    </div>
  );
}
