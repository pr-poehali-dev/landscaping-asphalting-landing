import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: "Phone",
      title: "Звонок и выезд",
      description: "Бесплатный замер участка и консультация на месте",
    },
    {
      number: "02",
      icon: "FileText",
      title: "Смета и договор",
      description: "Прозрачный расчёт без скрытых доплат, подписание договора",
    },
    {
      number: "03",
      icon: "Truck",
      title: "Выполнение работ",
      description:
        "Подготовка, асфальтирование, благоустройство — всё под ключ",
    },
    {
      number: "04",
      icon: "CheckCircle",
      title: "Сдача и оплата",
      description: "Приёмка работ, оплата по факту, гарантийные обязательства",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Как мы работаем
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Простая схема без лишних шагов — от звонка до сдачи объекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="absolute top-4 right-4 text-6xl font-bold text-slate-100">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    <Icon
                      name={step.icon}
                      size={32}
                      className="text-orange-600"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
