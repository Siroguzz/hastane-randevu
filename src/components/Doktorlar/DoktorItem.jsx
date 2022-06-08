import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { randevuGuncelle } from "../../randevuGuncelle";
import RandevuSecim from "../RandevuSecim/RandevuSecim";

const DoktorItem = (props) => {
  const {
    data,
    alinanRandevular,
    setRandevularimiGoruntule,
    setDoktorlar,
    doktorlar,
    setAlinanRandevular,
  } = props;

  const [showRandevular, setShowRandevular] = useState(false);
  const [selectedRandevu, setSelectedRandevu] = useState();

  //randevuyu onayla
  const onayla = () => {
    let tmp = [...alinanRandevular];
    //secilen randevuyu alinan randevular listesinin en pasina unshift ile ekle, en ustte gozuksun diye
    tmp.unshift(selectedRandevu);
    setAlinanRandevular(tmp);
    setSelectedRandevu();
    setRandevularimiGoruntule(true);

    //doktorlarin listesini guncelle, 0 randevu iptal demek 1 ise randevu al demek
    setDoktorlar(randevuGuncelle([...doktorlar], selectedRandevu, 1));

    mesajGoster();
  };

  const mesajGoster = () => {
    console.log(selectedRandevu);
    console.log(doktorlar);
    let selectedDoktor = doktorlar.find((x) => {
      return x.id === selectedRandevu.doktorID;
    });

    let selectedGun = selectedDoktor.randevu_saatleri.find(
      (x) => x.id == selectedRandevu.gunID
    );

    let saat = selectedGun.saatler.find((x) => x.id == selectedRandevu.saatID);

    console.log(selectedDoktor);

    alert(
      "Randevunuz onaylanmistir.\n" +
        selectedDoktor.doktor.ad +
        " " +
        selectedDoktor.doktor.soyad +
        "  -  " +
        selectedDoktor.doktor.alani +
        "\n" +
        selectedDoktor.il +
        "\n" +
        selectedGun.tarih.toISOString().split("T")[0] +
        " - " +
        saat.saat
    );
  };

  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title>{data.doktor.alani}</Card.Title>
        <Card.Text>
          <strong>
            {data.doktor.ad} {data.doktor.soyad}
          </strong>
          <br />
          {data.il}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => setShowRandevular(!showRandevular)}
        >
          {showRandevular == false ? "Randevulara bak" : "Kapat"}
        </Button>
        <hr />
        <RandevuSecim
          setAlinanRandevular={setAlinanRandevular}
          alinanRandevular={alinanRandevular}
          selectedRandevu={selectedRandevu}
          setSelectedRandevu={setSelectedRandevu}
          id={data.id}
          onayla={onayla}
          randevu_saatleri={data.randevu_saatleri}
          showRandevular={showRandevular}
          setShowRandevular={setShowRandevular}
        />
      </Card.Body>
    </Card>
  );
};

export default DoktorItem;
