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
