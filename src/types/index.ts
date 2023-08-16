export interface IStudent {
	_id?: string;
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

export interface IInstitute {
	_id?: string;
	classLocation: string;
	day: string;
	time: string;
	fee: string;
}

export interface IInstituteState {
	institutes: IInstitute[];
	institute: IInstitute | null;
	loading: boolean;
	error: string | null;
	isAdded: boolean;
	isUpdated: boolean;
	handleDeleteInstitute: () => void;
}

export interface IPayment {
	_id?: string;
	studentNic: string;
	month: string;
	classLocation: string;
	amount: string;
	date?: Date;
}

export interface IPaymentState {
	payments: IPayment[];
	payment: IPayment | null;
	paymentDataById: IPayment[];
	loading: boolean;
	error: string | null;
	isAdded: boolean;
	isUpdated: boolean;
}

export interface IAuth{
	usernames: string;
	password: string;
}

export interface IAuthState{
	loading: boolean;
	accessToken: string|null;
	isAuthenticated: boolean;
	error: string|null;
}