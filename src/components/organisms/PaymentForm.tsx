import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { IInstitute, IPayment } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
interface Props {
	paymentDetails: IPayment;
	func: (value: IInstitute) => void;
}
const schema = yup
	.object({
		studentNic: yup.string().required(),
		month: yup.string().required(),
		classLocation: yup.string().required(),
		amount: yup.string().required(),
	})
	.required();
type FormData = yup.InferType<typeof schema>;

export const PaymentForm = ({ paymentDetails, func }: Props) => {
	console.log("paymentData", paymentDetails);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<IPayment>({ resolver: yupResolver(schema) });
	const onSubmit: SubmitHandler<IPayment> = (data) => {
		func(data);
	};

	useEffect(() => {
		if (paymentDetails) {
			setValue("studentNic", paymentDetails.studentNic);
			setValue("month", paymentDetails.month);
			setValue("classLocation", paymentDetails.classLocation);
			setValue("amount", paymentDetails.amount);
		}
	}, [paymentDetails]);

	console.log(watch("studentNic"));
	return (
		<div>
			<Typography variant="h4">Payment Form</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack className="flex justify-center ml-10">
					<div className="p-3">
						<p className="text-rose-700 font-semibold">{errors.studentNic?.message}</p>

						<TextField
							{...register("studentNic")}
							required
							fullWidth
							sx={{ width: 600 }}
							label="NIC"
							id="outlined-required"
							size="small"
						/>
						<Button variant="outlined">
							<SearchIcon />
						</Button>
						{/* <IconButton aria-label="delete">
							<SearchIcon />
						</IconButton> */}
					</div>
					<div className="p-3">
						<p className="text-rose-700 font-semibold">
							{errors.month?.message}
						</p>
						<TextField
							required
							{...register("month")}
							label="Month"
							fullWidth
							sx={{ width: 800 }}
							id="outlined-required"
							size="small"
						/>
					</div>

					<div className="p-4">
						<p className="text-rose-700 font-semibold">
							{errors.classLocation?.message}
						</p>
						<TextField
							required
							{...register("classLocation")}
							label="Class Location"
							fullWidth
							sx={{ width: 800 }}
							id="outlined-required"
							size="small"
						/>
					</div>

					<div className="p-4">
						<p className="text-rose-700 font-semibold">
							{errors.amount?.message}
						</p>
						<TextField
							required
							{...register("amount")}
							label="Amount"
							fullWidth
							sx={{ width: 800 }}
							id="outlined-required"
							size="small"
						/>
					</div>
				</Stack>
				<div>
					<Stack direction="row" spacing={2} className="m-3 justify-end mr-80">
						<Button
							variant="outlined"
							startIcon={<DeleteIcon />}
							onClick={() => {
								router.push("/dashboard/Payments/list");
							}}>
							Delete
						</Button>
						<Button variant="contained" type="submit" endIcon={<SaveIcon />}>
							Save
						</Button>
					</Stack>
				</div>
			</form>
		</div>
	);
};
