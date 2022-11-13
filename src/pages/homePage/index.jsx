import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../components/input";
import Button from "../../components/button";

import style from "./home.module.scss";

const Home = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={style.parentWrapper}>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Form</h1>
        <div className={style.inputSec}>
          <Input
            type={"name"}
            label={"Name"}
            name={"name"}
            placeholder={"Enter Name"}
            value={values.name}
            ref={register({ required: true, minLength: 3, maxLength: 10 })}
          />
          {errors.name?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
        </div>
        <div className={style.inputSec}>
          <Input
            type={"email"}
            name={"email"}
            label={"Email"}
            placeholder={"Enter Email"}
            value={values.email}
            ref={register}
          />
        </div>
        <div className={style.inputSec}>
          <Input
            type={"age"}
            label={"Age"}
            name={"age"}
            placeholder={"Enter Age"}
            value={values.age}
            ref={register}
          />
        </div>
        <div className={style.inputSec}>
          <Input
            type={"password"}
            label={"Password"}
            name={"password"}
            placeholder={"Enter Password"}
            value={values.password}
            ref={register}
          />
        </div>
        <div className={style.buttonSec}>
          <Button title={"Add To Table"} />
        </div>
      </form>
      <div className={style.table}>
        <table>
          <tbody>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>Password</th>
            </tr>
            <tr>
              <td>{values.name}</td>
              <td>{values.age}</td>
              <td>{values.email}</td>
              <td>{values.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
