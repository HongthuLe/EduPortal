import React, { useState } from 'react'
import ToDoWrapper from './todo.style'
import { 
  Modal, 
  Box, 
  Stack,
  FormControl, 
  Select, 
  MenuItem, 
  InputLabel,
  Button, 
  TextField,
} from '@mui/material'

export default function Todo() {

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const [task, setTask] = useState('')

  return (
    <ToDoWrapper>
      <div className="top">
        <h2>TO-DO LIST</h2>
        <i className='bx bx-plus' onClick={handleOpenModal}/>
        <Modal open={openModal}>
          <Box 
            sx={{ 
              position : 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 600,
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
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                add new to-do task
              </h2>
              <form style={{ marginBottom: '16px' }}>
                <Stack spacing={3}>
                  <TextField
                    label="Task Title..."
                    type='text'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                  <TextField
                    label="Description..."
                    multiline
                    rows={3}
                  />
                </Stack>
              </form>
              <Button variant='contained' disableElevation style={{ marginRight: '16px' }}>Submit</Button>
              <Button onClick={handleCloseModal}  type='submit'>Cancel</Button>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="bottom"></div>
    </ToDoWrapper>
  )
}
