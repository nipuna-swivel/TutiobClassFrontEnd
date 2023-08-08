import React, { useState, useEffect, useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchStudents } from "@/features/student/studentSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number
) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
	const dispatch = useAppDispatch();
	const { students } = useAppSelector((state) => state.student);

	const initFetch = useCallback(() => {
		return dispatch(fetchStudents());
	}, [dispatch]);

	useEffect(() => {
		initFetch();
	}, [initFetch]);

	console.log(students);

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
					{students.map((student) => (
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
                <IconButton aria-label="edit"  color="primary">
									<EditIcon />
								</IconButton>
								<IconButton aria-label="delete" color="secondary">
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
