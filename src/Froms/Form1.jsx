import React, { useState } from "react";

const Form1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [hide , setHide] = useState(false);
  const handelChange = (e) => {
    e.preventDefault();
    console.log("name value is ", name);
    console.log("Email value is ", email);
       console.log("Password value is ", pass);
  };
  return (
    <>
      <h1>Learning Forms In React Js</h1>

      <form onSubmit={handelChange}>
        <h2>Form Testing</h2>
        <label htmlFor="name"> Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <label htmlFor="email"> Email :</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type={hide ? "text" : "password"}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={()=>setHide(!hide)}>
            {hide ? "Hide" : "Show"}
        </button>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form1;
