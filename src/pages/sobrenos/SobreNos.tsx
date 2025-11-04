// src/pages/SobreNos/index.tsx
import React from 'react';

const SobreNos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <section className="text-center mb-12 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sobre Nós
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça a Quartzo Solutions e nossa missão
          </p>
        </section>

        {/* Conteúdo Principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Nossa História
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A <strong>Quartzo Solutions</strong> nasceu da paixão por tecnologia 
              e da vontade de transformar ideias em soluções reais que fazem a 
              diferença no mercado de Recursos Humanos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Combinamos expertise técnica com visão estratégica para entregar 
              sistemas que realmente atendem às necessidades dos nossos clientes, 
              sempre com foco em inovação e qualidade.
            </p>
          </div>
          
          {/* Imagem Institucional */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            <img 
              src="https://i.imgur.com/3hIqIbw.jpeg" 
              alt="Equipe Quartzo Solutions" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Missão</h3>
            <p className="text-gray-600">
              Desenvolver soluções tecnológicas inovadoras para o RH que 
              impulsionem a transformação digital com qualidade e eficiência.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold">👁️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Visão</h3>
            <p className="text-gray-600">
              Ser referência nacional em desenvolvimento de sistemas de RH 
              personalizados e de alta performance.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 font-bold">💎</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Valores</h3>
            <p className="text-gray-600">
              Qualidade, Transparência, Inovação e Comprometimento com o 
              sucesso do cliente.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SobreNos;