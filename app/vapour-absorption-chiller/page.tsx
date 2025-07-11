import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "Vapor Absorption Chillers - Non-Electric Cooling Solutions | BROAD India",
  description:
    "Explore BROAD India's range of vapor absorption chillers including direct-fired, waste heat, solar-driven, and multi-energy chillers. Energy-efficient, non-electric cooling solutions for industrial applications.",
  keywords: [
    "vapor absorption chiller",
    "non-electric chiller",
    "absorption chiller",
    "direct fired chiller",
    "waste heat chiller",
    "solar chiller",
    "multi-energy chiller",
    "BROAD chiller",
    "industrial cooling",
  ],
  openGraph: {
    title:
      "Vapor Absorption Chillers - Non-Electric Cooling Solutions | BROAD India",
    description:
      "Explore BROAD India's range of vapor absorption chillers including direct-fired, waste heat, solar-driven, and multi-energy chillers.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vapor Absorption Chillers - Non-Electric Cooling Solutions | BROAD India",
    description:
      "Explore BROAD India's range of vapor absorption chillers including direct-fired, waste heat, solar-driven, and multi-energy chillers.",
  },
};

const VapourAbsorptionChiller = () => {
  const subCategories = [
    {
      title: "Direct Fired Chiller",
      description:
        "High-efficiency, thermally-driven cooling system powered by natural gas or light fuel oil",
      href: "/vapour-absorption-chiller/direct-fired-chiller",
      image: "/images/nonElec.jpg",
    },
    {
      title: "Waste Heat Chiller",
      description:
        "Converts low-grade thermal energy into high-quality chilled water using industrial waste heat",
      href: "/vapour-absorption-chiller/waste-heat-chiller",
      image: "/images/wasteHeat.jpg",
    },
    {
      title: "Two-Stage Chiller",
      description:
        "Advanced two-stage absorption technology for enhanced efficiency",
      href: "/vapour-absorption-chiller/two-stage-chiller",
      image:
        "https://broadusa.com/broad/wp-content/uploads/2020/03/BH-Model.jpg",
    },
    {
      title: "Single-Stage Chiller",
      description:
        "Reliable single-stage absorption chiller for standard applications",
      href: "/vapour-absorption-chiller/single-stage-chiller",
      image:
        "https://broadusa.com/broad/wp-content/uploads/2020/03/BDS-model.jpg",
    },
    {
      title: "Multi-Energy Chiller",
      description: "Flexible multi-energy source absorption chiller systems",
      href: "/vapour-absorption-chiller/multi-energy-chiller",
      image:
        "https://broadusa.com/broad/wp-content/uploads/2020/03/bze-300x201-1-200x134.jpg",
    },
    {
      title: "Solar Driven",
      description:
        "Environmentally friendly solar-powered absorption cooling systems",
      href: "/vapour-absorption-chiller/solar-driven",
      image:
        "https://broadusa.com/broad/wp-content/uploads/2020/03/solar-driven-200x161.png",
    },
    {
      title: "Packaged Chiller",
      description: "Factory-assembled packaged absorption chiller solutions",
      href: "/vapour-absorption-chiller/packaged-chiller",
      image:
        "https://broadusa.com/broad/wp-content/uploads/2020/03/package_chiller-300x279-1-200x186.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://broadusa.com/broad/wp-content/uploads/2020/04/broadusa-products.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Vapour Absorption Chillers
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            BROAD Vapour Absorption Chiller Solutions
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>BROAD India</strong> delivers advanced{" "}
            <strong>Vapor Absorption Chillers (VAC)</strong> that provide
            powerful cooling without electricity. Designed to use waste heat,
            steam, hot water, natural gas, or diesel, our chillers are ideal for
            industries seeking energy efficiency, carbon reduction, and{" "}
            <strong>sustainable HVAC solutions.</strong>
            <br />
            Backed by BROAD Group&apos;s global engineering expertise, these
            systems support India&apos;s net-zero mission by{" "}
            <strong>reducing power consumption by up to 50%,</strong>{" "}
            eliminating harmful refrigerants, and integrating seamlessly with
            industrial operations,{" "}
            <strong>CCHP systems, and smart buildings.</strong>
            <br />
            Choose from a wide range of VAC types including steam-fired,
            direct-fired, hot water, exhaust gas, and solar-driven chillers,
            customized to your facility’s heat source, capacity, and
            sustainability goals.
          </p>
        </div>

        {/* Sub-categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {subCategories.map((category, index) => (
            <Link key={index} href={category.href}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="relative h-56 overflow-hidden rounded-t-lg bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300 p-4"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-sm line-clamp-3">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Key Features & Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">Non-Electric Operation</h4>
              <p className="text-gray-600 text-sm">
                Operates without electricity, ideal for regions with high power
                costs or limited grid access
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🌱</span>
              </div>
              <h4 className="font-semibold mb-2">Environmentally Friendly</h4>
              <p className="text-gray-600 text-sm">
                Uses water as refrigerant, no CFCs or HFCs, reduced carbon
                footprint
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold mb-2">Low Maintenance</h4>
              <p className="text-gray-600 text-sm">
                Minimal moving parts, robust construction, long service life
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VapourAbsorptionChiller;
