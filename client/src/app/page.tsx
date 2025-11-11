"use client"

import { useState } from "react";
import Extensivel from "../components/extensivel";

export default function Home() {
  const [mainContent, setMainContent] = useState<React.ReactNode>(
  );

  return (
    <>
      <div className="sidebar">
        <Extensivel
          title="Dashboard"
          icon="bxs-home"
          defaultOpen={true}
          selectedIndex={1}
          items={[
            { label: "Todas as Páginas", content: <p></p> },
            {
              label: "Relatório",
              content: (
                <div className="container">
                  <div className="title"><p>Bem-vindo, Vitor dos Santos</p></div>
                  <div className="pageviews"></div>
                  <div className="monthlyusers"></div>
                  <div className="newsignups"></div>
                  <div className="subscriptions"></div>
                  <div className="revenue"></div>
                  <div className="overview"></div>
                  <div className="ubd"></div>
                  <div className="recentorders"></div>
                  <div className="ubc"></div>
                </div>
              )
            },
            { label: "Produtos", content: <p></p> },
            { label: "Tarefas", content: <p></p> },
          ]}
          onSelectItem={setMainContent}
        />

        <Extensivel
          title="Funcionalidades"
          icon="bxs-star"
          items={[
            { label: "Visão Geral", content: <p></p> },
            { label: "Relatórios", content: <p></p> },
            { label: "Logs", content: <p></p> },
          ]}
          onSelectItem={setMainContent}
        />

        <Extensivel
          title="Usuários"
          icon="bxs-user"
          items={[
            { label: "Lista de Usuários", content: <p></p> },
            { label: "Adicionar Novo", content: <p></p> },
          ]}
          onSelectItem={setMainContent}
        />

        <Extensivel
          title="Preço"
          icon="bxs-dollar"
          items={[
            { label: "Planos", content: <p></p> },
            { label: "Pagamentos", content: <p></p> },
          ]}
          onSelectItem={setMainContent}
        />

        <Extensivel
          title="Integrações"
          icon="bxs-pie-chart-alt"
          items={[
            { label: "API", content: <p></p> },
            { label: "Webhooks", content: <p></p> },
          ]}
          onSelectItem={setMainContent}
        />

        <div className="linha"></div>

        <Extensivel
          title="Configurações"
          icon="bxs-cog"
          items={[
            { label: "Conta", content: <p></p> },
            { label: "Privacidade", content: <p></p> },
          ]}
          onSelectItem={setMainContent}
        />

        <div className="conta">
          <div className="imagem"></div>
          <div className="letra">
            <div className="nome">Vitor dos Santos</div>
            <p>Configurações da Conta</p>
          </div>
        </div>
      </div>
      <div id="main-content">
        {mainContent}
      </div>
    </>
  );
}