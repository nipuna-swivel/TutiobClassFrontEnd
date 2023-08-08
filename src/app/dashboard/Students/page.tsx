"use client";
import React from "react";
import StudentTable from "@/components/organisms/DataTable";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function Students() {
	return (
		<div>
			<div className="flex flex-row ">
				<div className="basis-1/2">Dashboard-Students</div>{" "}
				<div className="basis-1/4">
					<IconButton aria-label="add" color="primary" className="basis-1/4">
						<PersonAddIcon />
					</IconButton>
				</div>
			</div>

			<StudentTable />
		</div>
	);
}

export default Students;
