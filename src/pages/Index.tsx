
import { Download, PiggyBank, Coins, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp')
    };

    try {
      const response = await fetch('https://n8n.vmautomacao.com.br/webhook-test/2102094c-faac-41c4-8b3c-00720ec61942', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const successMessage = document.getElementById('successMessage');
        successMessage?.classList.add('show');
        setTimeout(() => {
          successMessage?.classList.remove('show');
        }, 3000);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  const benefits = [
    {
      icon: <PiggyBank className="w-8 h-8 text-blue-400" />,
      title: "Educação Financeira",
      description: "Aprenda os fundamentos para uma vida financeira saudável"
    },
    {
      icon: <Coins className="w-8 h-8 text-blue-400" />,
      title: "Investimentos",
      description: "Descubra as melhores estratégias para fazer seu dinheiro trabalhar"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Controle de Gastos",
      description: "Técnicas práticas para organizar suas finanças pessoais"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Hero Section with Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="Financial Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Transforme Suas Finanças com Nosso
              <span className="text-blue-400"> Ebook Gratuito</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Descubra os segredos para alcançar a independência financeira com nosso guia completo de finanças pessoais.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <div className="text-center mb-8">
              <Download className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">
                Baixe Agora Mesmo!
              </h2>
              <p className="text-gray-300">
                Preencha o formulário para receber seu ebook gratuitamente
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Seu melhor email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="Seu WhatsApp"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                />
              </div>
              <button type="submit" className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Baixar Ebook Grátis
                <Download className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#221F26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            O Que Você Vai Aprender
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="transform hover:scale-105 transition-transform duration-300 bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F2C] relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Não Perca Essa Oportunidade!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de pessoas que já transformaram suas finanças com nosso ebook.
          </p>
        </div>
      </section>

      <div id="successMessage" className="success-message">
        Ebook enviado com sucesso! Verifique seu email.
      </div>
    </div>
  );
};

export default Index;
