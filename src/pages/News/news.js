import React, { useState, useEffect } from "react";
import NewsWrapper from "./news.style";
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
import NewDataServices from "./news.services";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function News({ getNewId, id, setNewId }) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("events");

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

  // Create New:
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (title === "") {
      setMessage({ error: true, msg: "Please enter a title for the news!" });
      return;
    }

    if (content === "") {
      setMessage({ error: true, msg: "Please enter a content for the news!" });
      return;
    }

    const newNew = {
      title,
      content,
      category,
    };

    try {
      if (id !== undefined && id !== "") {
        await NewDataServices.updateNew(id, newNew);
        setNewId("");
        setMessage({ error: false, msg: "The News updated successfully!" });
      } else {
        await NewDataServices.createNews(newNew);
        setMessage({ error: false, msg: "New News added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setContent("");
    handleCloseModal();
    getNews();
  };

  // Get Data from firestore:
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const data = await NewDataServices.getAllNews();
    setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // Delete:
  const handleDeleteNew = async (id) => {
    await NewDataServices.deleteNew(id);
    getNews();
  };

  //  Update:
  const handleUpdateNew = async () => {
    setMessage("");
    try {
      const docSnap = await NewDataServices.getNew(id);
      setTitle(docSnap.data().title);
      setContent(docSnap.data().content);
      setCategory(docSnap.data().category);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    getNews();

    if (id !== undefined && id !== "") {
      handleUpdateNew();
    }
  }, [id]);

  return (
    <NewsWrapper>
      <div className="top">
        <h2>News</h2>
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
                add news
              </h2>

              <form style={{ marginBottom: "16px" }} onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    label="News Title..."
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <TextField
                    label="Content..."
                    multiline
                    rows={8}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <FormControl>
                    <FormLabel>News Category: </FormLabel>

                    <RadioGroup
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <FormControlLabel
                        value="events"
                        control={<Radio />}
                        label="Events"
                      />
                      <FormControlLabel
                        value="vacation"
                        control={<Radio />}
                        label="Vacation"
                      />
                      <FormControlLabel
                        value="trip"
                        control={<Radio />}
                        label="Trip"
                      />
                      <FormControlLabel
                        value="tips"
                        control={<Radio />}
                        label="Tips"
                      />
                      <FormControlLabel
                        value="study"
                        control={<Radio />}
                        label="Study"
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
        {news.map((news, index) => {
          return (
              <div className="card">
                <div className="box">
                  <div className="content" key={news.id}>
                    <h1>{index + 1}</h1>
                    <h5>{news.category}</h5>
                    <h3>{news.title}</h3>
                    <p>{news.content}</p>
                  </div>
                  <div className="actions">
                    <i
                      className="bx bx-edit"
                      onClick={(e) => handleOpenModal(getNewId(news.id))}
                    />
                    <i
                      className="bx bx-trash-alt"
                      onClick={(e) => handleDeleteNew(news.id)}
                    />
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </NewsWrapper>
  );
}