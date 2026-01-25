import React, {useRef} from 'react';
import {Form, Button, Card} from "react-bootstrap";

import { useTranslation } from "react-i18next";

export default function SignUp() {
    const { t } = useTranslation();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> {t("signup")} </h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>{t("email")}</Form.Label>
                            <Form.Control type="email" ref={emailRef}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>{t("pwd")}</Form.Label>
                            <Form.Control type="password" ref={passwordRef}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>{t("pwdconfirm")}</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef}></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="w-100"> {t("signup")} </Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                {t("ahc")} {t("login")}
            </div>
        </>
  );
}
