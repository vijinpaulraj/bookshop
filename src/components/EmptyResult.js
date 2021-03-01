import React, { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'

export const EmptyResult = () => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Col className="align-items-center flex-column">
                <Alert variant="danger" onClose={() => window.location.reload()} dismissible>
                    <p className="text-center">
                        Sorry, no books found.
                    </p>
                </Alert>
            </Col>
        );
    }
}