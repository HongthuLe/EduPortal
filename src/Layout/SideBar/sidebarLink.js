import React from 'react'
import Account from '../Account/account'
// import { SideBarItems } from '../../assets/data/Drawer/sidebarItems'
import { useNavigate, useLocation } from "react-router-dom"
import { SidebarWrapper } from './sidebar.style'

import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"

export default function SidebarLink() {

  const classes = SidebarWrapper()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div>
      <Account />
      {
        // SideBarItems.map(item => (
        //   <ListItem
        //     button
        //     key={item.id}
        //     onClick={() => navigate(item.path)}
        //     className={location.pathname === item.path ? classes.active : classes.notActive}
        //   >
        //     <ListItemIcon
        //       sx={{ marginLeft: '16px' }}
        //       className={location.pathname === item.path ? classes.iconActive : classes.iconNotActive}
        //     > 
        //       {item.icon} 
        //     </ListItemIcon>
        //     <ListItemText> {item.label} </ListItemText>
        //   </ListItem>
        // ))
      }
    </div>
  )
}
