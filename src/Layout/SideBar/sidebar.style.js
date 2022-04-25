import { makeStyles } from '@mui/styles'

export const SidebarWrapper = makeStyles({
  drawer: {
    width: '237.67px',
    maxHeight: '641px'
  },
  drawerPaper: {
    maxHeight: '641px',
    width: '237.67px',
    marginTop: '24px',
    marginLeft: '24px',
    borderRadius: '16px',
    border: 'none!important',
    overflow: 'hidden !important'
  },
  account: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  active: {
    backgroundColor: '#DDD1FC !important',
    color: '#9873F0 !important',
    borderRight: '4px solid #9873F0 !important',
  },
  notActive: {},
  iconActive: {
    color: '#9873F0 !important',
  },
  iconNotActive:{
    color: '#000000DE !important',
  },
  drawerFooter: {
    display: 'flex',
    width: '100%',
    height: '60px',
    borderRadius: '16px !important',
    bottom: '-1.81rem',
    border: '2px solid !important',
    '&:hover': {
      backgroundColor: '#FF9026 !important',
      color: '#fff'
    }
  }
})