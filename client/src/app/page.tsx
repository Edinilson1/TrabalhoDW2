"use client"

import { useState } from "react";
import Extensivel from "../components/extensivel";
import Grafico1 from "../components/revenuechart";
import Grafico2 from "../components/ubdchart";

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
                  <div className="title"><p className="nome1">Bem-vindo, Vitor dos Santos</p><p className="subtitulo">Meça o ROI da sua publicidade e gere relatórios sobre o tráfego do seu site</p></div>
                  <div className="pageviews"><p className="titulo1"><i className='bxr  bx-eye'></i> Visualizações do Site</p><p className="destaque">50.8K</p></div>
                  <div className="monthlyusers"><p className="titulo1"><i className='bxr  bxs-user'></i> Usuários Mensais</p><p className="destaque">23.6K</p></div>
                  <div className="newsignups"><p className="titulo1"><i className='bxr  bxs-plus-circle'></i> Novas Entradas</p><p className="destaque">756</p></div>
                  <div className="subscriptions"><p className="titulo1"><i className='bxr  bxs-star'></i> Incrições</p><p className="destaque">2.3K</p></div>
                  <div className="revenue"><p className="titulo1">Receita Total</p><p className="destaque">R$355K</p><Grafico1 /></div>
                  <div className="overview"><p className="nome1">Visão Geral do Relatório</p></div>
                  <div className="ubd"><p className="titulo1">Usuários por Aparelho</p><Grafico2 /></div>
                  <div className="ubc">
                    <p className="titulo1">Usuários por País</p>
                    <div className="paises">
                      <div className="pais"><p>Brasil</p><p>30%</p></div>
                      <div className="pais1"><p>Estados Unidos</p><p>20%</p></div>
                      <div className="pais2"><p>Reino Unido</p><p>20%</p></div>
                      <div className="pais3"><p>Canada</p><p>15%</p></div>
                      <div className="pais4"><p>Australia</p><p>15%</p></div>
                    </div>
                  </div>
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