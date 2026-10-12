import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EducaHost from "./pages/EducaHost";
import SagradoSistema from "./pages/SagradoSistema";
import EcoBalance from "./pages/EcoBalance";
import QeM from "./pages/QeM";
import EcoBalanceMobile from "./pages/EcoBalanceMobile";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/projetos/educahost" element={<EducaHost />} />
        {<Route
          path="/projetos/educahost"
          element={<EducaHost />} />
        }
        <Route path="/projetos/sagradosistema" element={<SagradoSistema />} />
        {<Route
          path="/projetos/sagrado-sistema"
          element={<SagradoSistema />} />
        }
        <Route path="/projetos/EcoBalance" element={<EcoBalance />} />
        {<Route
          path="/projetos/eco-balance"
          element={<EcoBalance />} />
        }
        <Route path="/projetos/qem" element={<QeM />} />
        {<Route
          path="/projetos/qem"
          element={<QeM />} />
        }
        <Route path="/projetos/EcoBalanceMobile" element={<EcoBalanceMobile />} />
        {<Route
          path="/projetos/eco-balance-mobile"
          element={<EcoBalanceMobile />} />
        }
      </Routes>
    </HashRouter>
  );
}