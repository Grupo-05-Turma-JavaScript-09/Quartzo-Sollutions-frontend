const clientLogos = [
  "https://solides.com.br/wp-content/uploads/2024/11/premio-RH-logo.webp",
  "https://solides.com.br/wp-content/uploads/2025/01/SeloVencedores-RGB_Cor-solides.png",
  "https://solides.com.br/wp-content/uploads/2025/01/empresa-indicada-RA-2024-1.png",
  "https://solides.com.br/wp-content/uploads/2024/11/selos_fornecedores_logo.webp",
  "https://solides.com.br/wp-content/uploads/2024/11/reclame_aqui_logo.webp",
  "https://solides.com.br/wp-content/uploads/2024/11/ciclo_selo_verde_logo.webp",
  "https://solides.com.br/wp-content/uploads/2024/11/selogptw_logo.webp",
  "https://solides.com.br/wp-content/uploads/2025/01/selo-melhor-rh-solides-1536x530.png",
];

export default function Selos() {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Garantia de qualidade
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Confira alguns dos nossos selos e premiações. 
            Somos a HR Tech com a melhor avaliação no Reclame Aqui do mercado.
          </p>
        </div>

        {/* 3. Card de Conteúdo */}

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-12">
            {clientLogos.map((logoSrc, index) => (
              <img
                key={index}
                src={logoSrc}
                alt={`Selo/Premiação ${index + 1} da Quartzo Solutions`}
                className="max-h-20 w-auto object-contain transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}