import { useState } from "react"; 

interface Pacote {
  nome: string;
  preco: string;
  beneficios: string[];
}

interface Servico {
  emoji: string;
  titulo: string;
  cor: string;
  pacotes: Pacote[];
}

const servicos: Servico[] = [
  {
    emoji: "💼",
    titulo: "Recrutamento & Seleção",
    cor: "bg-blue-900 text-white",
    pacotes: [
      {
        nome: "Pacote Lazuli",
        preco: "R$ 499/mês",
        beneficios: [
          "3 anúncios mensais em portais parceiros",
          "Triagem e filtro de currículos automatizado",
          "Entrevistas online com agendamento automático",
          "Suporte por chat comercial",
        ],
      },
      {
        nome: "Pacote Diamante",
        preco: "R$ 899/mês",
        beneficios: [
          "10 anúncios mensais + divulgação no LinkedIn",
          "Análise de perfil comportamental (fit cultural)",
          "Relatório de desempenho dos candidatos",
          "Assistência 24h para urgências de contratação",
        ],
      },
    ],
  },
  {
    emoji: "🚀",
    titulo: "Treinamento & Desenvolvimento",
    cor: "bg-indigo-800 text-white",
    pacotes: [
      {
        nome: "Pacote Lazuli",
        preco: "R$ 399/mês",
        beneficios: [
          "Acesso a 3 trilhas de capacitação online",
          "Certificados de conclusão",
          "Relatórios mensais de progresso",
        ],
      },
      {
        nome: "Pacote Diamante",
        preco: "R$ 699/mês",
        beneficios: [
          "Treinamentos personalizados para a equipe",
          "Workshops ao vivo mensais",
          "Avaliação de desempenho antes e depois do curso",
          "Consultoria de plano de desenvolvimento individual (PDI)",
        ],
      },
    ],
  },
  {
    emoji: "💎",
    titulo: "Gestão de Desempenho",
    cor: "bg-sky-900 text-white",
    pacotes: [
      {
        nome: "Pacote Aquamar",
        preco: "R$ 450/mês",
        beneficios: [
          "Avaliação 180º (colaborador + gestor)",
          "Relatório com indicadores de performance",
          "Feedback estruturado",
        ],
      },
      {
        nome: "Pacote Diamante",
        preco: "R$ 850/mês",
        beneficios: [
          "Avaliação 360º",
          "Painel de resultados em tempo real",
          "Reuniões de alinhamento trimestral",
          "Consultoria personalizada de engajamento",
        ],
      },
    ],
  },
  {
    emoji: "🌤",
    titulo: "Pesquisa de Clima",
    cor: "bg-blue-800 text-white",
    pacotes: [
      {
        nome: "Pacote Aquamar",
        preco: "R$ 350/mês",
        beneficios: [
          "Questionário digital pronto para aplicação",
          "Relatório com índices de satisfação",
        ],
      },
      {
        nome: "Pacote Diamante",
        preco: "R$ 750/mês",
        beneficios: [
          "Questionário personalizado à cultura da empresa",
          "Entrevistas qualitativas",
          "Relatório detalhado + plano de ação sugerido",
          "Reaplicação semestral para acompanhamento",
        ],
      },
    ],
  },
  {
    emoji: "🤝",
    titulo: "Cargos e Salários",
    cor: "bg-blue-950 text-white",
    pacotes: [
      {
        nome: "Pacote Lazuli",
        preco: "R$ 599/mês",
        beneficios: [
          "Estruturação de até 10 cargos",
          "Análise de mercado e faixas salariais",
        ],
      },
      {
        nome: "Pacote Diamante",
        preco: "R$ 999/mês",
        beneficios: [
          "Estrutura completa de cargos + trilha de carreira",
          "Plano de reconhecimento e crescimento interno",
          "Simulação de reajuste e impacto orçamentário",
          "Consultoria mensal para ajustes",
        ],
      },
    ],
  },
  // 👇 Novo serviço adicionado
  {
    emoji: "🎁",
    titulo: "Benefícios Corporativos",
    cor: "bg-cyan-500 text-white",
    pacotes: [
      {
        nome: "Pacote Lazuli",
        preco: "R$ 499/mês",
        beneficios: [
          "Consultoria básica sobre benefícios internos",
          "Análise de planos atuais e sugestões de melhoria",
          "Suporte mensal via chat",
        ],
      },
      {
        nome: "Pacote Diamante",
        preco: "R$ 899/mês",
        beneficios: [
          "Plano completo de benefícios e incentivos personalizados",
          "Acompanhamento trimestral de engajamento",
          "Relatório de impacto e satisfação dos colaboradores",
          "Consultoria estratégica para retenção de talentos",
        ],
      },
    ],
  },
];

export default function DoubleCard() {
  const [ativo, setAtivo] = useState<number | null>(null);

  const virar = (index: number) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {servicos.map((servico, index) => (
        <div
          key={index}
          className="perspective cursor-pointer"
          onClick={() => virar(index)}
        >
          <div
            className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
              ativo === index ? "rotate-y-180" : ""
            }`}
          >
            {/* Frente */}
            <div
              className={`absolute w-full h-full rounded-2xl shadow-lg flex flex-col justify-center items-center gap-3 p-6 ${servico.cor} backface-hidden`}
            >
              <span className="text-4xl">{servico.emoji}</span>
              <h2 className="text-xl font-bold text-center">
                {servico.titulo}
              </h2>
              <p className="text-sm text-center opacity-90">
                Clique para ver os pacotes
              </p>
            </div>

            {/* Verso */}
            <div className="absolute w-full h-full rounded-2xl shadow-lg bg-white text-gray-800 p-5 rotate-y-180 backface-hidden overflow-y-auto">
              <h2 className="text-lg font-bold text-center mb-3">
                {servico.emoji} {servico.titulo}
              </h2>
              {servico.pacotes.map((pacote, i) => (
                <div key={i} className="mb-4 border-t pt-2">
                  <h3 className="font-semibold text-indigo-700">
                    {pacote.nome} – {pacote.preco}
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    {pacote.beneficios.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
