import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

export const StudentForm = () => {
	return (
		<div>
			<Typography variant="h4">Students Form</Typography>
			<form>
				<Stack className="flex justify-center">
					<div className="p-3">
						<TextField
							required
							label="Name"
							id="outlined-required"
							size="small"
						/>
					</div>
					<div className="p-3">
						<TextField
							required
							label="NIC"
							id="outlined-required"
							size="small"
						/>
					</div>

					<div className="p-4">
						<TextField
							required
							label="School"
							id="outlined-required"
							size="small"
						/>
					</div>

					<div className="p-4">
						<TextField
							required
							label="Contact Number(Mobile)"
							id="outlined-required"
							size="small"
						/>
					</div>

					<div className="p-4">
						<TextField
							required
							label="Class Location (Institution)"
							id="outlined-required"
							size="small"
						/>
					</div>
				</Stack>
				<div>
					<Stack direction="row" spacing={2} className="m-3 justify-end">
						<Button variant="outlined" startIcon={<DeleteIcon />}>
							Delete
						</Button>
						<Button variant="contained" endIcon={<SaveIcon />}>
							Send
						</Button>
					</Stack>
				</div>
			</form>
		</div>
	);
};
