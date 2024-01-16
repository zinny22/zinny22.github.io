/** @format */

import Header from "@/Components/Header";
import { PortfolioProvider } from "@/context/context";
import { prefix } from "@/config/config";

export default function Home() {
  return (
    <PortfolioProvider value={{ prefix }}>
      <div>
        <Header />
      </div>
    </PortfolioProvider>
  );
}
