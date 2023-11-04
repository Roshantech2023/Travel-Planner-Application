import React from 'react'
import './Searchstyle.css'
import { Button } from '@material-ui/core'

function Search() {
  return (
    <div className='search'>
      <div className='container'>
        <div className='left'>
            <div className='promo'>
              <h4 className='save'>GET AN ADDITIONAL 7% OFF</h4>
              <p className='timer'>12 HOURS LEFT</p>
              <p className='offers'>VIEW ALL CURRENT OFFERS</p>
            </div>
            <form>
              <div className='input-wrap'>
                <label>Destination</label>
                <select>
                  <option value="1">Bangalore</option>
                  <option value="1">Mysore</option>
                  <option value="1">GOA</option>
                  <option value="1">Chick mangalore</option>
                  <option value="1">Coorg</option>
                  <option value="1">pazhani</option>
                  <option value="1">esha</option>
                </select>
              </div>
              <div className='date'>
                <div className='input-wrap'>
                  <label>Check-In</label>
                  <input type='date'/>
                </div>
                <div className='input-wrap'>
                  <label>Check-Out</label>
                  <input type='date'/>
                </div>
              </div>
              <button>Rates & Availabilities</button>
            </form>
        </div>
        <div className='right'>
        <h2>LUXURY AND FOODS INCLUDED VACATIONS FOR TWO PEOPLES</h2>
               <p>Come experience with 60% Discount charge ,with good and <br/>satisfied foods and fully pre preared luxury items.<br/>
                  This offers is for only for couples and families </p>
        </div>
        </div>
    </div>
  )
}

export default Search