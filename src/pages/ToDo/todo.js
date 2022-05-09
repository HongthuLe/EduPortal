import React, { useState, useEffect } from "react";
import ToDoWrapper from "./todo.style";
import {
  Modal,
  Box,
  Stack,
  FormControl,
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Alert,
  Snackbar,
  Slide,
} from "@mui/material";
import TaskDataServices from "./task.services";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function Todo({ getTaskId, id, setTaskId }) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("work");

  const [message, setMessage] = useState({ error: false, msg: "" });

  const [openAlert, setOpenAlert] = useState(false);

  const [transition, setTransition] = useState(undefined);

  const handleClickAlert = (Transition) => () => {
    setTransition(() => Transition);
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  // Create New Task:
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (title === "") {
      setMessage({ error: true, msg: "Please enter a title for the task!" });
      return;
    }

    const newTask = {
      title,
      description,
      category,
    };

    try {
      if (id !== undefined && id !== "") {
        await TaskDataServices.updateTask(id, newTask);
        setTaskId("");
        setMessage({ error: false, msg: "The Task updated successfully!" });
      } else {
        await TaskDataServices.createTasks(newTask);
        setMessage({ error: false, msg: "New Task added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setDescription("");
    handleCloseModal();
    getTasks();
  };

  // Get Task Data from firestore:
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const data = await TaskDataServices.getAllTasks();
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // Delete Task:
  const handleDeleteTask = async (id) => {
    await TaskDataServices.deleteTask(id);
    getTasks();
  };

  //  Update Task:
  const handleUpdateTask = async () => {
    setMessage("");
    try {
      const docSnap = await TaskDataServices.getTask(id);
      setTitle(docSnap.data().title);
      setDescription(docSnap.data().description);
      setCategory(docSnap.data().category);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    getTasks();

    if (id !== undefined && id !== "") {
      handleUpdateTask();
    }
  }, [id]);

  return (
    <ToDoWrapper>
      <div className="top">
        <h2>TO-DO LIST</h2>
        <i className="bx bx-plus" onClick={handleOpenModal} />
        <Modal open={openModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              backgroundColor: "#fff",
              borderRadius: "12px",
            }}
          >
            <div style={{ padding: "16px" }}>
              <h2
                style={{
                  margin: 0,
                  textTransform: "uppercase",
                  color: "darkgrey",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                add new to-do task
              </h2>

              <form style={{ marginBottom: "16px" }} onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    label="Task Title..."
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <TextField
                    label="Description..."
                    multiline
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <FormControl>
                    <FormLabel>Task Category: </FormLabel>

                    <RadioGroup
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <FormControlLabel
                        value="work"
                        control={<Radio />}
                        label="Work"
                      />
                      <FormControlLabel
                        value="personal"
                        control={<Radio />}
                        label="Personal"
                      />
                      <FormControlLabel
                        value="students"
                        control={<Radio />}
                        label="Student"
                      />
                      <FormControlLabel
                        value="lecturers"
                        control={<Radio />}
                        label="Lecturers"
                      />
                      <FormControlLabel
                        value="news"
                        control={<Radio />}
                        label="News"
                      />
                    </RadioGroup>
                  </FormControl>
                </Stack>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "24px",
                  }}
                >
                  <Button
                    onClick={handleCloseModal}
                    type="submit"
                    style={{ marginRight: "16px" }}
                  >
                    Close
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    onClick={handleClickAlert(TransitionLeft)}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </Box>
        </Modal>
        {message?.msg && (
          <Snackbar
            open={openAlert}
            autoHideDuration={3000}
            onClose={handleCloseAlert}
            TransitionComponent={transition}
            key={transition ? transition.name : ""}
          >
            <Alert
              onClose={() => setMessage("")}
              severity={message?.error ? "error" : "success"}
              sx={{ width: "100%" }}
            >
              {message?.msg}
            </Alert>
          </Snackbar>
        )}
      </div>
      <div className="bottom">
        {tasks.map((doc, index) => {
          return (
            <div className="card">
              <div className="box">
                <div className="content" key={doc.id}>
                  <h1>{index + 1}</h1>
                  <h5>{doc.category}</h5>
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                </div>
                <div className="actions">
                  <i
                    className="bx bx-edit"
                    onClick={(e) => handleOpenModal(getTaskId(doc.id))}
                  />
                  <i
                    className="bx bx-check"
                    onClick={(e) => handleDeleteTask(doc.id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ToDoWrapper>
  );
}
