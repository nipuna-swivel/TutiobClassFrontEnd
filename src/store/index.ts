import { configureStore } from '@reduxjs/toolkit';
import authSlice from "@/features/auth/authSlice";
import studentSlice from '@/features/student/studentSlice';
import instituteSlice from '@/features/tution/instituteSlice';
import paymentSlice from '@/features/payment/paymentSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    student:studentSlice,
    institute:instituteSlice,
    payment: paymentSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch