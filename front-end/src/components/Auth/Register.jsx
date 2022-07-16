import React from "react";
import { Button } from "../UI/Button";
import { SmallButton } from "../UI/smallButton";

export const Register = ({ setIsLoginForm }) => {
  const setAuthForm = () => {
    setIsLoginForm(true);
  };
  return (
    <div className="page-blocker">
      <div className="card">
        <form className="form-container">
          <input className="input-field" type="text" placeholder="email" />
          <input className="input-field" type="text" placeholder="password" />
          <input
            className="input-field"
            type="text"
            placeholder="Confirm password"
          />
          <Button value="Register" />
        </form>
        <p className="text">
          Already registered?
          <SmallButton value="Sign in" onSmallButtonClick={setAuthForm} />
        </p>
        <style jsx>{`
          .card {
            margin: 10px auto;
            background: #fae6b1;
            padding: 40px 40px;
            width: 100%;
            max-width: 400px;
            box-shadow: 1px 1px 10px #cecece;
            border-radius: 10px;
            text-align: center;
          }

          .form-container {
            display: flex;
            flex-direction: column;
            justify-content: spa;
            margin: auto;
          }

          .input-field {
            margin-bottom: 20px;
            width: 300px;

            height: 35px;
          }

          .text {
            margin-top: 20px;
            color: #31525b;
          }
          .page-blocker {
            display: grid;
            place-content: center;
            width: 100%;
            height: 100vh;
            right: 0px;
            position: fixed;
            background: #f7b830;
            backdrop-filter: blur(3px);
          }
        `}</style>
      </div>
    </div>
  );
};
