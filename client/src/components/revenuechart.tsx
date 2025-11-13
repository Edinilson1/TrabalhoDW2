"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const dados = [
  { mes: "Janeiro", valor: 25000 },
  { mes: "Fevereiro", valor: 18000 },
  { mes: "Março", valor: 12000 },
  { mes: "Abril", valor: 22000 },
  { mes: "Maio", valor: 32000 },
  { mes: "Junho", valor: 29000 },
  { mes: "Julho", valor: 31000 },
  { mes: "Agosto", valor: 39000 },
  { mes: "Setembro", valor: 46000 },
  { mes: "Outubro", valor: 38000 },
  { mes: "Novembro", valor: 30000 },
  { mes: "Dezembro", valor: 33000 }
];

export default function RevenueChart() {
  return (
    <div style={{ width: "100%", height: "90%" }}>
      <ResponsiveContainer>
        <AreaChart data={dados}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="mes" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="valor"
            stroke="#4F46E5"
            strokeWidth={3}
            fill="url(#revenueGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}