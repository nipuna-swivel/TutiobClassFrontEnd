// Add Payment
// Get All Payments
// Get Payment by NIC
//Delete Payment

import { axios } from "@/api";
import { IPaymentState } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IPaymentState = {
  payments: [],
  payment: null,
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
 
};

export const fetchPayments = createAsyncThunk(
  "payment/fetchPayments",
  async () => {
    try {
      const { data } = await axios.get("/payment");
      return data;
    } catch (error) {}
  }
);

export const fetchPaymentByNIC = createAsyncThunk(
  "payment/fetchPaymentByNIC",
  async (nic: string) => {
    try {
      const { data } = await axios.get(`/payment/${nic}`);
      return data;
    } catch (error) {}
  }
);

export const addNewPayment = createAsyncThunk(
  "payment/addNewPayment",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/payment", payload);
      return data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const editPayment = createAsyncThunk(
  "payment/updatePayment",
  async (params: { id: string; payload: any }, { rejectWithValue }) => {
   console.log("parameters", params);
    try {
      const { data } = await axios.put(`/payment/${params.id}`, params.payload);
      return data;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const deletePaymentById = createAsyncThunk(
  "payment/deletePaymentById",
  async (paymentId: string, { rejectWithValue }) => {
    try {
      await axios.delete(`/payment/${paymentId}`);
      return paymentId;
    } catch (e: any) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
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
    //get  all payment information
    builder
      .addCase(fetchPayments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
      })
      .addCase(fetchPayments.rejected, (state) => {
        state.loading = false;
      });

    //get payment by nic
    builder
      .addCase(fetchPaymentByNIC.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPaymentByNIC.fulfilled, (state, action) => {
        state.loading = false;
        state.payment = action.payload;
      })
      .addCase(fetchPaymentByNIC.rejected, (state) => {
        state.loading = false;
      });

    //add payment
    builder
      .addCase(addNewPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.isAdded=true;
        state.payments = [...state.payments, action.payload];
      })
      .addCase(addNewPayment.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });

    //update payment
    builder
      .addCase(editPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(editPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdated=true;
        const students = state.payments.filter(
          (student) => student._id !== action.payload?._id
        );
        state.payments = [...students, action.payload];
      })
      .addCase(editPayment.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });

    //delete payment
    builder
      .addCase(deletePaymentById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePaymentById.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = state.payments.filter(
          (student) => student._id !== action.payload
        );
      })
      .addCase(
        deletePaymentById.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

const { reducer } = paymentSlice;
export default reducer;
export const { reSetAdd, reSetUpdate } = paymentSlice.actions;