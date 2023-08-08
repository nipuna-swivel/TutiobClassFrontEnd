import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addNewStudent } from "@/features/student/studentSlice";
import { StudentForm } from "@/components/organisms";

function AddStudent() {
	const dispatch = useAppDispatch();
	const students = useAppSelector((state) => state.student);
	const isAdded = useAppSelector((state) => state.student.isAdded);
	const loadings = useAppSelector((state) => state.student.loading);

	const saveStudent = (data: {
		name: string;
		nic: string;
		school: string;
		contactNo: string;
		classLocation: string;
	}) => {
		dispatch(
			addNewStudent({
				name: data.name,
				nic: data.nic,
				school: data.school,
				contactNo: data.contactNo,
				classLocation: data.classLocation,
			})
		);
	};
	return (
		<div>
			<StudentForm />
		</div>
	);
}

export default AddStudent;
