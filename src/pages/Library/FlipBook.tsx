/* import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Props tipi
interface FlipbookProps {
    pdfUrl: string;
}

// Page komponenti
interface PagesProps {
    number: number;
    children: React.ReactNode;
}

const Pages = React.forwardRef<HTMLDivElement, PagesProps>(({ number, children }, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            <div>{children}</div>
            <div>Page number: {number}</div>
        </div>
    );
});

Pages.displayName = 'Pages';

const Flipbook: React.FC<FlipbookProps> = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState<number | null>(null);

    const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
        setNumPages(numPages);
    };

    return (
        <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden">
            <h1 className="text-3xl text-white text-center font-bold">FlipBook</h1>
            <HTMLFlipBook
                {...({
                    width: 400,
                    height: 570,
                } as any)}
            >
                {Array.from(new Array(numPages || 0), (_, index) => (
                    <Pages key={index} number={index + 1}>
                        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page
                                pageNumber={index + 1}
                                width={400}
                                renderAnnotationLayer={false}
                                renderTextLayer={false}
                            />
                        </Document>
                    </Pages>
                ))}
            </HTMLFlipBook>
        </div >
    );
};

export default Flipbook;
 */