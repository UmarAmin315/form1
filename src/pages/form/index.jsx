import React, { useState } from "react";
import { useForm } from "react-hook-form";

import style from "./form.module.scss";

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={style.parentWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Form</h1>
        <div className={style.inputSec}>
          <input
            type={"name"}
            name={"name"}
            placeholder={"Enter Name"}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p style={{ color: "Red", marginTop: "8px" }}>Name Is Required</p>
          )}
          <input
            type={"email"}
            name={"email"}
            placeholder={"Enter Email"}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p style={{ color: "Red", marginTop: "8px" }}>
              Enter Valid Email Address
            </p>
          )}
          <input
            name={"age"}
            placeholder={"Enter Age"}
            {...register("age", {
              required: true,
              min: 1,
              max: 150,
              pattern: /\d+/,
            })}
          />
          {errors.age && (
            <p style={{ color: "Red", marginTop: "8px" }}>
              Age Is Required In Number
            </p>
          )}

          <input
            type={"password"}
            name={"password"}
            placeholder={"Enter Password"}
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "Red", marginTop: "8px" }}>
              Password Is Required
            </p>
          )}
        </div>
        <div className={style.buttonSec}>
          <input type="submit" value={"Add To Table"} />
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form1;
