import React, { useEffect } from "react";
import PaymentHistoryTable from "@/components/organisms/PaymentHistoryTable";
import {	
	
	fetchPaymentByNIC,
} from "@/features/payment/paymentSlice";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";


function PaymentHistory() {
  

	const  {studentNic}  = useParams();
	const dispatch = useAppDispatch();
    const  {paymentDataById}  = useAppSelector((state) => state.payment.paymentDataById);
	

 

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