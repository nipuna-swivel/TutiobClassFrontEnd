import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addNewStudent ,reSetAdd} from "@/features/student/studentSlice";
import { StudentForm } from "@/components/organisms";

import { useRouter } from 'next/navigation'

function AddStudent() {
    const router = useRouter();
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

	useEffect(() => {
		if (isAdded) {
			router.push("/dashboard/Students");
		}
		return () => {
			dispatch(reSetAdd());
		};
	}, [isAdded]);

	return (
		<div>
			<StudentForm func={ saveStudent } />
		</div>
	);
}

export default AddStudent;
