import React from 'react';
import { useAppDispatch, useAppSelector } from "@/hooks";
import StudentTable from '@/components/organisms/DataTable';

function ListStudent() {
    const students = useAppSelector((state) => state.student);
    const dispatch = useAppDispatch();
  return (
    <div>
      <StudentTable/>
    </div>
  )
}

export default ListStudent
