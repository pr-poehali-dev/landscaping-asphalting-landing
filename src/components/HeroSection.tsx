import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Асфальтирование и благоустройство под ключ
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-slate-300">
            Быстро, честно, с гарантией
          </p>
          <p className="text-lg mb-8 text-slate-400">
            Без предоплаты • Оплата по факту • Бонусом делаем больше, чем
            обещаем
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Calculator" className="mr-2" />
              Получить расчёт бесплатно
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
            >
              <Icon name="Phone" className="mr-2" />
              Позвонить сейчас
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={48} className="text-orange-500 mb-2" />
              <p className="text-sm text-slate-300">Выезд и замер бесплатно</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon
                name="FileText"
                size={48}
                className="text-orange-500 mb-2"
              />
              <p className="text-sm text-slate-300">
                Смета прозрачная, без доплат
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Icon
                name="MessageSquare"
                size={48}
                className="text-orange-500 mb-2"
              />
              <p className="text-sm text-slate-300">
                Отчёты в WhatsApp по запросу
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
