import React, { useState } from "react";
import { pricingPlans } from "./pricingData";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[0]);

  return (
    <section className="pricing-section w-full py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2 text-center">AI Playground Pricing</h2>
      <p className="mb-8 text-center text-gray-300 max-w-xl">Choose the plan that fits your needs. All plans include access to the latest AI models and features.</p>
      <div className="flex gap-4 mb-8">
        {pricingPlans.map((plan) => (
          <button
            key={plan.name}
            onClick={() => setSelectedPlan(plan)}
            className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-150 focus:outline-none ${selectedPlan.name === plan.name ? "bg-blue-500 text-white border-blue-500" : "bg-gray-900 text-gray-200 border-gray-700 hover:bg-blue-600 hover:text-white"}`}
          >
            {plan.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-md border-2 border-blue-500">
        <h3 className="text-xl font-semibold mb-2 text-center">{selectedPlan.name}</h3>
        <p className="text-2xl font-bold mb-4 text-center">{selectedPlan.price}</p>
        <ul className="mb-4 space-y-2 text-gray-200">
          {selectedPlan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
        {selectedPlan.highlight && (
          <div className="text-center">
            <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
