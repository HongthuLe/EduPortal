// import React, { useState } from "react"
// import { db } from "../../firebase/firebase-config"
// import { collection, addDoc } from "firebase/firestore"
// import { Box, Typography, Stack, TextField, Button } from "@mui/material"

// const CreateTask = () => {
//   const [taskTitle, setTaskTitle] = useState('')
//   const [taskDes, setTaskDes] = useState('')

//   const hanleTaskTitleChange = (e) => {
//     setTaskTitle(e.target.value)
//   }

//   const hanleTaskDesChange = (e) => {
//     setTaskDes(e.target.value)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     await addDoc(collection(db, 'tasks'), {
//       taskTitle,
//       taskDes,
//       createdAt: new Date(),
//       completed: false
//     })
//     setTaskTitle('')
//   }

//   return (
//     <Box onSubmit={handleSubmit}>
//       <Typography variant="h6">Create Task</Typography>
//       <Stack>
//         <TextField
//           label="Task Title..."
//           value={taskTitle}
//           onChange={hanleTaskTitleChange}
//         />
//         <TextField
//           label="Description..."
//           value={taskDes}
//           onChange={hanleTaskDesChange}
//         />
//       </Stack>
//       <Box>
//         <Button
//           variant="contained"
//           color="primary"
//           disableElevation
//           style={{ marginRight: 12 }}
//         >
//           Submit
//         </Button>
//       </Box>
//     </Box>
//   )
// }

// export default CreateTask