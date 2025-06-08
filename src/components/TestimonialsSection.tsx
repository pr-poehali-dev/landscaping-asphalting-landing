import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Сергей Волков",
      company: "ТЦ «Премиум»",
      text: "Сделали парковку за 4 дня. Без срывов, без доплат. Арендаторы заехали в срок — я заработал на месяц раньше.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Андрей Петров",
      company: "Логистический центр «Форвард»",
      text: "Работают как надо — приехали, сделали, уехали. Без лишней болтовни. Фуры ездят — асфальт держится отлично.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Михаил Федоров",
      company: "Производственная база «Металл-Строй»",
      text: "Честные люди. Смету не раздули, сроки не сорвали. Ещё и въезд расширили — сказали, так правильнее.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Отзывы от таких же, как вы
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Предприниматели с характером — о работе без отмазок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
