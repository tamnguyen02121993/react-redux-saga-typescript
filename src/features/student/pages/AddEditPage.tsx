import { Box, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ChevronLeft } from '@material-ui/icons';
import { Student } from 'models';
import studentApi from 'api/studentApi';
import StudentForm from '../components/StudentForm';
import { toast } from 'react-toastify';

export default function AddEditPage() {
  const { studentId } = useParams<{ studentId: string }>();
  const isEdit = Boolean(studentId);
  const [student, setStudent] = useState<Student>();
  const history = useHistory();

  useEffect(() => {
    if (!studentId) return;

    // IFFE
    (async () => {
      try {
        const data: Student = await studentApi.getById(studentId);
        setStudent(data);
      } catch (error) {
        console.log('Failed to fetch student details', error);
      }
    })();
  }, [studentId]);

  const handleStudentFormSubmit = async (formValues: Student) => {
    // TODO: Handle submit form here
    if (isEdit) {
      await studentApi.update(formValues);
    } else {
      await studentApi.add(formValues);
    }

    toast.success('Save student successfully!');
    history.push('/admin/students');
  };

  const initialValues: Student = {
    name: '',
    age: 0,
    mark: 0,
    city: '',
    gender: 'male',
    ...student,
  } as Student;

  return (
    <Box>
      <Link to={'/admin/students'}>
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> &nbsp;Back to student list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update student info' : 'Add new student'}</Typography>

      {/* Student Form */}
      {(!isEdit || Boolean(student)) && (
        <Box mt={3}>
          <StudentForm initialValues={initialValues} onSubmit={handleStudentFormSubmit} />
        </Box>
      )}
    </Box>
  );
}
