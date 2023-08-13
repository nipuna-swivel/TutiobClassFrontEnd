import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import PaymentsList from "@/components/organisms/PaymentsList";

const ListPayments = () => {
	const dispatch = useAppDispatch();
	const { payment } = useAppSelector((state) => state.payment);
	return (
		<div>
			<PaymentsList payment={payment} />
		</div>
	);
};

export default ListPayments;
