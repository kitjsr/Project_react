import React from 'react'
import { usePDF } from 'react-to-pdf';
import SingleInvoice from './SingleInvoice';



export const MyDocument = () => {
   const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  return (
    <div>
         <div ref={targetRef}>
            <SingleInvoice/>
         </div>
         <button onClick={() => toPDF()}>Download PDF</button>
      </div>
  )
}

export default MyDocument
