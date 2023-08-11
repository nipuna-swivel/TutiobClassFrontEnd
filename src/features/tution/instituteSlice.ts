import { axios } from "@/api";
import { IInstituteState } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IInstituteState = {
  institutes: [],
  institute: null,
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
  handleDeleteInstitute: function (): void
  {
    throw new Error( "Function not implemented." );
  }
};

export const fetchInstitutes = createAsyncThunk(
  "institute/fetchStudents",
  async () => {
    try {
      const { data } = await axios.get("/tutionClass");
      return data;
    } catch (error) {}
  }
);

export const fetchInstituteById = createAsyncThunk(
  "institute/fetchInstituteById",
  async (instituteId: string) => {
    try {
      const { data } = await axios.get(`/tutionClass/${instituteId}`);
      return data;
    } catch (error) {}
  }
);

export const addNewInstitute = createAsyncThunk(
  "institute/addNewInstitute",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/tutionClass", payload);
      return data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const editInstitute = createAsyncThunk(
  "institute/editInstitute",
  async (params: { id: string; payload: any }, { rejectWithValue }) => {
   console.log("parameters", params);
    try {
      const { data } = await axios.put(`/tutionClass/${params.id}`, params.payload);
      return data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const deleteInstituteById = createAsyncThunk(
  "institute/deleteInstituteById",
  async (instituteId: string, { rejectWithValue }) => {
    try {
      await axios.delete(`/tutionClass/${instituteId}`);
      return instituteId;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

const instituteSlice = createSlice({
  name: "institute",
  initialState,
  reducers: {
    reSetAdd: (state) => {
			state.isAdded = false;
		},
    reSetUpdate: (state) => {
			state.isUpdated = false;
		},
  },
  extraReducers: (builder) => {
    //get  all institute information
    builder
      .addCase(fetchInstitutes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInstitutes.fulfilled, (state, action) => {
        state.loading = false;
        state.institutes = action.payload;
      })
      .addCase(fetchInstitutes.rejected, (state) => {
        state.loading = false;
      });

    //get institute by id
    builder
      .addCase(fetchInstituteById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInstituteById.fulfilled, (state, action) => {
        state.loading = false;
        state.institute = action.payload;
      })
      .addCase(fetchInstituteById.rejected, (state) => {
        state.loading = false;
      });

    //add institute
    builder
      .addCase(addNewInstitute.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewInstitute.fulfilled, (state, action) => {
        state.loading = false;
        state.isAdded=true;
        state.institutes = [...state.institutes, action.payload];
      })
      .addCase(addNewInstitute.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });

    //update institute
    builder
      .addCase(editInstitute.pending, (state) => {
        state.loading = true;
      })
      .addCase(editInstitute.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdated=true;
        const institutes = state.institutes.filter(
          (institute) => institute._id !== action.payload?._id
        );
        state.institutes = [...institutes, action.payload];
      })
      .addCase(editInstitute.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });

    //delete institute
    builder
      .addCase(deleteInstituteById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteInstituteById.fulfilled, (state, action) => {
        state.loading = false;
        state.institutes = state.institutes.filter(
          (institute) => institute._id !== action.payload
        );
      })
      .addCase(
        deleteInstituteById.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

const { reducer } = instituteSlice;
export default reducer;
export const { reSetAdd, reSetUpdate } = instituteSlice.actions;