import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    "& .MuiPagination-ul": {
      justifyContent: "center",
      marginBottom: 40,
    },
  },
}));

const ChronicleNavigator = (props) => {
  const classes = useStyles();
  const count = props.data;
  const onChangeHandler = props.onChangeHandler;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
    onChangeHandler(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        className={classes.pagination}
        count={count}
        page={page}
        onChange={handleChange}
        size="large"
      />
    </div>
  );
};

ChronicleNavigator.propTypes = {
  data: PropTypes.object,
}
export default ChronicleNavigator;