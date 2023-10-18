import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import spinner from "../../components/animations/loading.json";
import {
  TodosHeader,
  TodosItems,
  TodosTitle,
  Todoslists,
  TodosContainer,
  TodosButton,
} from "./TodosElements";

const Todos = () => {
  // State variables for data, error, and loading indicator
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from an external API using the useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <TodosContainer>Error: {error.message}</TodosContainer>;
  }

  if (isLoading) {
    return (
      <TodosContainer>
        <Lottie animationData={spinner} style={{ height: "150px" }} />
      </TodosContainer>
    );
  }

  // Handle deletion of todos
  const handleDeleteTodos = async (todosId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todosId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the Todos");
      }

      const updatedData = data.filter((todos) => todos.id !== todosId);
      setData(updatedData);
    } catch (error) {
      setError(error);
    }
  };

  // Separate completed and uncompleted todos
  const completedTodos = data.filter((todo) => todo.completed);
  const uncompletedTodos = data.filter((todo) => !todo.completed);

  return (
    <TodosContainer>
      <TodosHeader>TODOS</TodosHeader>
      <div style={{ display: "flex", gap: "2rem" }}>
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
      </div>
    </TodosContainer>
  );
};

export default Todos;
