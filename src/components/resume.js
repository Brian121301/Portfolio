import React, { useState } from "react";
import PDF from "../assets/Brian_Najera.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import Container from "react-bootstrap/Container";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
    const [width] = useState(window.innerWidth);

    return (
        <div>
            <Container className="d-flex justify-content-center">
            <div>
            <embed src={PDF} type="application/pdf" width="100%" height="600px" />
        </div>
            </Container>
        </div>
    );
}

export default Resume;
