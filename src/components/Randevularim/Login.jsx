import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = (props) => {
  const [tcKimlik, setTcKimlik] = useState("");
  const [pass, setPass] = useState("");

  // eger tc no ve sifre dogruysa propsdan login success degerini true yapar
  const doLogin = () => {
    if (tcKimlik == "admin" && pass == "admin1234") {
      props.setLoginSuccess(true);
    } else if (tcKimlik == "" && pass == "") {
      alert("Bu alanlar boş bırakalamaz!");
    } else {
      alert("TC numaranız veya Şifreniz hatalı!");
    }
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <h2>Giriş</h2>
        <Form.Label>TC Numaranız</Form.Label>
        <Form.Control
          placeholder="TC Kimlik Numaranız"
          value={tcKimlik}
          onChange={(e) => setTcKimlik(e.target.value)}
        />
        <br />
        <Form.Label>Şifre</Form.Label>
        <Form.Control
          type="password"
          placeholder="Şifre"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </Form.Group>
      <Button onClick={doLogin} variant="success">
        Giriş Yap
      </Button>
    </div>
  );
};

export default Login;
