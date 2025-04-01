import React, { useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBackground, { defaultParticlesOptions } from "../components/Particles";
import { Form, Button, Card, Col, Container, Row } from "react-bootstrap";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password, rememberMe });
  };

  return (
    <Container fluid className="login-container">
      <ParticlesBackground options={defaultParticlesOptions} />
      <Row className="h-100">
        <Col lg={6} className="login-right d-flex flex-column align-items-center justify-content-center">
          <div className="text-center">
            <img src="/images/omni_logo_white.png" alt="Logo" className="logo" />
          </div>
          <Card className="login-card" >
            <Card.Body className="card-body">
              <Card.Title id="card-title">Login</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" id="p-title">
                Enter your credentials to access your account
              </Card.Subtitle>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 form-input">
                  <Form.Control
                    id="email"
                    style={{ backgroundColor: "transparent", borderColor: "#ABE2F4" }}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-input">
                  <Form.Control
                    id="password"
                    style={{ backgroundColor: "transparent", borderColor: "#ABE2F4" }}
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    id="remember-me"
                    type="checkbox"
                    label="Remember me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">
                  Sign in
                </Button>
              </Form>
              <Card.Text className="text-center mt-2">
                <Link to="/forgot-password">Forgot Password?</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="login-left  d-lg-block ">
          <div
            style={{
              backgroundImage: "url(/images/170A1053.JPG)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
            }}
            className="login-overlay"
          >
            <div className="login-overlay-text">{/* Add any text or branding you want on the left side */}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;