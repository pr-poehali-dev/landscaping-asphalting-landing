import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Users",
      title: "Работаете с людьми, не с фирмой",
      description:
        "Никаких менеджеров в костюмах — сразу говорите с тем, кто будет делать",
    },
    {
      icon: "CreditCard",
      title: "Оплата по факту",
      description:
        "Начинаем без предоплаты — платите только за готовый результат",
    },
    {
      icon: "Gift",
      title: "Делаем чуть больше обещанного",
      description: "Отсыпка, расширение, уборка — бонусом, так у нас принято",
    },
    {
      icon: "Truck",
      title: "Всё своё — техника и люди",
      description: "Никаких «партнёров» и подрядчиков — отвечаем за всё сами",
    },
    {
      icon: "FileCheck",
      title: "Смета как договор",
      description:
        "Фиксируем всё до начала — никаких «всплыло, надо доплатить»",
    },
    {
      icon: "MessageCircle",
      title: "Отчёты без отмазок",
      description: "Спросите «как дела?» — получите честный ответ с фото",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Почему выбирают нас
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Работаем с сильными людьми — с характером и без пустых обещаний
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Мы такие же, как вы — с характером, но по совести.
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
