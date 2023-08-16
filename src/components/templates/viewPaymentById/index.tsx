import React, { useEffect } from "react";
import PaymentHistoryTable from "@/components/organisms/PaymentHistoryTable";
import {	
	reSetUpdate,
	fetchPaymentByNIC,
} from "@/features/payment/paymentSlice";
import { useRouter, useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IPaymentState } from "@/types";

function PaymentHistory() {
  
	const router = useRouter();
	const  {studentNic}  = useParams();
	const dispatch = useAppDispatch();
    const  {paymentDataById}  = useAppSelector((state) => state.payment.paymentDataById);
	const isUpdated = useAppSelector((state) => state.payment.isUpdated);

    console.log("========studentNic====: " + studentNic)
	console.log("---------------------",paymentDataById)

	const initFetch = () => {
		return dispatch(fetchPaymentByNIC(studentNic));
	};

	useEffect(() => {
		console.log("Student ID :", studentNic);
		initFetch();
	}, [studentNic]);

	console.log("studentDetails :", paymentDataById);

	

	return (
		<div>
			<PaymentHistoryTable paymentDataById={paymentDataById}  />
		</div>
	);
}

export default PaymentHistory;