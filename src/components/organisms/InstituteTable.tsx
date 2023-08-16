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
import { IInstitute } from "@/types";
import Link from "next/link";

interface Props {
	institutes: IInstitute[];
	handleDeleteInstitute: (id: string) => void;
}

export default function InstituteTable({
	institutes,
	handleDeleteInstitute,
}: Props) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="right">Class Location</TableCell>
						<TableCell align="right">Day</TableCell>
						<TableCell align="right">Time</TableCell>
						<TableCell align="right">Unit Fee</TableCell>
						<TableCell align="right">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{institutes?.map((institute) => (
						<TableRow
							key={institute._id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component="th" align="right" scope="row">
								{institute.classLocation}
							</TableCell>
							<TableCell align="right">{institute.day}</TableCell>
							<TableCell align="right">{institute.time}</TableCell>
							<TableCell align="right">{institute.fee}</TableCell>

							<TableCell align="right">
								{" "}
								<IconButton aria-label="edit" color="primary">
									<Link 
                                     href={`/dashboard/Tution/edit/${institute._id}`}
                                    >
									<EditIcon />
									</Link>
								</IconButton>
								<IconButton
									aria-label="delete"
									color="secondary"
									onClick={() => handleDeleteInstitute(institute._id!)}>
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
