import React, { useState, useEffect  } from 'react'
import LecturersWrapper from './lecturers.style'
import { styled } from '@mui/material/styles'
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
  Paper
} from '@mui/material'
import NoImg from '../../assets/images/noImg.jpeg'
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded'
import LecturerDataServices from './lecturers.services'
// import { db, auth, storage } from '../../firebase/firebase-config'
// import { setDoc, doc, collection, addDoc, serverTimestamp } from 'firebase/firestore'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function Lecturers({ getLecturerId, id, setLecturerId }) {

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const [file, setFile] = useState('')
  // const [data, setData] = useState({})

  const [lID, setLID] = useState('')
  const [lMajor, setLMajor] = useState('computing')
  const [lFirstname, setLFirstname] = useState('')
  const [lLastname, setLLastname] = useState('')
  const [lMidname, setLMidname] = useState('')
  const [lEmail, setLEmail] = useState('@gre.ac.uk')
  const [lGender, setLGender] = useState('male')
  const [lPhone, setLPhone] = useState('')

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

  //  Create New Lecturer:
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (lID === "") {
      setMessage({ error: true, msg: "Please enter a ID for the lecturer!" });
      return;
    }

    if (lFirstname === "") {
      setMessage({ error: true, msg: "Please enter a first name for the lecturer!" });
      return;
    }

    if (lLastname === "") {
      setMessage({ error: true, msg: "Please enter a last name for the lecturer!" });
      return;
    }

    if (lMidname === "") {
      setMessage({ error: true, msg: "Please enter a middle name for the lecturer!" });
      return;
    }

    if (lEmail === "") {
      setMessage({ error: true, msg: "Please enter an email address for the lecturer!" });
      return;
    }

    const newLecturer = {
      lID,
      lFirstname,
      lLastname,
      lMajor,
      lMidname,
      lEmail,
      lGender,
      lPhone,
    };

    try {
      if (id !== undefined && id !== "") {
        await LecturerDataServices.updateLecturer(id, newLecturer);
        setLecturerId("");
        setMessage({ error: false, msg: "The Lecturer updated successfully!" });
      } else {
        await LecturerDataServices.createLecturers(newLecturer);
        setMessage({ error: false, msg: "New Lecturer added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setLID("");
    setLFirstname("");
    setLLastname("");
    setLMidname("");
    setLEmail("");
    setLPhone("");
    setLPhone("");
    handleCloseModal();
    getLecturers();
  }

  // Get lecturer Data from firestore:
  const [lecturers, setLecturers] = useState([]);

  const getLecturers = async () => {
    const data = await LecturerDataServices.getAllLecturers();
    setLecturers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // Delete lecturer:
  const handleDeleteLecturer = async (id) => {
    await LecturerDataServices.deleteLecturer(id);
    getLecturers();
  };

  //  Update lecturer:
  const handleUpdateLecturer = async () => {
    setMessage("");
    try {
      const docSnap = await LecturerDataServices.getLecturer(id);
      setLID(docSnap.data().lID);
      setLFirstname(docSnap.data().lFirstname);
      setLLastname(docSnap.data().lLastname);
      setLMidname(docSnap.data().lMidname);
      setLEmail(docSnap.data().lEmail);
      setLPhone(docSnap.data().lPhone);
      setLMajor(docSnap.data().lMajor);
      setLGender(docSnap.data().lGender);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    getLecturers();

    if (id !== undefined && id !== "") {
      handleUpdateLecturer();
    }
  }, [id])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#FF9026',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#FEE9D7',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <LecturersWrapper>
      <div className="top">
        <h2>Lecturers</h2>
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
                add new lecturer
              </h2>
            </div>
            <div 
              style={{ display: "flex" }}
              onSubmit={handleSubmit}
            >
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
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              {/* lecturer Info */}
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
                      label="Lecturer ID"
                      inputProps={{ maxLength:'5' }}
                      style={{ width: "100%" }}
                      value={lID}
                      onChange={(e) => setLID(e.target.value)}
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
                        value={lMajor}
                        onChange={(e) => setLMajor(e.target.value)}
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
                      label="Lecturer Last Name"
                      style={{ width: "100%" }}
                      value={lLastname}
                      onChange={(e) => setLLastname(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="email"
                      variant="outlined"
                      label="Email"
                      style={{ width: "100%" }}
                      value={lEmail}
                      onChange={(e) => setLEmail(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="text"
                      variant="outlined"
                      label="Lecturer Middle Name"
                      style={{ width: "100%" }}
                      value={lMidname}
                      onChange={(e) => setLMidname(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel style={{ color: "#FBB068" }}>
                        Gender
                      </InputLabel>
                      <Select 
                        value={lGender} 
                        label="Gender" 
                        displayEmpty
                        onChange={(e) => setLGender(e.target.value)}
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
                      label="Lecturer First Name"
                      style={{ width: "100%" }}
                      value={lFirstname}
                      onChange={(e) => setLFirstname(e.target.value)}
                    />
                  </div>
                                
                  <div style={{ width: "40%" }}>
                    <TextField
                      type="text"
                      inputProps={{ maxLength:'10' }}
                      variant="outlined"
                      label="Lecturer Phone Number"
                      style={{ width: "100%" }}
                      value={lPhone}
                      onChange={(e) => setLPhone(e.target.value)}
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
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lecturers.map((ltr, index) => {
            return (
            <StyledTableRow key={ltr.id}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>{ltr.lMajor === 'business' ? 'GBH' : ltr.lMajor === 'Computing' ? 'GCH' : 'GDH'}{ltr.lID}</StyledTableCell>
              <StyledTableCell>null</StyledTableCell>
              <StyledTableCell>{ltr.lLastname} {ltr.lMidname} {ltr.lFirstname}</StyledTableCell>
              <StyledTableCell>{ltr.lEmail}</StyledTableCell>
              <StyledTableCell style={{textTransform: "capitalize"}}>{ltr.lMajor}</StyledTableCell>
              <StyledTableCell style={{textTransform: "capitalize"}}>{ltr.lGender}</StyledTableCell>
  
              <StyledTableCell style={{ display: "flex" }}>
                <Button 
                  style={{ 
                    marginRight: '8px', 
                    backgroundColor: '#CCE5FF', 
                    color: '#001E6C' 
                  }}
                  onClick={e => handleOpenModal(getLecturerId(ltr.id))}
                >
                  Edit
                </Button>
                <Button 
                  style={{ 
                    marginRight: '8px', 
                    backgroundColor: '#FF7272', 
                    color: '#9B0000' 
                  }}
                  onClick={e => handleDeleteLecturer(ltr.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </LecturersWrapper>
  );
}