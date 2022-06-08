import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { alanlar, iller } from "../../data";
import DoktorItem from "./DoktorItem";
import "./Doktorlar.css";
const Doktorlar = (props) => {
  const [alan, setAlan] = useState("");
  const [il, setIl] = useState("");

  const {
    doktorlar,
    setDoktorlar,
    alinanRandevular,
    setAlinanRandevular,
    setRandevularimiGoruntule,
  } = props;

  return (
    <Container>
      <Button
        className="m-5"
        onClick={() => {
          setRandevularimiGoruntule(true);
        }}
      >
        Randevularimi Goruntule
      </Button>

      <Form.Group className="mb-3">
        <Form.Label>Şehir</Form.Label>
        <Form.Select value={il} onChange={(e) => setIl(e.target.value)}>
          {iller.map((x, index) => (
            <option value={x} key={index}>
              {x}
            </option>
          ))}
        </Form.Select>
        <br />
        <Form.Label>Alan</Form.Label>
        <Form.Select value={alan} onChange={(e) => setAlan(e.target.value)}>
          {alanlar.map((x, index) => (
            <option value={x} key={index}>
              {x}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <div className="doktorlar-item-list">
        {doktorlar
          .filter((y) => il == y.il && alan == y.doktor.alani)
          .map((x) => (
            <DoktorItem
              doktorlar={doktorlar}
              setDoktorlar={setDoktorlar}
              setRandevularimiGoruntule={setRandevularimiGoruntule}
              setAlinanRandevular={setAlinanRandevular}
              alinanRandevular={alinanRandevular}
              data={x}
              key={x.id}
            />
          ))}
      </div>
    </Container>
  );
};

export default Doktorlar;
