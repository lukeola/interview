import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import spinner from "../../components/animations/loading.json";
import {
  TodosButton,
  TodosHeader,
  TodosTitle,
  Todoslists,
  TodosContainer,
  TodosItems,
  TodoStatus,
} from "../todos/TodosElements";

const UsersTodos = () => {
  const { userId } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user Todos");
        }

        const usersTodosData = await response.json();
        setData(usersTodosData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return (
      <TodosContainer>
        <Lottie animationData={spinner} style={{ height: "150px" }} />
      </TodosContainer>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const handleDeleteTodos = (todosId) => {
    // Create a new array of Todos excluding the Todos with the given ID.
    const updatedData = data.filter((todos) => todos.id !== todosId);
    setData(updatedData);
  };

  // Separate completed and uncompleted todos
  const completedTodos = data.filter((todo) => todo.completed);
  const uncompletedTodos = data.filter((todo) => !todo.completed);

  return (
    <TodosContainer>
      <TodosHeader>ALL TODOS BY USER &nbsp; {userId}</TodosHeader>
      <TodoStatus>
        <div>
          {/* Render completed todos */}
          <h2 style={{ paddingBottom: "2rem" }}>Completed Todos:</h2>
          <TodosItems>
            {completedTodos.map((todo) => (
              <Todoslists key={todo.id}>
                <p>Created by USER ID: {todo.userId}</p>
                <TodosTitle>{todo.title}</TodosTitle>
                <p>{todo.completed}</p>
                <TodosButton onClick={() => handleDeleteTodos(todo.id)}>
                  Delete Todos
                </TodosButton>
              </Todoslists>
            ))}
          </TodosItems>
        </div>
        <div>
          {/* Render uncompleted todos */}
          <h2 style={{ paddingBottom: "2rem" }}>Uncompleted Todos:</h2>
          <TodosItems>
            {uncompletedTodos.map((todo) => (
              <Todoslists key={todo.id}>
                <p>Created by USER ID: {todo.userId}</p>
                <TodosTitle>{todo.title}</TodosTitle>
                <p>{todo.completed}</p>
                <TodosButton onClick={() => handleDeleteTodos(todo.id)}>
                  Delete Todos
                </TodosButton>
              </Todoslists>
            ))}
          </TodosItems>
        </div>
      </TodoStatus>
    </TodosContainer>
  );
};

export default UsersTodos;
