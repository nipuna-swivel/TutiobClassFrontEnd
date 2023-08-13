"use client";
import React from "react";
import listPayments from "@/components/templates/listPayment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

function PaymentList() {
	const router = useRouter();
	return (
		<div>
			<div className="flex flex-row justify-start ">
				<div className="basis-1/8">
					{" "}
					<Typography variant="h3" >
						Payment History
					</Typography>
				</div>{" "}
				<div className="basis-1/8 ">
					<IconButton
						aria-label="add"
						color="primary"
						className="basis-1/4"
						onClick={() => router.push("/dashboard/Payments/add")}>
						<PersonAddIcon />
					</IconButton>
				</div>
			</div>

			<listPayments />
		</div>
	);
}

export default PaymentList;