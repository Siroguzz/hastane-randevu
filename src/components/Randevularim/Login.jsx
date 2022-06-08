import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = (props) => {
  const [tcKimlik, setTcKimlik] = useState("");
  const [pass, setPass] = useState("");

  // eger tc no ve sifre dogruysa propsdan login success degerini true yapar
  const doLogin = () => {
    if (tcKimlik == "12345678910" && pass == "1234") {
      props.setLoginSuccess(true);
    } else if (tcKimlik == "" && pass == "") {
      alert("Bos alan birakilamaz!");
    } else {
      alert("Tc no veya sifre hatali!");
    }
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <h2>Giris</h2>
        <Form.Label>TC Numarasi</Form.Label>
        <Form.Control
          placeholder="tc kimlik"
          value={tcKimlik}
          onChange={(e) => setTcKimlik(e.target.value)}
        />
        <br />
        <Form.Label>Sifre</Form.Label>
        <Form.Control
          type="password"
          placeholder="sifre"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </Form.Group>
      <Button onClick={doLogin} variant="success">
        Giris Yap
      </Button>
    </div>
  );
};

export default Login;
