import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "UserCheck",
      title: "На объекте — реальный человек",
      description: "Не менеджер в красивой рубашке, а опытный прораб",
    },
    {
      icon: "CreditCard",
      title: "Без предоплаты",
      description: "Оплата только по факту выполненной работы",
    },
    {
      icon: "Gift",
      title: "Бонусы сверх договора",
      description: "Всегда делаем чуть больше — отсыпка, уборка в подарок",
    },
    {
      icon: "Clock",
      title: "Соблюдаем сроки",
      description: "Своя техника и проверенная бригада — никаких срывов",
    },
    {
      icon: "Shield",
      title: "Гарантия на работы",
      description: "Отвечаем за качество, исправляем недочёты бесплатно",
    },
    {
      icon: "MessageCircle",
      title: "Связь 24/7",
      description: "WhatsApp, телефон — отвечаем быстро, отчитываемся честно",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Наши преимущества
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Вы не будете нас контролировать
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Мы сами всё покажем и расскажем. Работаем честно, как для себя.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Icon name={benefit.icon} size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {benefit.title}
              </h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
