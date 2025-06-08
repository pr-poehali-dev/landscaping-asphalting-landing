import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы начать работу?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Свяжитесь с нами любым удобным способом
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
              >
                <Icon name="MessageSquare" className="mr-2" />
                Написать в WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
              >
                <Icon name="Phone" className="mr-2" />
                +7 (999) 123-45-67
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MapPin"
                  size={32}
                  className="text-orange-500 mx-auto mb-3"
                />
                <h3 className="font-semibold mb-2 text-white">Адрес</h3>
                <p className="text-slate-300 text-sm">
                  Работаем по всей области
                  <br />
                  Выезд на объект бесплатно
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Clock"
                  size={32}
                  className="text-orange-500 mx-auto mb-3"
                />
                <h3 className="font-semibold mb-2 text-white">Режим работы</h3>
                <p className="text-slate-300 text-sm">
                  Пн-Пт: 8:00 - 18:00
                  <br />
                  Сб-Вс: 9:00 - 16:00
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MessageCircle"
                  size={32}
                  className="text-orange-500 mx-auto mb-3"
                />
                <h3 className="font-semibold mb-2 text-white">Связь</h3>
                <p className="text-slate-300 text-sm">
                  WhatsApp, Telegram
                  <br />
                  Отвечаем быстро, 24/7
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              © 2024 Асфальтирование и благоустройство под ключ. Все права
              защищены.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
