"use client";
import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import ListInstitute from "@/components/templates/listIntitute";

function TutionClassList() {
	const router = useRouter();
	return (
		<div>
			<div className="flex flex-row justify-start ">
				<div className="basis-1/8">
					{" "}
					<Typography variant="h3">Institutions</Typography>
				</div>{" "}
				<div className="basis-1/8 ">
					<IconButton
						aria-label="add"
						color="primary"
						className="basis-1/4"
						// onClick={() => router.push("/dashboard/Students/add")}
					>
						<PersonAddIcon />
					</IconButton>
				</div>
			</div>
			<ListInstitute />
		</div>
	);
}

export default TutionClassList;
