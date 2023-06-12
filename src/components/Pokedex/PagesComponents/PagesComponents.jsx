import './PagesComponents.css'

const PagesComponents = ({ totalPages, onChangePage, onNextPage, onBackPage }) => {
    
    const pagesArray = Array(totalPages).fill().map((_, i)=> i + 1);
  
    return (
    <div className='pagination_container'>
        <button className='btn_back' onClick={()=>onBackPage()}>Back</button>
            {pagesArray.map((page)=> <button key={page} className='btn_numbers' onClick={()=>onChangePage(page)}>{page}</button> ) }
        <button className='btn_next' onClick={()=>onNextPage()}>Next</button>
    </div>
  )
}

export default PagesComponents