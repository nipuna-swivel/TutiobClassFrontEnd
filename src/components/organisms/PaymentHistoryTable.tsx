//payment history for each single student.import React from "react";
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
import { IPayment } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
	paymentDataById: IPayment[];
	// handleDeleteStudent: (id: string) => void;
}

export default function PaymentHistoryTable({ paymentDataById }: Props) {
	console.log("PaymentsList",paymentDataById)
	const router = useRouter();
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>NIC</TableCell>
						<TableCell align="right">Month</TableCell>
						<TableCell align="right">Class Location</TableCell>
						<TableCell align="right">Amount</TableCell>
						<TableCell align="right"></TableCell>
						<TableCell align="right"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{paymentDataById?.map((payment:any) => (
						<TableRow
							key={payment._id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component="th" scope="row">
								{payment.studentNic}
							</TableCell>
							<TableCell align="right">{payment?.month}</TableCell>
							<TableCell align="right">{payment?.classLocation}</TableCell>
							<TableCell align="right">{payment?.amount}</TableCell>
							<TableCell align="right">{payment?.date}</TableCell>
							<TableCell align="right">
								{" "}
								
								{/* <IconButton aria-label="edit" color="primary">
									<Link href={`/dashboard/Students/edit/${payment._id}`}>
										<EditIcon />
									</Link>
								</IconButton>
								<IconButton
									aria-label="delete"
									color="secondary"
									// onClick={() => handleDeleteStudent(payment._id)}
									>
									<DeleteIcon />
								</IconButton> */}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
