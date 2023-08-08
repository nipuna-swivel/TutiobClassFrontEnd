import { axios } from "@/api";
import { IStudentState } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IStudentState = {
  students: [],
  student: null,
  loading: false,
  error: null,
  isAdded: false,
};

export const fetchStudents = createAsyncThunk(
  "student/fetchStudents",
  async () => {
    try {
      const { data } = await axios.get("/student");
      return data;
    } catch (error) {}
  }
);

export const fetchStudentById = createAsyncThunk(
  "student/fetchStudentById",
  async (studentId: string) => {
    try {
      const { data } = await axios.get(`/students/${studentId}`);
      return data;
    } catch (error) {}
  }
);

export const addNewStudent = createAsyncThunk(
  "student/addNewStudent",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/student", payload);
      return data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const editStudent = createAsyncThunk(
  "student/updateStudent",
  async (params: { id: string; payload: any }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/students/${params.id}`, params.payload);
      return data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const deleteStudentById = createAsyncThunk(
  "craft/deleteStudentById",
  async (studentId: string, { rejectWithValue }) => {
    try {
      await axios.delete(`/students/${studentId}`);
      return studentId;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

const craftSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get  all students information
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state) => {
        state.loading = false;
      });

    //get student by id
    builder
      .addCase(fetchStudentById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudentById.fulfilled, (state, action) => {
        state.loading = false;
        state.student = action.payload;
      })
      .addCase(fetchStudentById.rejected, (state) => {
        state.loading = false;
      });

    //add student
    builder
      .addCase(addNewStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.isAdded=true;
        state.students = [...state.students, action.payload];
      })
      .addCase(addNewStudent.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });

    //update student
    builder
      .addCase(editStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(editStudent.fulfilled, (state, action) => {
        state.loading = false;
        const students = state.students.filter(
          (student) => student._id !== action.payload?._id
        );
        state.students = [...students, action.payload];
      })
      .addCase(editStudent.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });

    //delete student
    builder
      .addCase(deleteStudentById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStudentById.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.filter(
          (student) => student._id !== action.payload
        );
      })
      .addCase(
        deleteStudentById.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default craftSlice.reducer;