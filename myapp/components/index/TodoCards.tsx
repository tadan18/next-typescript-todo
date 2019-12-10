import React from 'react';
import { useSelector } from "react-redux";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from "@material-ui/core/Checkbox";
import { Todo } from "../../types/todo";

type TodoType = {
  todo: Todo
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      width: 500,
    },
  }),
);

export default function PaperSheet() {
  const classes = useStyles({});
  const todos = useSelector((state: any) => state.todo.todos)

  return (
    <Paper className={classes.root} elevation={8}>
      {todos.map((todo: TodoType, i: number) => (
        <div key={i}>
          <Checkbox
            checked={true}
            // onChange={handleChange('checkedA')}
            value="checkedA"
            inputProps={{
              'aria-label': 'primary checkbox',
            }}
          />
          <span>{todo.todo}</span>
        </div>
      ))}
    </Paper>
  );
}
