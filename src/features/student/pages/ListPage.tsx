import { Box, Typography, Button, makeStyles, LinearProgress } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import { Pagination } from '@material-ui/lab';
import { StudentTable } from '../components/StudentTable';
import {
  selectStudentFilter,
  selectStudentList,
  selectStudentLoading,
  selectStudentPagination,
  studentActions,
} from '../studentSlice';
import { selectCityMap } from 'features/city/citySilce';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(1),
  },
  titleContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  loading: {
    position: 'absolute',
    width: '100%',
    top: theme.spacing(-1),
  },
}));

export default function ListPage() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const studentList = useAppSelector(selectStudentList);
  const pagination = useAppSelector(selectStudentPagination);
  const filter = useAppSelector(selectStudentFilter);
  const loading = useAppSelector(selectStudentLoading);
  const cityMap = useAppSelector(selectCityMap);

  const handlePageChange = (event: any, page: number) => {
    dispatch(
      studentActions.setFilter({
        ...filter,
        _page: page,
      })
    );
  };

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);
  return (
    <Box className={classes.root}>
      {/* Loading */}
      {loading && <LinearProgress className={classes.loading} />}

      <Box className={classes.titleContainer}>
        <Typography variant="h4">Students</Typography>
        <Button variant="contained" color="primary">
          Add new student
        </Button>
      </Box>

      {/* Student Table */}
      <StudentTable studentList={studentList} cityMap={cityMap} />

      {/* Pagination */}
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          color="primary"
          count={Math.ceil(pagination?._totalRows / pagination?._limit)}
          page={pagination._page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}
