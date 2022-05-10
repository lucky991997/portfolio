import React from 'react'
const CTA = () => {
    return (
        <div className="cta">
            <a
                className='btn'
                href="../../../public/assets/TRAN_QUOC_TUAN_CV.pdf"
                download>
                Download CV
            </a>
            <a 
            className='btn btn-primary'
            href="#contact">
               Pls contact me
            </a>
        </div>
    )
}

export default CTA