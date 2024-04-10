import React from "react";
import Footer from "./footer";
import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Theme_Toggler from "./ThemeButton";

export default function Home() {
  return (
    <main>
      <Nav toggleComponent={<Theme_Toggler />} />
      <Hero />
      <Project />
      <Footer />
    </main>
  );
}
