import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addNewPayment, reSetAdd } from "@/features/payment/paymentSlice";
import { PaymentForm } from "@/components/organisms";
import { useRouter } from "next/navigation";

function AddInstitute() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const payments = useAppSelector((state) => state.payment.payment);
	const isAdded = useAppSelector((state) => state.payment.isAdded);
	const loadings = useAppSelector((state) => state.payment.loading);

	const date = new Date();

	const addPayment = (data: {
		studentNic: string;
		month: string;
		classLocation: string;
		amount: string;
		date:Date;
	}) => {
		dispatch(
			addNewPayment({
				studentNic: data.studentNic,
				month: data.month,
				classLocation: data.classLocation,
				amount: data.amount,
				date : date.getDate(),
			})
		);
	};

	useEffect(() => {
		if (isAdded) {
			router.push("/dashboard/Payments/list");
		}
		return () => {
			dispatch(reSetAdd());
		};
	}, [isAdded]);

	return (
		<div>
			<PaymentForm func={addPayment} />
		</div>
	);
}

export default AddInstitute;
