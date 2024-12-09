"use client"
import React from "react";
import Hero from "@/components/hero";
import CompanyLogos from "@/components/companyLogos";
import FeaturedProducts from "@/components/feturedProduct";
import TopCategories from "@/components/topCategories";
import PopularStyle from "@/components/popularStyle";
import OurProducts from "@/components/ourProducts";





export default function Home() {
  return (
    <div>

        <Hero />
        <CompanyLogos />
        <FeaturedProducts />
        <TopCategories />
        <PopularStyle />
        <OurProducts />

      

    </div>
  );
}
