import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import PaymentsList from "@/components/organisms/PaymentsList";
import { fetchPayments } from "@/features/payment/paymentSlice";

const ListPayments = () => {
	const dispatch = useAppDispatch();
	const { payments } = useAppSelector((state) => state.payment);
	const initFetch = useCallback(() => {
		return dispatch(fetchPayments());
	}, [dispatch]);

	console.log("payment", payments);

	useEffect(() => {
		initFetch();
	}, [initFetch]);
	return (
		<div>
			<PaymentsList payments={payments} />
		</div>
	);
};

export default ListPayments;
