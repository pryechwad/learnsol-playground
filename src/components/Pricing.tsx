import React, { useState } from "react";
import { pricingPlans } from "./pricingData";

const Pricing = () => {
  const [selected, setSelected] = useState(pricingPlans[0].name);

  return (
    <section className="pricing-section w-full py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2 text-center">AI Playground Pricing</h2>
      <p className="mb-8 text-center text-gray-300 max-w-xl">
        Choose the plan that fits your needs. All plans include access to the latest AI models and features.
      </p>
      <div className="w-full flex flex-col items-center mt-8">
        <div className="bg-gray-800 text-gray-100 rounded-lg px-4 py-4 text-center text-xl font-semibold max-w-2xl shadow mb-2">
          AI Playground: Instantly test, preview, and price your AI-powered code. Get real-time feedback and explore different plans to unlock more features!
          <div className="mt-3 text-base font-normal text-gray-300">
            <ul className="list-disc list-inside text-left inline-block">
              <li>Supports OpenAI GPT models for fast, reliable completions.</li>
              <li>Mobile responsive and easy to use on any device.</li>
              <li>Flexible pricing for students, professionals, and enterprises.</li>
              <li>Preview your code output before deploying to production.</li>
              <li>Upgrade to Pro for unlimited prompts and priority support.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mb-8">
        {pricingPlans.map((plan) => (
          <button
            key={plan.name}
            onClick={() => setSelected(plan.name)}
            className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-150 focus:outline-none ${selected === plan.name ? "bg-blue-500 text-white border-blue-500" : "bg-gray-900 text-gray-200 border-gray-700 hover:bg-blue-600 hover:text-white"}`}
          >
            {plan.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center items-center">
        {pricingPlans
          .filter((plan) => plan.name === selected)
          .map((plan) => (
            <div
              key={plan.name}
              className={`flex-1 bg-gray-800 rounded-xl shadow-lg p-6 min-w-[260px] max-w-xs w-full border-2 transition-all duration-200 ${plan.highlight ? "border-blue-500 scale-105" : "border-gray-700"}`}
            >
              <h3 className="text-xl font-semibold mb-2 text-center">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4 text-center">{plan.price}</p>
              <ul className="mb-4 space-y-2 text-gray-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.highlight && (
                <div className="text-center">
                  <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Pricing;
