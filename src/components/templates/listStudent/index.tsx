import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import StudentTable from "@/components/organisms/DataTable";
import { fetchStudents,deleteStudentById } from "@/features/student/studentSlice";

interface Props{
	handleDeleteStudent: () => void
}

function ListStudent() {
	const dispatch = useAppDispatch();
	const { students } = useAppSelector((state) => state.student);

	const initFetch = useCallback(() => {
		return dispatch(fetchStudents());
	}, [dispatch]);

	useEffect(() => {
		initFetch();
	}, [initFetch]);

const handleDeleteStudent = (id:string) => {
	try {
		dispatch(deleteStudentById(id));
	} catch (error) {
		console.log("error in deleting employee", error);
	}
};

	return (
		<div>
			<StudentTable students={students} handleDeleteStudent={handleDeleteStudent}/>
		</div>
	);
}

export default ListStudent;
