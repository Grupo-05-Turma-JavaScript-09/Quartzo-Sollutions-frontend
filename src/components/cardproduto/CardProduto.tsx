export default function CardProduto() {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Nossos Serviços
      </h2>

      {/* 5 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Recrutamento & Seleção */}
        <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-2xl font-bold">🎯</span>
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Recrutamento & Seleção</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Encontre o talento ideal com métodos ágeis e fit cultural.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-all duration-300">
            Saiba mais
          </button>
        </div>

        {/* Treinamento & Desenvolvimento */}
        <div className="group bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-blue-900 text-2xl font-bold">👁️</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Treinamento & Desenvolvimento</h3>
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Capacite sua equipe para atingir novos patamares.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300">
            Saiba mais
          </button>
        </div>

        {/* Gestão de Desempenho */}
        <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-2xl font-bold">💎</span>
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Gestão de Desempenho</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Avaliações justas e feedbacks construtivos que geram resultados.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-all duration-300">
            Saiba mais
          </button>
        </div>

        {/* Pesquisa de Clima */}
        <div className="group bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-blue-900 text-2xl font-bold">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Pesquisa de Clima</h3>
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Avalie o engajamento e a satisfação dos colaboradores.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300">
            Saiba mais
          </button>
        </div>

        {/* Cargos e Salários */}
        <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-2xl font-bold">🤝</span>
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Cargos e Salários</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Estruture planos de carreira com transparência e equilíbrio.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-all duration-300">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}
