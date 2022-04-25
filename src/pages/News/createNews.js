// import React, { useState } from "react"
// import { collection, addDoc } from "firebase/firestore"
// import { db } from "../../firebase/firebase-config"
// import NewsWrapper from "./news.style"
// import {
//   Typography,
//   Stack,
//   TextField,
//   Button,
//   Modal,
//   Box,
// } from "@mui/material";
// import AddRoundedIcon from "@mui/icons-material/AddRounded"

// export default function CreateNews() {

//   const classes = NewsWrapper()

//   const [open, setOpen] = useState(false)
//   const handleOpen = () => setOpen(true)
//   const handleClose = () => setOpen(false)

//   const [newsTitle, setNewsTitle] = useState('')
//   const [newsContent, setNewsContent] = useState('')

//   // collection ref
//   const newsColRef = collection(db, 'news')

//   // Create News
//   const handleNewsTitleChange = (e) => {
//     setNewsTitle(e.target.value)
//   }

//   const handleNewsContentChange = (e) => {
//     setNewsContent(e.target.value)
//   }
  
//   const createNews = async () => {
//     await addDoc(newsColRef, { newsTitle, newsContent })
//     handleClose(alert('success'))
//   }

//   return (
//     <>
//       <Button 
//         className={classes.cnBtn}
//         onClick={handleOpen}
//         disableElevation
//       >
//         <AddRoundedIcon />
//       </Button>
//       <Modal open={open}>
//         <Box className={classes.createNews}>
//           <Stack spacing={3}>
//             <Typography variant="h6">Create News</Typography>
//             <TextField
//               variant="outlined"
//               label="News Title..."
//               onChange={handleNewsTitleChange}
//             />
//             <TextField
//               className={classes.contentBox}
//               variant="outlined"
//               label="What is the news for today?"
//               rows={12}
//               multiline
//               onChange={handleNewsContentChange}
//             />
//           </Stack>
//           <Box>
//             <Button 
//               variant="contained" 
//               color='primary' 
//               disableElevation
//               style={{ marginRight: 12 }}
//               onClick={createNews}
//             >
//               Submit
//             </Button>
//             <Button 
//               variant="text" 
//               color='primary'
//               onClick={handleClose}
//             >
//               Cancel
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </>
//   )
// }
