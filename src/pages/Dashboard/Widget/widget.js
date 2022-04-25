import React from 'react'
import WidgetWrapper from './widget.style'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'

import { WidgetItems } from '../../../assets/data/Dashboard/dashboard'

export default function Widget({ type }) {

  //temporary:
  const amount = 100
  const diff = 12

  return (
    <>
      {WidgetItems.map((obj) => (
        <WidgetWrapper key={obj.id}>
          <div className="left">
            <span className="object">{obj.object}s</span>
            <span className="counter">{obj.fluctuations} {amount}</span>
            <span className="link">See all {obj.object}</span>
          </div>
          <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpRoundedIcon />
              {diff} %
            </div>
            {obj.icon}
          </div>
        </WidgetWrapper>
      ))}
    </>
  )
}
