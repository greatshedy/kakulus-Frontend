import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PersonalInfo2 from "./PersonalInfo2";
import AddressInfo from "./AddressInfo";
import InvestmentInfo from "./InvestmentInfo";
import InvestmentInfo2 from "./InvestmentInfo2";
import PersonalInfo3 from "./PersonalInfo3";
import SignatureStep from "./SignatureStep";
import ReviewSubmit from "./ReviewSubmit";
import kakulus from "../assets/kakulus.jpeg";
import BankInfo from "./BankInfo";

export default function KycForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = [
    { label: "Personal Info", component: PersonalInfo },
    { label: "Personal Info2", component: PersonalInfo2 },
    { label: "Address Info", component: AddressInfo },
    { label: "Investment", component: InvestmentInfo },
    { label: "Personal Info3", component: PersonalInfo3 },
    { label: "Investment2", component: InvestmentInfo2 },
    { label: "Bank Info", component: BankInfo },
    { label: "Signature", component: SignatureStep },
    { label: "Review", component: ReviewSubmit }
  ];

  const StepComponent = steps[step].component;

  return (
   
      
      
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6 text-white">


        {/* Header */}
        <div className="mb-6">
          <div className="mb-7.5">
            <img className="h-25 object-cover w-75 mb-2.5 rounded-2xl bg-[red]"  src={kakulus} alt="" />
            <p>Pathway to Sustainable Wealth</p>
          </div>
          <h1 className="text-xl font-semibold">
            KYC Verification
          </h1>
          <p className="text-sm text-white/60 mt-1">
            Step {step + 1} of {steps.length}
          </p>

          {/* Additionanl info */}
          {
            step >0?null:
            <p>
            The purpose of this form is to obtain basic information from the prospective client of Kakulus Capital Limited. The information obtained will be used strictly for the purpose of providing investment advisory service and no part of this information will be shared with any third party entity without client's consent. All information obtained will be kept in strict confidence.
          </p>

          }
          
          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-1.5 mt-4 overflow-hidden">
            <div
              className="bg-linear-to-r  from-[#02275A] via-[#0494FC] to-[#FCB709] h-1.5 rounded-full transition-all"
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
