import React from 'react'
import FeaturedWrapper from './featured.style'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

export default function Featured() {
  return (
    <FeaturedWrapper>
      <div className="top">
        <h3 className="title">Total Revenue</h3>
        <i className='bx bx-dots-vertical-rounded' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={80} text={'80%'} strokeWidth={6} />
        </div>
        <p className="title">total objects added today</p>
        <p className="amount">126</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">average total</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRoundedIcon fontSize="small" />
              <div className="resultAmount">130</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownRoundedIcon fontSize="small" />
              <div className="resultAmount">4</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRoundedIcon fontSize="small" />
              <div className="resultAmount">126</div>
            </div>
          </div>
        </div>
      </div>
    </FeaturedWrapper>
  )
}
