import React, { useEffect } from "react";
import { InstituteForm} from "@/components/organisms";
import {
	editInstitute,
	reSetUpdate,
	fetchInstituteById,
} from "@/features/tution/instituteSlice";
import { useRouter, useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IInstitute } from "@/types";

function EditInstituteForm() {
	const router = useRouter();
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const instituteDetails = useAppSelector((state) => state.institute.institute);
	const isUpdated = useAppSelector((state) => state.institute.isUpdated);

	const initFetch = () => {
		return dispatch(fetchInstituteById(id));
	};

	useEffect(() => {
		console.log("Student ID :", id);
		initFetch();
	}, [id]);

	console.log("instituteDetails :", instituteDetails);

	const updateInstitute = (instituteDetails: IInstitute) => {
		dispatch(editInstitute({ id, payload: instituteDetails }));
	};

	useEffect(() => {
		if (isUpdated) {
			router.push("/dashboard/Tution/list");
		}
		return () => {
			dispatch(reSetUpdate());
		};
	}, [isUpdated]);

	return (
		<div>
			<InstituteForm instituteDetails={instituteDetails} func={updateInstitute} />
		</div>
	);
}

export default EditInstituteForm;