import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ClientTypesSection = () => {
  const clientTypes = [
    {
      icon: "Building2",
      title: "Торговые центры",
      description: "Парковки, подъездные пути, площадки для арендаторов",
      benefit: "Сдавайте помещения на 2-3 недели раньше",
    },
    {
      icon: "Warehouse",
      title: "Склады и базы",
      description: "Территории под грузовики, разгрузочные зоны, въезды",
      benefit: "Техника не застрянет даже в дождь",
    },
    {
      icon: "Factory",
      title: "Производства",
      description: "Асфальтирование дворов, проездов, стоянок для персонала",
      benefit: "Работники не будут ходить по грязи",
    },
    {
      icon: "Truck",
      title: "Логистические центры",
      description: "Площадки под фуры, маневровые зоны, подъезды",
      benefit: "Выдержит любые нагрузки и поток техники",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            С кем работаем
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Делаем асфальтирование для бизнеса любого масштаба
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((type, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Icon
                    name={type.icon}
                    size={32}
                    className="text-orange-600"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {type.title}
                </h3>
                <p className="text-slate-600 mb-3">{type.description}</p>
                <p className="text-sm text-orange-600 font-medium">
                  {type.benefit}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTypesSection;
