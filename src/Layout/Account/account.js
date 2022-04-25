import React from 'react'
import { BigHead } from '@bigheads/core'
import {
  Avatar, 
  Typography,
  Stack
} from '@mui/material'
import { SidebarWrapper } from '../SideBar/sidebar.style'

export default function Account() {

  const classes = SidebarWrapper()

  return (
    <Stack className={classes.account} spacing={2}>
      <Avatar sx={{ bgcolor: 'transparent', width: 192, height: 192 }}>
        <BigHead
          accessory="none"
          body="chest"
          circleColor="blue"
          clothing="shirt"
          clothingColor="white"
          eyebrows="angry"
          eyes="dizzy"
          faceMask={false}
          faceMaskColor="red"
          facialHair="none"
          graphic="react"
          hair="bun"
          hairColor="black"
          hat="none"
          hatColor="blue"
          lashes={false}
          lipColor="purple"
          mask
          mouth="grin"
          skinTone="red"
          width='192px'
          height='192px'
        />
      </Avatar>
      <Typography>Juliette Seymour</Typography>
    </Stack>
  )
}
