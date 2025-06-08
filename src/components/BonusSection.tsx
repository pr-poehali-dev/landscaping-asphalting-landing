import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const BonusSection = () => {
  const bonuses = [
    {
      icon: "Camera",
      title: "Фотоотчёты",
      description:
        "По запросу — хоть ночью. Видите прогресс в реальном времени",
    },
    {
      icon: "Plus",
      title: "Отсыпка в подарок",
      description: "Если видим, что можно улучшить — делаем за свой счёт",
    },
    {
      icon: "Eye",
      title: "Полный контроль",
      description: "В любой момент знаете, что происходит на объекте",
    },
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500">Что получите бонусом</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Сделаем немного больше, чем обещали
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Просто потому что нам не всё равно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Icon name={bonus.icon} size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {bonus.title}
              </h3>
              <p className="text-slate-600">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
