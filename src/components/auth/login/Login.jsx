import { useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useRef } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        setErrors({...errors, email: false})
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        setErrors({...errors, password: false})
    }

    const [errors, setErrors] = useState({
        email: false,
        password: false,
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!emailRef.current.value.length){
            setErrors({ ...errors, email: true });
            alert('Email vacío');
            return;
        } else if(!password.length || password.length < 7){
            setErrors({ ...errors, password: true });
            alert('Password vacío');
            passwordRef.current.focus();
            return;
        }

        setErrors({email: false, password: false})
        alert(`El email ingresado es: ${email} y el password es ${password}`)
    }

    return (
        <>
            <Card className="mt-5 mx-3 p-3 px-5 shadow">
                <Card.Body>
                    <Row className="mb-2">
                        <h5>¡Bienvenidos a Books Champion!</h5>
                    </Row>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className="mb-4">
                            <Form.Control
                                type="email"
                                placeholder="Ingresar email"
                                onChange={handleEmailChange}
                                value={email} 
                                ref={emailRef}
                                className={errors.email && 'border border-danger'}
                            />
                        </FormGroup>
                        <FormGroup className="mb-4">
                            <Form.Control
                                type="password"
                                placeholder="Ingresar contraseña"
                                onChange={handlePasswordChange}
                                value={password}
                                ref={passwordRef}
                                className={errors.password && 'border border-danger'}
                            />
                        </FormGroup>
                        <Row>
                            <Col />
                            <Col md={6} className="d-flex justify-content-end">
                                <Button variant="secondary" type="submit">
                                    Iniciar sesión
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
            {(errors.email || errors.password) && (
                <p style='color:red'>
                    Debe completar los campospara inciar sesion
                </p>
            )}
        </>
    );
};


export default Login;