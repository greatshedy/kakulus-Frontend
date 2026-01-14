export default function InvestmentInfo2({ data, setData, next, back }) {
  console.log(data);
  const investmentOptions = [
    "Augmenting Salary Income",
    "Meeting family needs",
    "Building future wealth",
    "Retirement planning",
    "Creating Multiple Income Sources",
    "Philanthropic purpose",
    "Others",
  ];

  const current_source_of_wealth = [
    "Salary",
    "Small business source",
    "Investment income",
    "Family Inheritance",
    "Others Sources",
  ];

  const nature_of_existing_investments = [
    "Financial Investment",
    "Business Investment",
    "Real Estates",
    "Others",
  ];

  const current_size_of_investments = [
    "Below N5million",
    "N5million - N20million",
    "N20million - N50million",
    "N50million - N100million",
    "N100million - N200million",
    "N200million and above",
  ];

  return (
    <div className="space-y-6">
      {/* Risk Tolerance */}

      <div className="flex gap-[20px] flex-col lg:flex-row">  

        <div className="w-full lg:w-[50%]">
  <label className="block text-sm text-white/70 mb-2">
    Investment Objective
  </label>
  {investmentOptions.map((option) => {
    const isChecked = data.investment_Obj?.includes(option) || false;

    return (
      <div className="flex gap-[5px]" key={option}>
        <input
          type="checkbox"
          value={option}
          checked={isChecked}
          onChange={(e) => {
            if (e.target.checked) {
              // Add to array
              setData({
                ...data,
                investment_Obj: [
                  ...(data.investment_Obj || []),
                  option,
                ],
              });
            } else {
              // Remove from array
              setData({
                ...data,
                investment_Obj: (data.investment_Obj || []).filter(
                  (item) => item !== option
                ),
              });
            }
          }}
        />
        <label>{option}</label>
      </div>
    );
  })}
</div>


        <div className="w-full lg:w-[50%]">
  <label className="block text-sm text-white/70 mb-2">
   Current Source of wealth
  </label>
  {current_source_of_wealth.map((option) => {
    const isChecked = data.current_source_of_wealth?.includes(option) || false;

    return (
      <div className="flex gap-[5px]" key={option}>
        <input
          type="checkbox"
          value={option}
          checked={isChecked}
          onChange={(e) => {
            if (e.target.checked) {
              // Add to array
              setData({
                ...data,
                current_source_of_wealth: [
                  ...(data.current_source_of_wealth || []),
                  option,
                ],
              });
            } else {
              // Remove from array
              setData({
                ...data,
                current_source_of_wealth: (data.current_source_of_wealth || []).filter(
                  (item) => item !== option
                ),
              });
            }
          }}
        />
        <label>{option}</label>
      </div>
    );
  })}
</div>

      </div>



      {/* Risk Tolerance 2 */}
      <div className="flex gap-[20px] flex-col lg:flex-row">
       

          <div className="w-full lg:w-[50%]">
  <label className="block text-sm text-white/70 mb-2">
   Nature of existing investments
  </label>
  {nature_of_existing_investments.map((option) => {
    const isChecked = data.nature_of_existing_investments?.includes(option) || false;

    return (
      <div className="flex gap-[5px]" key={option}>
        <input
          type="checkbox"
          value={option}
          checked={isChecked}
          onChange={(e) => {
            if (e.target.checked) {
              // Add to array
              setData({
                ...data,
                nature_of_existing_investments: [
                  ...(data.nature_of_existing_investments || []),
                  option,
                ],
              });
            } else {
              // Remove from array
              setData({
                ...data,
                nature_of_existing_investments: (data.nature_of_existing_investments || []).filter(
                  (item) => item !== option
                ),
              });
            }
          }}
        />
        <label>{option}</label>
      </div>
    );
  })}
</div>

        <div className="w-full lg:w-[50%]">
          <label className="block text-sm text-white/70 mb-2">
            Current size of investments
          </label>
          {current_size_of_investments.map((option) => {
            return (
              <div className="flex gap-[5px]">
                <input
                  type="radio"
                  //   placeholder="John Doe"
                  name="Current size of investments"
                  value={option}
                  //   value={data.full_name || ""}
                  onChange={(e) =>
                    setData({
                      ...data,
                      current_size_of_investments: e.target.value,
                    })
                  }
                />

                <label>{option}</label>
              </div>
            );
          })}
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
            data.investment_Obj || data.current_source_of_wealth
            ||data.nature_of_existing_investments
            || data.current_size_of_investments ?
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
