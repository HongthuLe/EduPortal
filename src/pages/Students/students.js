import React, { useState } from 'react'
import StudentsWrapper from './students.style'
import StudentDataTable from './DataTable/dataTable'
import { 
  Modal, 
  Box, 
  FormControl, 
  Select, 
  MenuItem, 
  InputLabel,
  Button, 
  TextField,
} from '@mui/material'
import NoImg from '../../assets/images/noImg.jpeg'
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded'
// import { db, auth } from '../../firebase/firebase-config'
// import { setDoc, addDoc, collection, doc, serverTimestamp } from 'firebase/firestore'
// import { createUserWithEmailAndPassword } from 'firebase/auth'


export default function Students() {

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const [file, setFile] = useState('')

  return (
    <StudentsWrapper>
      <div className="top">
        <h2>Students</h2>
        <i className='bx bx-plus' onClick={handleOpenModal} />
        <Modal open={openModal}>
          <Box 
            sx={{ 
              position : 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 900,
              backgroundColor: '#fff',
              borderRadius: '12px',
            }}
          >
            <div style={{ padding: '16px' }}>
              <h2 
                style={{ 
                  margin: 0, 
                  textTransform: 'uppercase',
                  color: 'darkgrey',
                  fontWeight: 600
                }}
              >
                add new student
              </h2>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <img 
                  style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                  src={file ? URL.createObjectURL(file) : NoImg}
                  alt=''
                />
              </div>
              <div style={{ flex: 2, padding: '16px' }}>
                <form 
                  style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '16px',
                    justifyContent: 'space-around',
                  }}
                >
                  <div style={{ width: '40%' }}>
                    <label htmlFor="file" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      Avatar: <DriveFolderUploadRoundedIcon />
                    </label>
                    <input 
                      type="file" 
                      id="file" 
                      style={{ display: 'none' }} 
                      onChange={e => setFile(e.target.files[0])}
                    />
                  </div>
                  <div style={{ width: '40%' }}>
                    <TextField 
                      type='text'
                      variant="outlined" 
                      label="Student ID"
                      style={{ width: '100%' }} 
                    />
                  </div>
                  <div style={{ width: '40%' }}>
                    <TextField 
                      type='text'
                      variant="outlined" 
                      label="Student Last Name"
                      style={{ width: '100%' }} 
                    />
                  </div>
                  <div style={{ width: '40%' }}>
                    <FormControl style={{ width: '100%' }}>
                      <InputLabel style={{ color: '#FBB068' }}>Gender</InputLabel>
                      <Select
                        label="Gender"
                        displayEmpty
                        defaultValue="male"
                      >
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ width: '40%' }}>
                    <TextField 
                      type='text'
                      variant="outlined" 
                      label="Student Middle Name"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div style={{ width: '40%' }}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel style={{color: '#FBB068'}}>Major</InputLabel>
                      <Select
                        label="Major"
                        displayEmpty
                        defaultValue="computing"
                      >
                        <MenuItem value="Computing">Computing</MenuItem>
                        <MenuItem value="Design">Design</MenuItem>
                        <MenuItem value="Marketing">Marketing</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ width: '40%' }}>
                    <TextField 
                      type='text'
                      variant="outlined" 
                      label="Student First Name"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div style={{ width: '40%' }}>
                    <TextField 
                      type='text'
                      variant="outlined" 
                      label="Student Phone Number"
                      style={{ width: '100%' }} 
                    />
                  </div>
                  <div style={{ width: '91.5%' }}>
                  <TextField 
                      type='text'
                      variant="outlined" 
                      label="Student Address"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div style={{ width: '91.5%', display: 'flex', justifyContent: 'center' }}>
                    <Button style={{ marginRight: '16px' }} onClick={handleCloseModal}>Cancel</Button>
                    <Button variant='contained' type='submit'>Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="bottom">
        <StudentDataTable />
      </div>
    </StudentsWrapper>
  )
}


// import React, { useState, useEffect } from 'react'
// import { db } from '../../firebase/firebase-config'
// import { 
//   collection, 
//   onSnapshot, 
//   getDocs } from 'firebase/firestore'
// import { Box } from '@mui/material'

// export default function Students() {

//   const [student, setStudent ] = useState(null)

//   // collection ref
//   const studentsColRef = collection(db, 'students')

//   //get collection data
//   onSnapshot(studentsColRef, snapshot => {
//     console.log(snapshot)
//   }, [])

//   // getDocs(studentsColRef)
//   //   .then((snapshot) => {
//   //     let students = []
//   //     snapshot.docs.forEach((doc) => {
//   //       students.push({ ...doc.data(), id: doc.id })
//   //     })
//   //     console.log(students)
//   //   })
//   //   .catch(err => {
//   //     console.log(err.message)
//   //   })

//   // const [students, setStudents ] = useState([])
//   // const studentsCollectionRef = collection(db, 'students')

//   // useEffect(() =>{

//   //   const getStudents = async () => {
//   //     const studentData = await getDocs(studentsCollectionRef)
//   //     setStudents(studentData.docs.map((doc) => ({...doc.studentData(), id: doc.id})))
//   //   }
//   //   getStudents()

//   // }, [])

//   return (
//     <div>
//       Student Components
//     </div>
//   )
// }
