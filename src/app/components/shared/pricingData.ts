export type PricingPlan = {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0 / month",
    features: [
      "Limited prompts per day",
      "Access to basic AI models",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$19 / month",
    features: [
      "Unlimited prompts",
      "Access to advanced AI models (GPT-4, etc.)",
      "Priority support",
      "Early access to new features",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    features: [
      "Custom usage limits",
      "Dedicated support",
      "Custom integrations",
      "SLAs & security features",
    ],
  },
];
