import { useState } from "react";
import { PLANS } from "../constants";
const SelectPlan = ({ setSelectedPlan, setCurrentPage }) => {
  const [selected, setSelected] = useState("");
  const [yearly, setYearly] = useState(false);
  const selectedPlan = PLANS.find((plan) => plan.plan === selected) || {};
  const selectedPlanType = selectedPlan.plan || "";
  const selectedPlanPrice = yearly
    ? selectedPlan.yearlyPrice
    : selectedPlan.monthlyPrice || 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form submitted");
    setSelectedPlan({ selectedPlanType, selectedPlanPrice });
  };
  // console.log(selectedPlan);

  return (
    <div className="p-5">
      <p>Addones Page</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        {PLANS.map((plan) => (
          <div key={plan.plan}>
            <input
              type="radio"
              id={plan.plan}
              name="plan"
              value={plan.plan}
              checked={selected === plan.plan} // Let this only be true if the selected input is equlal to the current plan in the map
              onChange={() => setSelected(plan.plan)}
            />
            <label htmlFor={plan.plan} className="capitalize">
              {plan.plan}
            </label>
          </div>
        ))}

        <div>
          <button type="button" className="border-2 border-black p-3">
            Go back
          </button>
          <button
            type="submit"
            className="mx-3 border-2 border-black p-3"
            disabled={!selected}
          >
            Next
          </button>
        </div>
      </form>
      <p>{`Selected plan is : ${selected}`}</p>

      <div className="my-5 flex items-center justify-center gap-4">
        <span
          className={`text-sm font-bold ${yearly ? "text-gray-600" : "text-blue-950"}`}
        >
          Monthly
        </span>
        {/* The actual toggle */}
        <div
          onClick={() => setYearly(!yearly)}
          className="flex h-6 w-12 cursor-pointer items-center rounded-full bg-blue-900 p-1"
        >
          <div
            className={`h-4 w-4 transform rounded-full bg-white shadow-md duration-300 ${
              yearly ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>

        {/* End of actual toggle */}
        <span
          className={`text-sm font-bold ${yearly ? "text-blue-950" : "text-gray-600"}`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default SelectPlan;
