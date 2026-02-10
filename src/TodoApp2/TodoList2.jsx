import React, { useState } from "react";

const TodoList2 = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    if (activity.trim() === "") return;

    setListData((prevData) => [...prevData, activity]);
    setActivity("");
  };

  const removeTask = (index) => {
    const updatedListData = listData.filter((_, id) => id !== index);
    setListData(updatedListData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 Today Tasks</h1>

      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          style={styles.input}
        />

        <button onClick={addActivity} style={styles.addBtn}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {listData.map((data, index) => (
          <li key={index} style={styles.listItem}>
            <span>{data}</span>
            <button
              onClick={() => removeTask(index)}
              style={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {listData.length > 0 && (
        <button
          onClick={() => setListData([])}
          style={styles.clearBtn}
        >
          Remove All Tasks
        </button>
      )}
    </div>
  );
};


const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },

  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  addBtn: {
    padding: "10px 16px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f7f7f7",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "10px",
  },

  deleteBtn: {
    background: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "4px 8px",
  },

  clearBtn: {
    width: "100%",
    marginTop: "15px",
    padding: "10px",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default TodoList2;
