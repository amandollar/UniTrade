import { TrendingUp, Users, Shield, Award } from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "5M+",
      description: "Daily Trades"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "2M+",
      description: "Active Users"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "99.9%",
      description: "Uptime"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "#1",
      description: "Trading App"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-100 transition-colors duration-200 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;