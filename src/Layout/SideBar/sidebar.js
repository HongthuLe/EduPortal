import React, { useEffect } from 'react'
import { SidebarWrapper } from './sidebar.style'
import SideBarLink from './sidebarLink'
import { Drawer, Button, Typography } from '@mui/material'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase/firebase-config'
import { useNavigate } from 'react-router-dom'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

export default function Sidebar() {

  const classes = SidebarWrapper()

  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(!user){
        navigate('/')
      }
    })
  }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      }).catch(err => {
        alert(err.message)
    })
  }
  
  return (
    <div>
      <nav className={classes.drawer}>
        <Drawer open
          variant='permanent'
          anchor='left'
          classes={{ paper: classes.drawerPaper }}
        >
          <SideBarLink />
          <Button 
            variant="outlined"
            className={classes.drawerFooter} 
            startIcon={<LogoutRoundedIcon />}
            onClick={handleSignOut}
          >
            <Typography variant='subtitle2'>Sign Out</Typography>
          </Button>
        </Drawer>
      </nav>
    </div>
  )
}
