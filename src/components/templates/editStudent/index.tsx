import React, { useEffect } from "react";
import { StudentForm } from "@/components/organisms";
import {
	editStudent,
	reSetUpdate,
	fetchStudentById,
} from "@/features/student/studentSlice";
import { useRouter, useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";

function EditStudentForm() {
	const router = useRouter();
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const studentDetails = useAppSelector((state) => state.student.student);
	const isUpdated = useAppSelector((state) => state.student.isUpdated);
	const isLoading = useAppSelector((state) => state.student.loading);
	const error = useAppSelector((state) => state.student.error);

	const initFetch = () => {
		return dispatch(fetchStudentById(id));
	};

	useEffect(() => {
		console.log("Student ID :", id);
		initFetch();
	}, [id]);

	console.log("studentDetails :", studentDetails);

	return (
		<div>
			<StudentForm studentDetails={studentDetails}/>
		</div>
	);
}

export default EditStudentForm;
