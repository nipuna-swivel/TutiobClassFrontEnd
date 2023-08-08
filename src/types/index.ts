export interface ICraft {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    stock: number;
  }

  export interface ICraftState {
    crafts: ICraft[];
    craft: ICraft | null;
    loading: boolean;
    error: string | null;
  }
  
  export interface ICartItem extends ICraft {
    quantity: number;
  }
  
  export interface ICartState {
    cartItems: ICartItem[];
    totalPrice: number;
  }

  export interface IStudent{
    _id: string;
    name: string;
    nic: string;
    school: string;
    contactNo: string;
    classLocation: string;
  }

  export interface IStudentState{
    students: IStudent[];
    student: IStudent|null;
    loading: boolean;
    error:string|null;
    isAdded: boolean;
    isUpdated: boolean;
  }
  