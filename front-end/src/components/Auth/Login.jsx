import React from "react";
import { Button } from "../UI/Button";
import { SmallButton } from "../UI/smallButton";

export const Login = ({ setIsLoginForm }) => {
  const setAuthForm = () => {
    setIsLoginForm(false);
  };
  return (
    <div className="page-blocker">
      <div className="card">
        <form className="form-container">
          <input className="input-field" type="text" placeholder="email" />
          <input className="input-field" type="text" placeholder="password" />
          <Button value="Sign in" />
        </form>
        <p className="text">
          Not registered?
          <SmallButton value="Sign up" onSmallButtonClick={setAuthForm} />
        </p>
        <style jsx>{`
          .card {
            margin: 70px auto;
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

            height: 35px;
          }

          .text {
            color: #31525b;
          }
          .page-blocker {
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
