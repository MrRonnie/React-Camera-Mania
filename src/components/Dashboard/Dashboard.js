import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 24100,
      revenue: 104010,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 42300,
      revenue: 245000,
    },
    {
      month: "May",
      investment: 500000,
      sell: 72600,
      revenue: 470100,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 52900,
      revenue: 404050,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 60100,
      revenue: 509000,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 67000,
      revenue: 610000,
    },
  ];

  return (
    <>
      <div className="flex w-full m-5 mt-10 justify-around">
        <div className="">
          <h1 className="text-blue-700 font-semibold text-xl mb-3">
            Month Wise Sell
          </h1>
          <LineChart
            width={530}
            height={350}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          </LineChart>
        </div>

        <div className="">
          <h1 className="text-blue-700 font-semibold text-xl mb-3">
            Investment vs Revenue
          </h1>
          <AreaChart
            width={530}
            height={350}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>

      <div className="flex w-full m-5 mt-20 justify-around">
        <div className="">
          <h1 className="text-blue-700 font-semibold text-xl mb-3">
            Investment vs Revenue
          </h1>
          <BarChart width={530} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </div>

        <div className="">
          <h1 className="text-blue-700 font-semibold text-xl mb-3">
            Investment vs Revenue vs Sell
          </h1>
          <ComposedChart width={530} height={350} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="investment"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="sell" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
