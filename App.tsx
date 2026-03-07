import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Previdenciario from './pages/Previdenciario';
import Civel from './pages/Civel';
import Criminal from './pages/Criminal';
import Trabalhe from './pages/Trabalhe';
import BpcLoas from './pages/BpcLoas';
import Saude from './pages/Saude';
import SalarioMaternidade from './pages/SalarioMaternidade';
import AposentadoriaPcd from './pages/AposentadoriaPcd';
import QuemSomos from './pages/QuemSomos';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';
import CityPage from './pages/CityPage';
import CityTestPage from './pages/CityTestPage';
import AcopiaraCe from './pages/AcopiaraCe';
import AracatiCe from './pages/AracatiCe';
import BanabuiuCe from './pages/BanabuiuCe';
import FortalezaCe from './pages/FortalezaCe';
import IrapuanPinheiroCe from './pages/IrapuanPinheiroCe';
import IbaretamaCe from './pages/IbaretamaCe';
import JaguaretamaCe from './pages/JaguaretamaCe';
import JaguaribeCe from './pages/JaguaribeCe';
import MadalenaCe from './pages/MadalenaCe';
import MilhaCe from './pages/MilhaCe';
import OrosCe from './pages/OrosCe';
import PiquetCe from './pages/PiquetCe';
import QuiterianopolisCe from './pages/QuiterianopolisCe';
import QuixeloCe from './pages/QuixeloCe';
import QuixeramobimCe from './pages/QuixeramobimCe';
import SolonopoleCe from './pages/SolonopoleCe';
import VarzeaCe from './pages/VarzeaCe';
import CajazeirasPb from './pages/CajazeirasPb';
import CampinaPb from './pages/CampinaPb';
import JoaoPb from './pages/JoaoPb';
import MonteiroPb from './pages/MonteiroPb';
import SumePb from './pages/SumePb';
import AfogadosPe from './pages/AfogadosPe';
import ArcoverdePe from './pages/ArcoverdePe';
import CustodiaPe from './pages/CustodiaPe';
import PetrolinaPe from './pages/PetrolinaPe';
import SerritaPe from './pages/SerritaPe';
import AssuRn from './pages/AssuRn';
import CaicoRn from './pages/CaicoRn';
import CurraisRn from './pages/CurraisRn';
import MossoroRn from './pages/MossoroRn';
import NatalRn from './pages/NatalRn';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/previdenciario" element={<Previdenciario />} />
            <Route path="/civel" element={<Civel />} />
            <Route path="/criminal" element={<Criminal />} />
            <Route path="/saude" element={<Saude />} />
            <Route path="/bpc-loas" element={<BpcLoas />} />
            <Route path="/salario-maternidade" element={<SalarioMaternidade />} />
            <Route path="/aposentadoria-pcd" element={<AposentadoriaPcd />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/trabalhe" element={<Trabalhe />} />
            <Route path="/advogado-acopiara-ce" element={<AcopiaraCe />} />
            <Route path="/advogado-aracati-ce" element={<AracatiCe />} />
            <Route path="/advogado-arcoverde-pe" element={<ArcoverdePe />} />
            <Route path="/advogado-assu-rn" element={<AssuRn />} />
            <Route path="/advogado-caico-rn" element={<CaicoRn />} />
            <Route path="/advogado-currais-novos-rn" element={<CurraisRn />} />
            <Route path="/advogado-mossoro-rn" element={<MossoroRn />} />
            <Route path="/advogado-natal-rn" element={<NatalRn />} />
            <Route path="/advogado-custodia-pe" element={<CustodiaPe />} />
            <Route path="/advogado-petrolina-pe" element={<PetrolinaPe />} />
            <Route path="/advogado-serrita-pe" element={<SerritaPe />} />
            <Route path="/advogado-afogados-da-ingazeira-pe" element={<AfogadosPe />} />
            <Route path="/advogado-banabuiu-ce" element={<BanabuiuCe />} />
            <Route path="/advogado-fortaleza-ce" element={<FortalezaCe />} />
            <Route path="/advogado-deputado-irapuan-pinheiro-ce" element={<IrapuanPinheiroCe />} />
            <Route path="/advogado-ibaretama-ce" element={<IbaretamaCe />} />
            <Route path="/advogado-jaguaretama-ce" element={<JaguaretamaCe />} />
            <Route path="/advogado-jaguaribe-ce" element={<JaguaribeCe />} />
            <Route path="/advogado-madalena-ce" element={<MadalenaCe />} />
            <Route path="/advogado-milha-ce" element={<MilhaCe />} />
            <Route path="/advogado-oros-ce" element={<OrosCe />} />
            <Route path="/advogado-piquet-carneiro-ce" element={<PiquetCe />} />
            <Route path="/advogado-quiterianopolis-ce" element={<QuiterianopolisCe />} />
            <Route path="/advogado-quixelo-ce" element={<QuixeloCe />} />
            <Route path="/advogado-quixeramobim-ce" element={<QuixeramobimCe />} />
            <Route path="/advogado-solonopole-ce" element={<SolonopoleCe />} />
            <Route path="/advogado-varzea-alegre-ce" element={<VarzeaCe />} />
            <Route path="/advogado-cajazeiras-pb" element={<CajazeirasPb />} />
            <Route path="/advogado-campina-grande-pb" element={<CampinaPb />} />
            <Route path="/advogado-joao-pessoa-pb" element={<JoaoPb />} />
            <Route path="/advogado-monteiro-pb" element={<MonteiroPb />} />
            <Route path="/advogado-sume-pb" element={<SumePb />} />
            <Route path="/advogado-:citySlug" element={<CityPage />} />
            <Route path="/teste-cidades" element={<CityTestPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
};

export default App;