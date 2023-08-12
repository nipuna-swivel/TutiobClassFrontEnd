import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addNewInstitute, reSetAdd } from "@/features/tution/instituteSlice";
import { PaymentForm } from "@/components/organisms";
import { useRouter } from "next/navigation";

function AddInstitute() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const institutes = useAppSelector((state) => state.institute);
	const isAdded = useAppSelector((state) => state.institute.isAdded);
	const loadings = useAppSelector((state) => state.institute.loading);

	const saveInstitute = (data: {
		classLocation: string;
		day: string;
		time: string;
		fee: string;
	}) => {
		dispatch(
			addNewInstitute({
				classLocation: data.classLocation,
				day: data.day,
				time: data.time,
				fee: data.fee,
			})
		);
	};

	useEffect(() => {
		if (isAdded) {
			router.push("/dashboard/Tution/list");
		}
		return () => {
			dispatch(reSetAdd());
		};
	}, [isAdded]);

	return (
		<div>
			<PaymentForm func={saveInstitute} />
		</div>
	);
}

export default AddInstitute;