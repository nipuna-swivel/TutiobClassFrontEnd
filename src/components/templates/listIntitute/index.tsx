import InstituteTable from "@/components/organisms/InstituteTable";
import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
	fetchInstitutes,
	deleteInstituteById,
} from "@/features/tution/instituteSlice";

interface Props {
	handleDeleteInstitute: () => void;
}

function ListInstitute() {
	const dispatch = useAppDispatch();
	const { institutes } = useAppSelector((state) => state.institute);
	const initFetch = useCallback(() => {
		return dispatch(fetchInstitutes());
	}, [dispatch]);

	console.log("Institutes", institutes);

	useEffect(() => {
		initFetch();
	}, [initFetch]);

	const handleDeleteInstitute = (id: string) => {
		try {
			dispatch(deleteInstituteById(id));
		} catch (error) {
			console.log("error in deleting employee", error);
		}
	};
	return (
		<div>
			<InstituteTable institutes={institutes} handleDeleteInstitute={handleDeleteInstitute}   />
		</div>
	);
}

export default ListInstitute;
