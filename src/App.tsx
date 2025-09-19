import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AccessLedger from "./pages/AccessLedger";
import IGO from "./pages/IGO";
import Launchpad from "./pages/Launchpad";
import Staking from "./pages/Staking";
import Farming from "./pages/Farming";
import Crypto from "./pages/Crypto";
import DeFi from "./pages/DeFi";
import Web3 from "./pages/Web3";
import NFT from "./pages/NFT";
import AIChatBot from "@/components/ui/ai-chat-bot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/access-ledger" element={<AccessLedger />} />
          <Route path="/igo" element={<IGO />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/farming" element={<Farming />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/defi" element={<DeFi />} />
          <Route path="/web3" element={<Web3 />} />
          <Route path="/nft" element={<NFT />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
