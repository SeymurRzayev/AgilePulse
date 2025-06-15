// src/components/LibraryDetails/FlipBook.tsx
import { useState, useEffect, useRef, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Import PDF.js ESM directly
import * as pdfjsLib from "pdfjs-dist";
import type { PDFDocumentProxy } from "pdfjs-dist";

// Configure PDF.js version
const PDFJS_VERSION = "5.3.31";
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`;

// Define types for PDF.js ESM
declare global {
  interface Window {
    pdfjsLib: typeof pdfjsLib;
  }
}

type FlipBookProps = {
  pdfUrl: string;
};

const FlipBook = ({ pdfUrl }: FlipBookProps) => {
  const [numPages, setNumPages] = useState<number | null>(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isRendering, setIsRendering] = useState(false);
  const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef1 = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);

  // Set initial responsive values
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Add PDF viewer CSS dynamically
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/web/pdf_viewer.min.css`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Set initial device type and handle window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    // Set initial values
    handleResize();
    
    // Add resize event listener
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Load PDF document
  useEffect(() => {
    let isMounted = true;
    
    const initPdf = async () => {
      try {
        setIsLoading(true);
        setPdfError("");
        
        // Load the PDF document
        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          cMapUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/cmaps/`,
          cMapPacked: true,
        });
        
        const document = await loadingTask.promise;
        
        if (!isMounted) return;
        
        setPdfDocument(document);
        setNumPages(document.numPages);
        setIsLoading(false);
      } catch (error) {
        console.error("PDF initialization failed:", error);
        if (isMounted) {
          setPdfError("Failed to load PDF. Please try again later.");
          setIsLoading(false);
        }
      }
    };
    
    initPdf();
    
    return () => {
      isMounted = false;
      if (pdfDocument) {
        pdfDocument.destroy();
      }
    };
  }, [pdfUrl]);

  // Render pages to canvas
  const renderPages = useCallback(async () => {
    if (!pdfDocument || !containerRef.current || !canvasRef1.current) return;
    
    setIsRendering(true);
    
    try {
      // Calculate available width per page
      const container = containerRef.current;
      const isTwoPages = !isMobile && numPages && pageNumber + 1 <= numPages;
      
      // Determine page width based on device type
      let pageWidth = container.clientWidth;
      
      if (isTwoPages) {
        // Split width for two pages
        pageWidth = container.clientWidth / 2;
      } else if (isTablet) {
        // Tablet view - slightly smaller than full width
        pageWidth = container.clientWidth * 0.9;
      }
      
      // Render left page
      await renderPageToCanvas(
        pdfDocument,
        pageNumber,
        canvasRef1.current,
        pageWidth
      );
      
      // Render right page if needed
      if (isTwoPages && canvasRef2.current) {
        await renderPageToCanvas(
          pdfDocument,
          pageNumber + 1,
          canvasRef2.current,
          pageWidth
        );
      }
    } catch (error) {
      console.error('Error rendering pages:', error);
    }
    
    setIsRendering(false);
  }, [pdfDocument, pageNumber, numPages, isMobile, isTablet]);

  // Render when document or page changes
  useEffect(() => {
    if (pdfDocument) {
      renderPages();
    }
  }, [pdfDocument, pageNumber, renderPages]);

  // Navigation functions
  const goToPrevPage = () => setPageNumber(prev => Math.max(1, prev - (isMobile ? 1 : 2)));
  const goToNextPage = () => setPageNumber(prev => Math.min(numPages || 1, prev + (isMobile ? 1 : 2)));

  return (
    <div className="w-full max-w-7xl mx-auto" ref={containerRef}>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-500">PDF yüklənir...</p>
        </div>
      ) : pdfError ? (
        <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
          <p className="font-bold">Xəta baş verdi</p>
          <p>{pdfError}</p>
          <button
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={() => window.location.reload()}
          >
            Səhifəni yenilə
          </button>
        </div>
      ) : (
        <div className="flex flex-col">
          {/* Navigation controls */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-[#2C4B9B] cursor-pointer w-12 h-12 flex items-center justify-center text-white rounded-full disabled:bg-gray-300 hover:bg-blue-700 transition"
              aria-label="Previous page"
            >
              <FaArrowLeft className="text-xl" />
            </button>

            <button
              onClick={goToNextPage}
              disabled={pageNumber >= (numPages || 1)}
              className="px-4 py-2 bg-[#2C4B9B] cursor-pointer rounded-full w-12 h-12 flex items-center justify-center text-white disabled:bg-gray-300 hover:bg-blue-700 transition"
              aria-label="Next page"
            >
              <FaArrowRight className="text-xl" />
            </button>
          </div>

          {/* Rendering indicator */}
          {isRendering && (
            <div className="flex justify-center mb-4">
              <div className="flex items-center bg-blue-100 px-4 py-2 rounded-full">
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-500 mr-2"></div>
                <span className="text-blue-700">Səhifələr yüklənir</span>
              </div>
            </div>
          )}

          {/* Pages container */}
          <div className={`flex ${
            isMobile ? "flex-col items-center" : "flex-row justify-center"
          } gap-0 w-full`}>
            {/* Left Page */}
            <div className={`flex flex-col items-center ${
              isMobile ? "w-full max-w-md mx-auto" : 
              isTablet ? "w-full max-w-lg" : "w-1/2"
            }`}>
              <div style={{boxShadow: "0px 4px 8px 7px rgba(0, 0, 0, 0.14)"}} className={`shadow-xl border border-gray-200 overflow-hidden ${
                isMobile ? "rounded-lg" : "rounded-tl-[30px] rounded-bl-[30px]"
              }`}>
                <canvas ref={canvasRef1} className="w-full" />
              </div>
              <p className="text-center text-lg md:text-xl mt-2.5 text-black">
                {pageNumber}
              </p>
            </div>

            {/* Right Page - conditionally rendered */}
            {!isMobile && numPages && pageNumber + 1 <= numPages && (
              <div className={`flex flex-col items-center ${
                isTablet ? "w-full max-w-lg" : "w-1/2"
              }`}>
                <div style={{boxShadow: "0px 4px 8px 7px rgba(0, 0, 0, 0.14)"}} className="shadow-2xl border border-gray-200 overflow-hidden rounded-tr-[30px] rounded-br-[30px] w-full">
                  <canvas ref={canvasRef2} className="w-full" />
                </div>
                <p className="text-center text-lg md:text-xl mt-2.5 text-black">
                  {pageNumber + 1}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Render helper function
async function renderPageToCanvas(
  pdf: PDFDocumentProxy, 
  pageNum: number, 
  canvas: HTMLCanvasElement,
  maxWidth: number
) {
  try {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1 });
    
    // Calculate scale to fit maxWidth while preserving aspect ratio
    const scale = maxWidth / viewport.width;
    const scaledViewport = page.getViewport({ scale });
    
    // Set canvas dimensions
    canvas.height = scaledViewport.height;
    canvas.width = scaledViewport.width;
    
    // Render PDF page
    const context = canvas.getContext('2d')!;
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport
    };
    
    await page.render(renderContext).promise;
  } catch (error) {
    console.error(`Error rendering page ${pageNum}:`, error);
    throw error;
  }
}

export default FlipBook;