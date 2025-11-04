import React from 'react';

const SobreNos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-12">
      <div className="container mx-auto px-6">
        
        {/* Hero Section Moderna */}
        <section className="text-center mb-16 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Sobre Nós
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-light">
              Conheça a <span className="font-semibold text-cyan-400">Quartzo Sollutions</span> e nossa missão!
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Nossa <span className="text-cyan-400">História</span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A <strong className="text-blue-900">Quartzo Sollutions</strong> nasceu da paixão por tecnologia 
                  e da vontade de transformar ideias em soluções reais que fazem a 
                  diferença no mercado de Recursos Humanos.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Combinamos expertise técnica com visão estratégica para entregar 
                  sistemas que realmente atendem às necessidades dos nossos clientes, 
                  sempre com foco em inovação e qualidade.
                </p>
              </div>
            </div>
          </div>
          
          {/* Imagem Institucional com Destaque */}
          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://i.imgur.com/3hIqIbw.jpeg" 
                alt="Equipe Quartzo Solutions" 
                className="w-full h-auto rounded-xl object-cover shadow-lg"
              />
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-900 rounded-full opacity-10 -z-10"></div>
          </div>
        </div>

        {/* Missão, Visão e Valores - Cards Modernos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Missão</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Desenvolver soluções tecnológicas inovadoras para o RH que 
              impulsionem a transformação digital com qualidade e eficiência.
            </p>
          </div>
          
          <div className="group bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-blue-900 text-2xl font-bold">👁️</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Visão</h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              Ser referência nacional em desenvolvimento de sistemas de RH 
              personalizados e de alta performance.
            </p>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">💎</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Valores</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Qualidade, Transparência, Inovação e Comprometimento com o 
              sucesso do cliente.
            </p>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Por que escolher a <span className="text-cyan-400">Quartzo Sollutions</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: 'Alta Performance', desc: 'Sistemas otimizados e rápidos' },
              { icon: '🔒', title: 'Segurança', desc: 'Proteção total dos dados' },
              { icon: '🛠️', title: 'Suporte', desc: 'Assistência especializada 24/7' },
              { icon: '💡', title: 'Inovação', desc: 'Tecnologia de ponta' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SobreNos;

// final ;))