import React, { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface Props {
  children: ReactNode;
}

export const LayoutNoAuth = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
