import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Randevularim from "./components/Randevularim/Randevularim";
import Doktorlar from "./components/Doktorlar/Doktorlar";
import { veri } from "./data";

function App() {
  const [randevularimiGoruntule, setRandevularimiGoruntule] = useState(false);
  const [doktorlar, setDoktorlar] = useState(veri);
  const [alinanRandevular, setAlinanRandevular] = useState([]);

  return (
    <div>
      {
        //randevularimi goruntule false ise doktorlari goster true ise aldigim randevulari goster
        randevularimiGoruntule == false ? (
          <Doktorlar
            setRandevularimiGoruntule={setRandevularimiGoruntule}
            doktorlar={doktorlar}
            setDoktorlar={setDoktorlar}
            setAlinanRandevular={setAlinanRandevular}
            alinanRandevular={alinanRandevular}
          />
        ) : (
          <Randevularim
            setRandevularimiGoruntule={setRandevularimiGoruntule}
            alinanRandevular={alinanRandevular}
            doktorlar={doktorlar}
            setDoktorlar={setDoktorlar}
            setAlinanRandevular={setAlinanRandevular}
          />
        )
      }
    </div>
  );
}

export default App;
