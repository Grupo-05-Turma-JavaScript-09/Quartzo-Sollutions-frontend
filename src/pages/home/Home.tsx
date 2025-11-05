import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="relative w-full py-20 md:py-0 md:h-[550px] overflow-hidden">
        <img
          src="https://i.imgur.com/rd9J70I.jpeg"
          alt="Conectando talentos e soluções humanas"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70 z-10"></div>

        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-cyan-400 opacity-30 transform -rotate-3"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-cyan-400 opacity-30 transform rotate-2"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-cyan-400 opacity-30 transform -rotate-5"></div>
        </div>

        <div className="relative z-30 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center h-full text-white">
          {/* Coluna 1: Texto e Botão */}
          <div className="md:w-1/2 lg:w-3/5 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight max-w-2xl drop-shadow-lg text-center md:text-left">
              Insira uma frase bonitinha aqui
              <span className="text-cyan-400"> plissss</span>
            </h1>

            <Link
              to="/sobrenos"
              className="mt-6 bg-cyan-400 text-blue-950 font-bold px-6 py-2 rounded-lg text-lg transform hover:scale-105 transition-transform duration-300 drop-shadow-lg w-fit"
            >
              Saiba Mais
            </Link>
          </div>

          {/* Coluna 2: MUDEM ESSA IMAGEM AQUI*/}
          <div className="md:w-1/2 lg:w-2/7 mt-10 md:mt-0 md:ml-8">
            <img
              src="https://www.dbccompany.com.br/app/uploads/2025/09/Ativo-1-1.png"
              alt="Imagem da Página Home"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Curva branca entre o banner e o resto da página */}
        <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 z-30">
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-full fill-current text-gray-50"
          >
            <path d="M0,50 Q250,100 500,50 T1000,50 L1000,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Transformação em <span className="text-cyan-500">3 Passos</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Nosso processo é desenhado para ser{" "}
              <strong className="text-blue-900">rápido, intuitivo</strong> e{" "}
              <strong className="text-blue-900">gerar resultados</strong>. Veja
              como impulsionamos seu RH de forma simples e eficaz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Passo 1: Diagnóstico */}
            <div className="bg-white text-gray-700 p-8 rounded-2xl shadow-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl text-blue-900 mb-4">🔍</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                1. Diagnóstico e Setup
              </h3>
              <p className="text-gray-600">
                Primeiro, entendemos profundamente suas metas. Mapeamos seus
                desafios e configuramos a plataforma Quartzo para se adaptar
                perfeitamente ao seu fluxo de trabalho.
              </p>
            </div>

            {/* Passo 2: Implementação */}
            <div className="bg-white text-gray-700 p-8 rounded-2xl shadow-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl text-cyan-400 mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                2. Implementação e Treinamento
              </h3>
              <p className="opacity-90">
                Nossa equipe guia a implementação do início ao fim e treina seu
                time para extrair o máximo de nossas ferramentas. Adoção rápida
                e sem complicações.
              </p>
            </div>

            {/* Passo 3: Sucesso*/}
            <div className="bg-white text-gray-700 p-8 rounded-2xl shadow-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl text-green-500 mb-4">📈</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                3. Suporte e Evolução
              </h3>
              <p className="text-gray-600">
                Seu sucesso é contínuo. Oferecemos suporte proativo e
                acompanhamos seus KPIs para garantir que sua empresa continue
                evoluindo, sempre com a gente ao seu lado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
