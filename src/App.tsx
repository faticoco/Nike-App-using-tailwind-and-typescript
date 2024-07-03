import React from "react";
import {  Footer,
  Hero,
  PopularProdcucts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality} from "./Sections";
  import Nav from "./Components/Nav";

const App = () => (
  <main className="relative">
   <Nav/>
    <section className="xl:paddinf-l wide:padding-r padding-b">
      Hero section
    </section>
    <section className="padding">Popular products</section>
    <section className="padding">Super Quality</section>
    <section className="padding-x py-10">services</section>
    <section className="padding">Special offers</section>
    <section className="padding bg-pale-blue">Customer Reviews</section>
    <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
    <section className="bg-black padding-x padding-t pb-8">Footer</section>
  </main>
);

export default App;