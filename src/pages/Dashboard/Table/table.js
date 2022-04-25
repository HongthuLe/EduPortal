import React from "react"
import { TableContainer, Table, TableHead, TableRow,
  TableCell, TableBody, Paper } from "@mui/material"
import { TableItems } from "../../../assets/data/Dashboard/dashboard"
import TableWrapper from "./table.style"

export default function TableDashboard() {
  return (
    <TableWrapper className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>avatar</TableCell>
              <TableCell>id</TableCell>
              <TableCell>fullname</TableCell>
              <TableCell>email</TableCell>
              <TableCell>major</TableCell>
              <TableCell>course&nbsp;(s)</TableCell>
              <TableCell>gender</TableCell>
              <TableCell align="center">birth</TableCell>
              <TableCell>address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TableItems.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <div className="cellWrapper">
                    <img src={student.ava} alt="" className="avatar" />
                  </div>
                </TableCell>
                <TableCell>
                  {student.major === "Design"
                    ? "GDH"
                    : student.major === "Computing"
                    ? "GCH"
                    : "GBH"}
                  {student.sId}
                </TableCell>
                <TableCell>
                  {student.sLastname}&nbsp;{student.sMidllename}&nbsp;
                  {student.sFirstname}
                </TableCell>
                <TableCell>
                  {student.sFirstname.charAt(0)}
                  {student.sLastname.charAt(0)}
                  {student.sId}
                  {student.email}
                </TableCell>
                <TableCell>{student.major}</TableCell>
                <TableCell align="center">{student.courses}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell align="center">{student.birth}</TableCell>
                <TableCell>{student.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  )
}
