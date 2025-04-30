import React, { useState } from "react";

export default function App() {
  const [laudo, setLaudo] = useState("");
  const [plano, setPlano] = useState("");
  const [loading, setLoading] = useState(false);

  const gerarPlanoSimulado = () => {
    setLoading(true);
    setTimeout(() => {
      setPlano(
        "Plano Individualizado Gerado:\n\nObjetivo Geral: Desenvolver habilidades de comunicação e interação social.\n\nAdaptações: Uso de recursos visuais (pictogramas), rotinas estruturadas e apoio individualizado.\n\nAvaliação: Observação direta de participação em atividades coletivas e registro de avanços semanais."
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Hackathon Edukanet IA</h1>
      <p className="mb-6">
        Participe do desenvolvimento da primeira IA inclusiva para educação especial.
      </p>

      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Teste uma Simulação</h2>
        <textarea
          className="w-full border rounded p-2 mb-4"
          rows={5}
          placeholder="Cole aqui um trecho de um laudo clínico ou pedagógico..."
          value={laudo}
          onChange={(e) => setLaudo(e.target.value)}
        />
        <button
          onClick={gerarPlanoSimulado}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!laudo || loading}
        >
          {loading ? "Gerando plano..." : "Gerar Plano Individualizado"}
        </button>
        {plano && (
          <pre className="mt-4 bg-gray-100 text-left p-3 rounded whitespace-pre-wrap">
            {plano}
          </pre>
        )}
      </div>

      <div className="mt-6 text-left">
        <h3 className="text-lg font-semibold mb-2">Links úteis</h3>
        <ul className="list-disc list-inside text-blue-600">
          <li><a href="#">Regulamento do Hackathon</a></li>
          <li><a href="#">Briefing para os Times</a></li>
          <li><a href="#">Formulário de Inscrição</a></li>
          <li><a href="#">Laudos Simulados</a></li>
        </ul>
      </div>
    </div>
  );
}
