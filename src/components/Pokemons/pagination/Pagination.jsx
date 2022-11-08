import { current } from '@reduxjs/toolkit'
import React from 'react'

const Pagination = ({arrayPages, currentPage, setCurrentPage, quantityPages, currentBlock, pagesPerBlock}) => {
 
        const prevPage = () => {
    
          if(currentPage - 1 === 0) {
            setCurrentPage(quantityPages)
          } else {
            setCurrentPage(currentPage - 1)
          }
        }
      
        const nextPage = () => {
          if(currentPage + 1 > quantityPages) {
            setCurrentPage(1)
          } else {
            setCurrentPage(currentPage +1)
          }
        }

        const nextBlock = () => {
                
            if( currentPage  + pagesPerBlock > quantityPages) {
              setCurrentPage(currentPage = 1)
            } else {
              setCurrentPage(5 * currentBlock + 1)
            }
                      
        }

        const prevBlock = () => {
                          
            if( currentPage - pagesPerBlock < 1 ) {
              setCurrentPage(currentPage = quantityPages)
            } else {
              setCurrentPage(5 * (currentBlock - 1))
            }
                     
        }
      

        const changePageTo = n => setCurrentPage(n)
      

        
 
    return (
        
    
          <div className='pagination-container'>
            
            <button onClick={prevPage} className='pagination-prev'>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button onClick={prevBlock} className='ellipsis m-right-btn-page '>
                <i className="fa-solid fa-ellipsis"></i>
            </button>
            
            <div className='pagination-number'>
              {
                arrayPages?.map(num => (
                  <button 
                    onClick={() => changePageTo(num)} 
                    key={num} 
                    className={currentPage === num ? `page-number page-active` : `page-number`}
                  >{num}</button>
                ))
              }
            </div>
            <button onClick={nextBlock} className='ellipsis m-left-btn-page'>
                <i className="fa-solid fa-ellipsis"></i>
            </button>
            <button onClick={nextPage} className='pagination-prev'>
                <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>


  )
}

export default Pagination