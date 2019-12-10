import React, { useCallback } from "react"
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import * as actions from "../states/todo/actions"
import TodoTable from "../components/index/TodoTable";
import { TitleStyles } from "../src/styles";
// import TodoCard from "../components/index/TodoCards"


const IndexPage: React.FC = () => {
  const dispatch = useDispatch()
  const inserts = useCallback(() => dispatch(actions.insertTodo), [dispatch])
  const classes = TitleStyles();
  
  return (
    <Layout title="todo app">
      <h1 className={classes.title}>
        todos
      </h1>
      <TodoTable />
    </Layout>
  )
}

export default IndexPage