import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"

// layout:
import Layout from "./Layout/layout"
// pages:
import Welcome from "./pages/Welcome/welcome"
import Dashboard from "./pages/Dashboard/dashboard"
import Student from "./pages/Students/students"
import Lecturer from "./pages/Lecturers/lecturers"
import News from "./pages/News/news"
import TodoList from "./pages/ToDo/todo"
import Courses from "./pages/Courses/courses"

function App() {

  //Tasks
  const [taskId, setTaskId] = useState('')
  
  const handleGetTaskId = (id) => {
    setTaskId(id)
  } 
  
  //Students
  const [studentId, setStudentId] = useState('')

  const handleGetStudentId = (id) => {
    setStudentId(id)
  } 

  //Lecturers
  const [lecturerId, setLecturerId] = useState('')

  const handleGetLecturerId = (id) => {
    setLecturerId(id)
  } 

  //News
  const [newId, setNewId] = useState('')

  const handleGetNewId = (id) => {
    setNewId(id)
  } 

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} exact />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/students"
          element={
            <Layout>
              <Student 
                getStudentId={handleGetStudentId} 
                id={studentId} 
                setStudentId={setStudentId}
              />
            </Layout>
          }
        />
        <Route
          path="/lecturers"
          element={
            <Layout>
              <Lecturer 
                getLecturerId={handleGetLecturerId} 
                id={lecturerId} 
                setLecturerId={setLecturerId}
              />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />
        <Route
          path="/news"
          element={
            <Layout>
              <News 
                getNewId={handleGetNewId} 
                id={newId} 
                setNewId={setNewId}
              />
            </Layout>
          }
        />
        <Route
          path="/tasks"
          element={
            <Layout>
              <TodoList 
                getTaskId={handleGetTaskId} 
                id={taskId} 
                setTaskId={setTaskId} 
              />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}
export default App
