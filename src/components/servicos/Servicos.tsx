import { useParams, useNavigate } from "react-router-dom";
import servicosData from "../../data/servicos.json";
import type Servico from "../../models/Servico";


export default function Servicos() {
  const { nomeServico } = useParams<{ nomeServico: string }>();
  const navigate = useNavigate();

  const servicoSelecionado: Servico | undefined = servicosData.servicos.find(
    (s) =>
      s.nome.toLowerCase() ===
      decodeURIComponent(nomeServico ?? "").toLowerCase()
  );

  if (!servicoSelecionado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Serviço não encontrado
        </h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Voltar à página inicial
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        {servicoSelecionado.nome}
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {servicoSelecionado.pacotes.map((pacote) => (
          <div
            key={pacote.nome}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {pacote.nome}
            </h3>
            <p className="text-blue-600 font-medium mb-4">{pacote.preco}</p>
            <ul className="space-y-2 text-gray-600">
              {pacote.descricao.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-8 text-blue-600 hover:underline"
      >
        ← Voltar aos serviços
      </button>
    </div>
  );
}
