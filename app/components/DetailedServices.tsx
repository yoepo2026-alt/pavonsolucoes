'use client';

interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  border: string;
  bgGradient: string;
  image: string;
  items: string[];
  order?: string;
  imageOrder?: string;
  reverse?: boolean;
}

interface DetailedServicesProps {
  title: string;
  services: Service[];
  darkBG?: boolean;
}

export default function DetailedServices({ title, services, darkBG = true }: DetailedServicesProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${darkBG ? 'bg-slate-800/50 dark:bg-slate-800/50' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white text-center mb-16">{title}</h2>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className={`grid ${service.order || 'grid-cols-1 md:grid-cols-2'} gap-8 items-center ${service.reverse ? 'flex-row-reverse' : ''}`}>
              {service.reverse ? (
                <>
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.bgGradient} rounded-lg flex items-center justify-center mb-6`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white dark:text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <ul className="text-gray-300 dark:text-gray-300 space-y-2 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="text-cyan-400 font-bold">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-gradient-to-br ${service.gradient} p-12 rounded-xl border ${service.border}`}>
                    <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-lg" />
                  </div>
                </>
              ) : (
                <>
                  <div className={`bg-gradient-to-br ${service.gradient} p-12 rounded-xl border ${service.border}`}>
                    <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-lg" />
                  </div>
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.bgGradient} rounded-lg flex items-center justify-center mb-6`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white dark:text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <ul className="text-gray-300 dark:text-gray-300 space-y-2 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="text-cyan-400 font-bold">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
