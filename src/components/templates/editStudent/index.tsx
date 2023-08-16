import React, { useEffect } from "react";
import { StudentForm } from "@/components/organisms";
import {
	editStudent,
	reSetUpdate,
	fetchStudentById,
} from "@/features/student/studentSlice";
import { useRouter, useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IStudent } from "@/types";

function EditStudentForm() {
	const router = useRouter();
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const studentDetails = useAppSelector((state) => state.student.student);
	const isUpdated = useAppSelector((state) => state.student.isUpdated);

	const initFetch = () => {
		return dispatch(fetchStudentById(id));
	};

	useEffect(() => {
		console.log("Student ID :", id);
		initFetch();
	}, [id]);

	console.log("studentDetails :", studentDetails);

	const updateStudent = (studentDetails: IStudent) => {
		dispatch(editStudent({ id, payload: studentDetails }));
	};

	useEffect(() => {
		if (isUpdated) {
			router.push("/dashboard/Students/list");
		}
		return () => {
			dispatch(reSetUpdate());
		};
	}, [isUpdated]);

	if (studentDetails) {
		return (
			<div>
				<StudentForm studentDetails={studentDetails} func={updateStudent} />
			</div>
		);
	} else {
		return( <></>)
	}

	
}

export default EditStudentForm;
