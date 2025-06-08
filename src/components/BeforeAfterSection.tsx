const BeforeAfterSection = () => {
  const projects = [
    {
      title: "Асфальтирование двора",
      before:
        "https://images.unsplash.com/photo-1581094271901-8a70e37d1e46?w=400&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "120 м² • Подготовка основания, укладка асфальта, разметка",
    },
    {
      title: "Благоустройство участка",
      before:
        "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?w=400&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      description: "300 м² • Планировка, дренаж, асфальт, озеленение",
    },
    {
      title: "Подъездные пути",
      before:
        "https://images.unsplash.com/photo-1597850928636-2b4e84a5e86b?w=400&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      description: "80 м² • Укрепление грунта, асфальтирование подъезда",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            До и После
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Реальные объекты наших клиентов — результат говорит сам за себя
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={project.before}
                      alt="До"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      ДО
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={project.after}
                      alt="После"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      ПОСЛЕ
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
