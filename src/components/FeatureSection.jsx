import React from "react";
import {
  Shield,
  CheckCircle,
  Headphones,
  BookOpen,
  Truck,
  BrainCircuit,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="text-green-500" />,
      title: "Layered security",
      description:
        "With layered security, we ensure the safety of every unit we provide.",
    },
    {
      icon: <CheckCircle className="text-green-500" />,
      title: "Quality control of each part",
      description: "Every unit you send is checked carefully for every detail.",
    },
    {
      icon: <Headphones className="text-green-500" />,
      title: "Reliable customer service",
      description:
        "Our customer service is available 24 hours a week, with qualified people.",
    },
    {
      icon: <BookOpen className="text-green-500" />,
      title: "Maintenance manual book",
      description:
        "We provide a guidebook that can be used to ensure maximum care.",
    },
    {
      icon: <Truck className="text-green-500" />,
      title: "Delivered safely",
      description:
        "Every unit we send arrives safely and quickly, without any obstacles or drama.",
    },
    {
      icon: <BrainCircuit className="text-green-500" />,
      title: "Based on artificial intelligence",
      description:
        "You can control and view each unit from your phone. It’s very easy to use.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          We offer <span className="text-green-500">quality</span>, with the{" "}
          <br className="hidden md:block" /> best materials and service
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center"
          >
            <div className="mb-4 text-3xl">{feature.icon}</div>
            <h3 className="font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
