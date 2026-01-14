export default function InvestmentInfo({ data, setData, next, back }) {
  const investmentOptions = [
    "Novice",
    "Semi-aware",
    "Financially literate",
    "Sophisticated Investor",
  ];

  const riskData = [
    "Zero risk tolerance level",
    "Low risk appetite",
    "Medium Risk tolerance",
    "High risk tolerance level",
  ];
  return (
    <div className="space-y-6">
      {/* Risk Tolerance */}

      <div className="flex justify-between">
        <div>
          <label className="block text-sm text-white/70 mb-2">
            Investment Level
          </label>
          {investmentOptions.map((option) => {
            return (
              <div className="flex gap-[5px]">
                <input
                  type="radio"
                  //   placeholder="John Doe"
                  name="investment_level"
                  value={option}
                  //   value={data.full_name || ""}
                  onChange={(e) =>
                    setData({ ...data, investment_level: e.target.value })
                  }
                />

                <label>{option}</label>
              </div>
            );
          })}
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-2">
            Risk Tolerance
          </label>
          <select
            value={data.risk || ""}
            onChange={(e) => setData({ ...data, risk: e.target.value })}
            className="w-full rounded-xl bg-white/20 text-white border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="" className="text-black">
              Select risk level
            </option>
             {riskData.map((option) => {
            return (
                <option value={option} className="text-black">{option}</option>
            );
          })}
            
          </select>
        </div>
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
            data.investment_level || data.risk
           ?
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
