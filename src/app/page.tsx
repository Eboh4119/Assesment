"use client"

import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Generate from "./layout/generate";
import ImageSlide from "./layout/ImageSlide";

export default function() { 
    return(
      <div>
        <Header />
        <ImageSlide />
        <Generate />
        <Footer />
      </div>
    )
}