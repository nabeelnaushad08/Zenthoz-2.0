export function TrustMetrics() {
  const metrics = [
    { value: '200+', label: 'Projects Delivered', icon: '🚀' },
    { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { value: '5+', label: 'Years in Business', icon: '📅' },
    { value: '50+', label: 'Happy Clients', icon: '🤝' },
  ];

  return (
    <section className="relative bg-[#0f0f0f] border-y border-white/[0.06] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.06]">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center text-center px-6 py-4">
              <span className="text-4xl lg:text-5xl font-black text-white mb-2">{m.value}</span>
              <span className="text-white/40 text-sm">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
