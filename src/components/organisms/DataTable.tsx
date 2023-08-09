import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import PaymentIcon from "@mui/icons-material/Payment";
import { IStudent } from "@/types";

interface Props {
	students: IStudent[];
	handleDeleteStudent: (id: string) => void;
}

export default function StudentTable({ students, handleDeleteStudent }: Props) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="right">NIC</TableCell>
						<TableCell align="right">School</TableCell>
						<TableCell align="right">ContactNo</TableCell>
						<TableCell align="right">Class-Location</TableCell>
						<TableCell align="right">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{students?.map((student) => (
						<TableRow
							key={student._id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component="th" scope="row">
								{student.name}
							</TableCell>
							<TableCell align="right">{student.nic}</TableCell>
							<TableCell align="right">{student.school}</TableCell>
							<TableCell align="right">{student.contactNo}</TableCell>
							<TableCell align="right">{student.classLocation}</TableCell>
							<TableCell align="right">
								{" "}
								<IconButton aria-label="edit" color="primary">
									<PaymentIcon />
								</IconButton>
								<IconButton aria-label="edit" color="primary">
									<EditIcon />
								</IconButton>
								<IconButton
									aria-label="delete"
									color="secondary"
									onClick={() => handleDeleteStudent(student._id)}>
									<DeleteIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
