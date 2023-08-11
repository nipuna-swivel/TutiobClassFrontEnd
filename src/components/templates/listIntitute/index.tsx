import InstituteTable from "@/components/organisms/InstituteTable";
import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
	fetchInstitutes,
	deleteInstituteById,
} from "@/features/tution/instituteSlice";

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
	return (
		<div>
			<InstituteTable institutes={institutes} />
		</div>
	);
}

export default ListInstitute;
