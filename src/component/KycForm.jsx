import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PersonalInfo2 from "./PersonalInfo2";
import AddressInfo from "./AddressInfo";
import InvestmentInfo from "./InvestmentInfo";
import SignatureStep from "./SignatureStep";
import ReviewSubmit from "./ReviewSubmit";

export default function KycForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = [
    { label: "Personal Info", component: PersonalInfo },
    { label: "Personal Info2", component: PersonalInfo2 },
    { label: "Address Info", component: AddressInfo },
    { label: "Investment", component: InvestmentInfo },
    { label: "Signature", component: SignatureStep },
    { label: "Review", component: ReviewSubmit }
  ];

  const StepComponent = steps[step].component;

  return (
    // <div className="min-h-screen w-[40%] bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-700 flex items-center justify-center px-4">
      
      
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6 text-white">

        {/* Step Tabs */}
        {/* <div className="flex justify-between mb-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`text-xs pb-2 border-b-2 transition-all ${
                i === step
                  ? "text-pink-400 border-pink-400"
                  : "text-white/50 border-transparent"
              }`}
            >
              {s.label}
            </div>
          ))}
        </div> */}

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold">
            KYC Verification
          </h1>
          <p className="text-sm text-white/60 mt-1">
            Step {step + 1} of {steps.length}
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-1.5 mt-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-pink-400 to-purple-400 h-1.5 rounded-full transition-all"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="mt-4">
          <StepComponent
            data={formData}
            setData={setFormData}
            next={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
            back={() => setStep((s) => Math.max(s - 1, 0))}
          />
        </div>

        {/* Footer */}
        <div className="text-right text-xs text-white/50 mt-4">
          {step + 1} / {steps.length}
        </div>
      </div>
  );
}
