import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import StudentTable from "@/components/organisms/DataTable";
import { fetchStudents } from "@/features/student/studentSlice";

function ListStudent() {
	const dispatch = useAppDispatch();
	const { students } = useAppSelector((state) => state.student);

	const initFetch = useCallback(() => {
		return dispatch(fetchStudents());
	}, [dispatch]);

	useEffect(() => {
		initFetch();
	}, [initFetch]);
	return (
		<div>
			<StudentTable students={students} />
		</div>
	);
}

export default ListStudent;
