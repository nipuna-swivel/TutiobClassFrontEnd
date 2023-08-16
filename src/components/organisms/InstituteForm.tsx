import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { IInstitute } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
interface Props {
	instituteDetails: IInstitute;
	func: (value: IInstitute) => void;
}
const schema = yup
	.object({
		classLocation: yup.string().required(),
		day: yup.string().required(),
		time: yup.string().required(),
		fee: yup.string().required(),
	})
	.required();
type FormData = yup.InferType<typeof schema>;

export const InstituteForm = ({ instituteDetails, func }: Props) => {
	console.log("studentData", instituteDetails);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<IInstitute>({ resolver: yupResolver(schema) }); 
	const onSubmit: SubmitHandler<IInstitute> = (data) => {
		func(data);
	};

	useEffect(() => {
		if (instituteDetails) {
			setValue("classLocation", instituteDetails.classLocation);
			setValue("day", instituteDetails.day);
			setValue("time", instituteDetails.time);
			setValue("fee", instituteDetails.fee);
		}
	}, [instituteDetails]);

	console.log(watch("classLocation"));
	return (
		<div>
			<Typography variant="h4">Institute Form</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack className="flex justify-center ml-10">
					<div className="p-3">
						<p className="text-rose-700 font-semibold">
							{errors.classLocation?.message}
						</p>
						<TextField
							{...register("classLocation")}
							required
							fullWidth
							sx={{ width: 800 }}
							label="Institute Name"
							id="outlined-required"
							size="small"
						/>
					</div>
					<div className="p-3">
						<p className="text-rose-700 font-semibold">{errors.day?.message}</p>
						<TextField
							required
							{...register("day")}
							label="Day"
							fullWidth
							sx={{ width: 800 }}
							id="outlined-required"
							size="small"
						/>
					</div>

					<div className="p-4">
						<p className="text-rose-700 font-semibold">
							{errors.time?.message}
						</p>
						<TextField
							required
							{...register("time")}
							label="Time"
							fullWidth
							sx={{ width: 800 }}
							id="outlined-required"
							size="small"
						/>
					</div>

					<div className="p-4">
						<p className="text-rose-700 font-semibold">{errors.fee?.message}</p>
						<TextField
							required
							{...register("fee")}
							label="Class Fees"
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
								router.push("/dashboard/Tution/list");
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
