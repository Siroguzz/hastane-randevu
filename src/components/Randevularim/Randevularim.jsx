import React, { useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { randevuGuncelle } from "../../randevuGuncelle";
import Login from "./Login";
import RandevuItem from "./RandevuItem";

const Randevularim = (props) => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const {
    setRandevularimiGoruntule,
    alinanRandevular,
    doktorlar,
    setAlinanRandevular,
    setDoktorlar,
  } = props;

  const onCancelClick = (randevu) => {
    let randevular = [...alinanRandevular];
    // tiklanan randevunun indexini bul
    let index = randevular.findIndex((x) => {
      return (
        x.doktorID === randevu.doktorID &&
        x.gunID === randevu.gunID &&
        x.saatID === randevu.saatID
      );
    });
    //ordan splice ile indexini kullanarak kaldir
    randevular.splice(index, 1);

    //yeni randevulari guncelle yani state e koy
    setAlinanRandevular(randevular);

    //doktorlarin listesini guncelle, 0 randevu iptal demek 1 ise randevu al demek
    setDoktorlar(randevuGuncelle([...doktorlar], randevu, 0));
  };

  return (
    <Container className="mt-5 ">
      <Button
        className="m-5"
        onClick={() => {
          setRandevularimiGoruntule(false);
        }}
      >
        Randevu Al
      </Button>

      {
        //eger login success ise randevularimi goruntule, degilse login ekranini goruntule
        loginSuccess ? (
          <Table className="text-center" striped bordered hover>
            <thead>
              <tr>
                <th>Doktor</th>
                <th>Bölüm</th>
                <th>Tarih</th>
                <th>Saat</th>
                <th>Şehir</th>
                <th>Seçenek</th>
              </tr>
            </thead>
            <tbody>
              {alinanRandevular.map((x, index) => (
                <RandevuItem
                  onCancelClick={() => onCancelClick(x)}
                  data={x}
                  randevu={doktorlar.find((doktor) => doktor.id === x.doktorID)}
                  key={x.doktorID + "" + x.gunID + "" + x.saatID}
                />
              ))}
            </tbody>
          </Table>
        ) : (
          <Login setLoginSuccess={setLoginSuccess} />
        )
      }
    </Container>
  );
};

export default Randevularim;
