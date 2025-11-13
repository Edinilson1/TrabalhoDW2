import {
  Cell,
  Pie,
  PieChart,
  PieLabelRenderProps,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Usuários de Computador", value: 15624, color: "#ff0000" },
  { name: "Usuários de Celular", value: 5546, color: "#00ff00" },
  { name: "Usuários de Notebook", value: 2478, color: "#0000ff" }
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  value
}: PieLabelRenderProps) => {
  if (!cx || !cy || !innerRadius || !outerRadius) return null;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontSize: "14px", fontWeight: "bold" }}
    >
      {value}
    </text>
  );
};

const CustomLegend = ({ payload }: any) => {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        marginTop: 20,
        textAlign: "center"
      }}
    >
      {payload.map((entry: any, index: number) => (
        <li
          key={index}
          style={{
            color: "white",
            marginBottom: 6,
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: entry.color
            }}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

export default function PieChartWithLegend() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius="70%"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>

        <Legend
          content={<CustomLegend />}
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}