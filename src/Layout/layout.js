import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Stack, Box, Button, IconButton } from "@mui/material"
import LayoutWrapper from "./layout.style"
import Profile from "../assets/images/Profile/profile.jpeg"
import { SideBarItems } from "../assets/data/Drawer/sidebarItems"
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'

export default function Layout({ children }) {
  
  const navigate = useNavigate()

  const [active, setActive] = useState(false)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/')
      }
    })
  }, [])

  return (
    <LayoutWrapper>
      <div className={`sidebar ${active ? "active" : ""}`}>
        <div className="brandContent">
          <Link to='/dashboard' style={{ textDecoration: "none", color: 'black' }}>
            <div className="brand">
              <i className="bx bxs-chart"></i>
              <div className="brandName">EduPortal</div>
            </div>
          </Link>
          <i
            className="bx bx-menu"
            id="open-menu-btn"
            onClick={() => setActive(!active)}
          />
        </div>
        <ul className="sideList">
          {SideBarItems.map((item) => (
            <li key={item.id} onClick={() => navigate(item.path)}>
              <a>
                <i>{item.icon}</i>
                <span className="linksName">{item.label}</span>
              </a>
              <span className="tooltip" >{item.tooltip}</span>
            </li>
          ))}
        </ul>
        <div className="profileContent">
          <div className="profile">
            <div className="profileDetails">
              <img src={Profile} alt="profileImg" />
              <div className="jobName">
                <div className="name">le hong thu</div>
                <div className="job">manager</div>
              </div>
            </div>
            <i 
              className="bx bx-log-out" 
              id="signout" 
              onClick={handleSignOut}
            />
          </div>
        </div>
      </div>
      <div className="others">
        <Stack>
          <Box className="header">
            <Box className="headerDetails">
              <Box className="search">
                <i className="bx bx-search" />
                <input type="text" placeholder="Search..." />
              </Box>
              <Box className="items">
                <Box className="item">
                  <Button startIcon={<i className="bx bx-globe" />}>eng</Button>
                </Box>
                <Box className="item">
                  <IconButton size="medium" className="actionBtn">
                    <i className="bx bx-bell" />
                  </IconButton>
                  <div className="counter">1</div>
                </Box>
                <Box className="item">
                  <IconButton size="medium" className="actionBtn">
                    <i className="bx bx-message-square-dots" />
                  </IconButton>
                  <div className="counter">2</div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="page">
            <Box className="content">{children}</Box>
          </Box>
        </Stack>
      </div>
    </LayoutWrapper>
  )
}
