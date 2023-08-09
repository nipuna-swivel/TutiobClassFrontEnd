import React from "react";
import { StudentForm } from "@/components/organisms";
import {
	editStudent,
	reSetUpdate,
	fetchStudentById,
} from "@/features/student/studentSlice";
import { useRouter,useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";

function EditStudentForm() {
	const { studentId } = useParams();
	//let studentId = query.id as string;
	const router = useRouter();

	const student = useAppSelector((state) => state.student.student);
	const dispatch = useAppDispatch();
	const isUpdated = useAppSelector((state) => state.student.isUpdated);
	const isLoading = useAppSelector((state) => state.student.loading);
	const error = useAppSelector((state) => state.student.error);

 // console.log("Student query edit",query);

	const initFetch = () => {
		return dispatch(fetchStudentById(studentId));
	};

	return (
		<div>
			<StudentForm />
		</div>
	);
}

export default EditStudentForm;
