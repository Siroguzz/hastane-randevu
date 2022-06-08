import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";

const RandevuItem = (props) => {
  const { randevu, data, onCancelClick } = props;

  const gun = randevu?.randevu_saatleri.find((x) => x.id == data.gunID);
  const saat = gun.saatler.find((x) => x.id == data.saatID);
  return (
    <tr>
      <td>
        {randevu.doktor.ad} {randevu.doktor.soyad}
      </td>
      <td> {randevu.doktor.alani}</td>
      <td>{gun.tarih.toLocaleDateString()}</td>
      <td>{saat.saat}</td>
      <td>{randevu.il}</td>
      <td>
        <Button onClick={onCancelClick} variant="danger">
          İptal
        </Button>
      </td>
    </tr>
  );
};

export default RandevuItem;
