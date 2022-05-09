import React, { useState, useEffect } from "react";
import StudentsWrapper from "./students.style";
import { styled } from "@mui/material/styles";
import {
  Modal,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  TextField,
  Slide,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import NoImg from "../../assets/images/noImg.jpeg";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import StudentDataServices from "./student.services";
import { db, auth, storage } from "../../firebase/firebase-config";
// import { setDoc, doc, collection, addDoc, serverTimestamp } from 'firebase/firestore'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function Students({ getStudentId, id, setStudentId }) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [file, setFile] = useState("");
  const [per, setPer] = useState(null);

  // Upload Img:
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress)
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            getStudents((prev) => ({...prev, sAvatar: downloadURL}))
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const [sID, setSID] = useState("");
  const [sMajor, setSMajor] = useState("computing");
  const [sFirstname, setSFirstname] = useState("");
  const [sLastname, setSLastname] = useState("");
  const [sMidname, setSMidname] = useState("");
  const [sEmail, setSEmail] = useState("@gre.ac.uk");
  const [sPassword, setSPassword] = useState("abc123");
  const [sGender, setSGender] = useState("male");
  const [sPhone, setSPhone] = useState("");
  const [sBirth, setSBirth] = useState("");
  const [sAddress, setSAddress] = useState("");
  const [sAvatar, setSAvatar] = useState();

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

  //  Create New Student:
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (sID === "") {
      setMessage({ error: true, msg: "Please enter a ID for the student!" });
      return;
    }

    if (sFirstname === "") {
      setMessage({
        error: true,
        msg: "Please enter a first name for the student!",
      });
      return;
    }

    if (sLastname === "") {
      setMessage({
        error: true,
        msg: "Please enter a last name for the student!",
      });
      return;
    }

    if (sMidname === "") {
      setMessage({
        error: true,
        msg: "Please enter a middle name for the student!",
      });
      return;
    }

    if (sEmail === "") {
      setMessage({
        error: true,
        msg: "Please enter an email address for the student!",
      });
      return;
    }

    const newStudent = {
      sID,
      sFirstname,
      sLastname,
      sMajor,
      sMidname,
      sEmail,
      sPassword,
      sGender,
      sPhone,
      sBirth,
      sAddress,
      sAvatar,
    };

    try {
      if (id !== undefined && id !== "") {
        await StudentDataServices.updateStudent(id, newStudent);
        setStudentId("");
        setMessage({ error: false, msg: "The Student updated successfully!" });
      } else {
        await StudentDataServices.createStudents(newStudent);
        setMessage({ error: false, msg: "New Student added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setSID("");
    setSFirstname("");
    setSLastname("");
    setSMidname("");
    setSEmail("");
    setSPhone("");
    setSBirth("");
    setSPhone("");
    setSAddress("");
    setSAvatar("");
    handleCloseModal();
    getStudents();
  };

  // Get Student Data from firestore:
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const data = await StudentDataServices.getAllStudents();
    setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // Delete Student:
  const handleDeleteStudent = async (id) => {
    await StudentDataServices.deleteStudent(id);
    getStudents();
  };

  //  Update Student:
  const handleUpdateStudent = async () => {
    setMessage("");
    try {
      const docSnap = await StudentDataServices.getStudent(id);
      setSID(docSnap.data().sID);
      setSFirstname(docSnap.data().sFirstname);
      setSLastname(docSnap.data().sLastname);
      setSMidname(docSnap.data().sMidname);
      setSEmail(docSnap.data().sEmail);
      setSPhone(docSnap.data().sPhone);
      setSMajor(docSnap.data().sMajor);
      setSPassword(docSnap.data().sPassword);
      setSAddress(docSnap.data().sAddress);
      setSBirth(docSnap.data().sBirth);
      setSGender(docSnap.data().sGender);
      setSAvatar(docSnap.data().sAvatar);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    getStudents();

    if (id !== undefined && id !== "") {
      handleUpdateStudent();
    }
  }, [id]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#FF9026",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#FEE9D7",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <StudentsWrapper>
      <div className="top">
        <h2>Students</h2>
        <i className="bx bx-plus" onClick={handleOpenModal} />
        <Modal open={openModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 900,
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
                }}
              >
                add new student
              </h2>
            </div>
            <div style={{ display: "flex" }} onSubmit={handleSubmit}>
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "16px 0 16px 16px",
                }}
              >
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "1px solid black",
                  }}
                  src={file ? URL.createObjectURL(file) : NoImg}
                  alt=""
                />
                <div style={{ width: "100%", marginTop: "32px" }}>
                  <label
                    htmlFor="file"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      justifyContent: "center ",
                    }}
                  >
                    Avatar: <DriveFolderUploadRoundedIcon />
                  </label>
                  <input
                    value={sAvatar}
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              {/* Student Info */}
              <div style={{ flex: 2, padding: "16px 0" }}>
                <form
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="text"
                      variant="outlined"
                      label="Student ID"
                      inputProps={{ maxLength: "5" }}
                      style={{ width: "100%" }}
                      value={sID}
                      onChange={(e) => setSID(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel style={{ color: "#FBB068" }}>
                        Major
                      </InputLabel>
                      <Select
                        label="Major"
                        displayEmpty
                        value={sMajor}
                        onChange={(e) => setSMajor(e.target.value)}
                      >
                        <MenuItem value="computing">Computing</MenuItem>
                        <MenuItem value="design">Design</MenuItem>
                        <MenuItem value="business">Business</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="text"
                      variant="outlined"
                      label="Student Last Name"
                      style={{ width: "100%" }}
                      value={sLastname}
                      onChange={(e) => setSLastname(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="email"
                      variant="outlined"
                      label="Email"
                      style={{ width: "100%" }}
                      value={sEmail}
                      onChange={(e) => setSEmail(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="text"
                      variant="outlined"
                      label="Student Middle Name"
                      style={{ width: "100%" }}
                      value={sMidname}
                      onChange={(e) => setSMidname(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="text"
                      variant="outlined"
                      label="Password"
                      style={{ width: "100%" }}
                      value={sPassword}
                      onChange={(e) => setSPassword(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="text"
                      variant="outlined"
                      label="Student First Name"
                      style={{ width: "100%" }}
                      value={sFirstname}
                      onChange={(e) => setSFirstname(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel style={{ color: "#FBB068" }}>
                        Gender
                      </InputLabel>
                      <Select
                        value={sGender}
                        label="Gender"
                        displayEmpty
                        onChange={(e) => setSGender(e.target.value)}
                      >
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="text"
                      variant="outlined"
                      label="Student Phone Number"
                      style={{ width: "100%" }}
                      value={sPhone}
                      onChange={(e) => setSPhone(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="date"
                      variant="outlined"
                      style={{ width: "100%" }}
                      value={sBirth}
                      onChange={(e) => setSBirth(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "91.5%" }}>
                    <TextField
                      type="text"
                      variant="outlined"
                      label="Student Address"
                      style={{ width: "100%" }}
                      value={sAddress}
                      onChange={(e) => setSAddress(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      width: "91.5%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      style={{ marginRight: "16px" }}
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      disableElevation
                      onClick={handleClickAlert(TransitionLeft)}
                      disabled={per !== null && per < 100}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>No.</StyledTableCell>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Avatar</StyledTableCell>
                <StyledTableCell>Fullname</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Major</StyledTableCell>
                <StyledTableCell>Gender</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((std, index) => {
                return (
                  <StyledTableRow key={std.id}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell>
                      {std.sMajor === "business"
                        ? "GBH"
                        : std.sMajor === "Computing"
                        ? "GCH"
                        : "GDH"}
                      {std.sID}
                    </StyledTableCell>
                    <StyledTableCell>null</StyledTableCell>
                    <StyledTableCell>
                      {std.sLastname} {std.sMidname} {std.sFirstname}
                    </StyledTableCell>
                    <StyledTableCell>{std.sEmail}</StyledTableCell>
                    <StyledTableCell style={{ textTransform: "capitalize" }}>
                      {std.sMajor}
                    </StyledTableCell>
                    <StyledTableCell style={{ textTransform: "capitalize" }}>
                      {std.sGender}
                    </StyledTableCell>
                    <StyledTableCell>{std.sAddress}</StyledTableCell>
                    <StyledTableCell style={{ display: "flex" }}>
                      <Button
                        style={{
                          marginRight: "8px",
                          backgroundColor: "#CCE5FF",
                          color: "#001E6C",
                        }}
                        onClick={(e) => handleOpenModal(getStudentId(std.id))}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{
                          marginRight: "8px",
                          backgroundColor: "#FF7272",
                          color: "#9B0000",
                        }}
                        onClick={(e) => handleDeleteStudent(std.id)}
                      >
                        Delete
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </StudentsWrapper>
  );
}
