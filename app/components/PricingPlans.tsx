'use client';

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  priceLabel?: string;
  features: string[];
  badge?: string;
  buttonText: string;
  isPrimary?: boolean;
}

interface PricingPlansProps {
  title: string;
  plans: PricingPlan[];
  darkBG?: boolean;
}

export default function PricingPlans({ title, plans, darkBG = false }: PricingPlansProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${darkBG ? 'bg-slate-800/50' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white text-center mb-16">{title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl border transition ${
                plan.isPrimary
                  ? 'bg-gradient-to-br from-cyan-600 to-blue-600 border-cyan-400 shadow-xl shadow-cyan-500/20 transform md:scale-105'
                  : 'bg-slate-800/50 dark:bg-slate-800/50 border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-500'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white dark:text-white mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.isPrimary ? 'text-cyan-100' : 'text-gray-400 dark:text-gray-400'}`}>
                {plan.subtitle}
              </p>
              
              <div className={`text-3xl font-bold mb-6 ${
                plan.isPrimary
                  ? 'text-white'
                  : 'text-cyan-400 dark:text-cyan-400'
              }`}>
                A partir de<br />
                <span className={plan.isPrimary ? 'text-yellow-300' : 'text-white dark:text-white'}>
                  {plan.price}
                </span>
                {plan.priceLabel && (
                  <span className={`text-lg ${plan.isPrimary ? 'text-cyan-100' : 'text-gray-400 dark:text-gray-400'}`}>
                    {plan.priceLabel}
                  </span>
                )}
              </div>
              
              <ul className={`space-y-3 mb-8 ${
                plan.isPrimary
                  ? 'text-cyan-50'
                  : 'text-gray-300 dark:text-gray-300'
              }`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className={plan.isPrimary ? 'text-yellow-300' : 'text-cyan-400 dark:text-cyan-400'}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition ${
                plan.isPrimary
                  ? 'bg-white text-cyan-600 hover:shadow-lg'
                  : 'border-2 border-cyan-500 text-cyan-400 dark:text-cyan-400 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
