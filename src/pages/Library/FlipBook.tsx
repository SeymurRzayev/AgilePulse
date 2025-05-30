// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';


function FlipBook({ fileUrl }: { fileUrl: string }) {
    // const [numPages, setNumPages] = useState<number | null>(null);
    // const [pageNumber, setPageNumber] = useState(1);
  /*   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    }; */
    console.log(fileUrl)

    return (
        <div>
            {/* <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess} className={`bg-red-500 h-[500px]`}>
                <Page pageNumber={pageNumber} />
            </Document> */}
           {/*  <div className="flex gap-4 mt-4">
                <button className='cursor-pointer' disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
                <span>Page {pageNumber} of {numPages}</span>
                <button className='cursor-pointer' disabled={pageNumber >= (numPages ?? 0)} onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
            </div> */}
        </div>
    );
}


export default FlipBook;