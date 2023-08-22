import React from 'react'
import Gold from '../../assets/Goldimg.jpg'
import './Searchstyle.css'

function Search() {
  return (
    <div className='search'>
        <div className='container'>
             <div className='left'>
               <h2>LUXURY AND FOODS INCLUDED VACATIONS FOR TWO PEOPLES</h2>
               <p>Come experience with 60% Discount charge ,with good and <br/>satisfied foods and fully pre preared luxury items.<br/>
                  This offers is for only for couples and families </p>
                  <div className='search-col-2'>
                   <div className='box'>
                    <div>
                        <img src={Gold} alt="/" style={{marginRight:'1rem'}}/>
                    </div>
                    <div>
                        <h1>WORLD'S LEADING</h1>
                        <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                    </div>  -
                  </div>
                  <div className='box'>
                    <div>
                        <h3>NO ONE INCLUDES MORE</h3>
                        <p>ALL-INCLUDES COMPANY FOR 20 YEARS IN-A-ROW</p>
                        <button>View Packages</button>
                    </div>
                  </div>
             </div>
        </div>
        <div className='right'>

        </div>
    </div>
  )
}

export default Search