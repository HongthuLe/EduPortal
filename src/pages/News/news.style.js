import { makeStyles } from '@mui/styles'

const NewsWrapper = makeStyles({
  cnBtn: {
    backgroundColor: '#FF9026 !important',
    color: '#fff !important',
    '&:hover': {
      color: '#000 !important'
    }
  },
  createNews: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 32,
  },
  contentBox: {
    overflow: 'auto',
    marginTop: '20px !important',
    marginBottom: '20px !important',
  }
})
export default NewsWrapper