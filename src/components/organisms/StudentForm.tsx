import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { IStudent } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Props {
	studentData: IStudent;
	func: (value: IStudent) => void;
}
const schema = yup
	.object({
		name: yup.string().required(),
		nic: yup.string().required(),
		school: yup.string().required(),
		contactNo: yup.string().required(),
		classLocation: yup.string().required(),
	})
	.required();
type FormData = yup.InferType<typeof schema>;

export const StudentForm = ({ studentData, func }: Props) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IStudent>({ resolver: yupResolver(schema) });
	const onSubmit: SubmitHandler<IStudent> = (data) => {
		func(data);
	};

	console.log(watch("name"));
	return (
		<div>
			<Typography variant="h4">Students Form</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack className="flex justify-center ml-10">
					<div className="p-3">
						<p className="text-rose-700 font-semibold">
							{errors.name?.message}
						</p>
						<TextField
							{...register("name")}
							required
							fullWidth
							sx={{ width: 800 }}
							label="Name"
							id="outlined-required"
							size="small"
						/>
					</div>
					<div className="p-3">
						<p className="text-rose-700 font-semibold">{errors.nic?.message}</p>
						<TextField
							required
							{...register("nic")}
							label="NIC"
							fullWidth
							sx={{ width: 800 }}
							id="outlined-required"
							size="small"
						/>
					</div>

					<div className="p-4">
						<p className="text-rose-700 font-semibold">
							{errors.school?.message}
						</p>
						<TextField
							required
							{...register("school")}
							label="School"
							fullWidth
							sx={{ width: 800 }}
							id="outlined-required"
							size="small"
						/>
					</div>

					<div className="p-4">
						<p className="text-rose-700 font-semibold">
							{errors.contactNo?.message}
						</p>
						<TextField
							required
							{...register("contactNo")}
							label="Contact Number(Mobile)"
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
							label="Class Location (Institution)"
							fullWidth
							sx={{ width: 800 }}
							id="outlined-required"
							size="small"
						/>
					</div>
				</Stack>
				<div>
					<Stack direction="row" spacing={2} className="m-3 justify-end mr-80">
						<Button variant="outlined" startIcon={<DeleteIcon />}>
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
