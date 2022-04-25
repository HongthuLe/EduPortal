import React from 'react'

export default function News() {
  return (
    <div>News</div>
  )
}


// import React, { useState, useEffect } from 'react'
// import CreateNews from './createNews'
// import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'
// import { db } from '../../firebase/firebase-config'
// import { Box, IconButton, Typography } from '@mui/material'
// import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
// import EditRoundedIcon from '@mui/icons-material/EditRounded'

// export default function News() {

//   const [newsList, setNewsList] = useState([])

//   // collection ref
//   const newsColRef = collection(db, 'news')

//   useEffect(() => {

//     // get all data from firestore
//     const getNews = async () => {
//       const data = await getDocs(newsColRef)
//       setNewsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//     }
//     getNews()
//   })

//   //  Delete News
//   const deleteNews = async (id) => {
//     const newsDoc = doc(db, 'news', id)
//     await deleteDoc(newsDoc)
//   }

//   //  Update News
//   const updateNews = async (id, newsTitle, newsContent) => {
//     const newsDoc = doc(db, 'news', id)
//     const newsFields = doc(db, 'news', id, newsTitle, newsContent)
//     await updateDoc(newsDoc, newsFields)
    
//     // const createNews = async () => {
//     //   await addDoc(newsColRef, { newsTitle, newsContent })
//     //   handleClose(alert('success'))
//     // }

//   }

//   return (
//     <>
//       <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
//         <Typography variant='h6'>
//           News
//         </Typography>
//         <CreateNews />
//       </Box>

//       <div>
//         {newsList.map((news) => {
//           return (
//             <Box>
//               <hr />
//               <Box>
//                 <Typography variant='h6'>Title: {news.newsTitle}</Typography>
//                 <Typography variant='subtitle'>Content: {news.newsContent}</Typography>
//               </Box>
//               <Box>
//                 <IconButton 
//                   color="primary"
//                   onClick={() => {
//                     deleteNews(news.id)
//                   }}
//                 >
//                   <DeleteRoundedIcon />
//                 </IconButton>
//                 <IconButton 
//                   color="primary"
//                   onClick={() => {
//                     updateNews(news.id, news.newsTitle, news.newsContent)
//                   }}
//                 >
//                   <EditRoundedIcon />
//                 </IconButton>
//               </Box>
//             </Box>
//           )
//         })}
//       </div>
//     </>
//   )
// }
