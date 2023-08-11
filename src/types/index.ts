export interface IStudent {
	_id: string;
	name: string;
	nic: string;
	school: string;
	contactNo: string;
	classLocation: string;
}

export interface IStudentState {
	students: IStudent[];
	student: IStudent | null;
	loading: boolean;
	error: string | null;
	isAdded: boolean;
	isUpdated: boolean;
	handleDeleteStudent: () => void;
}

export interface IInstitute{
	_id: string;
	classLocation: string;
	day: string;
	time: string;
	fee: string;
}

export interface IInstituteState{
	institutes:IInstitute[];
	institute:IInstitute|null;
	loading: boolean;
	error:string|null;
	isAdded: boolean;
	isUpdated: boolean;
	handleDeleteInstitute:()=>void;


}

export interface IPayment {
	_id:string;

}

export interface IPaymentState{

}