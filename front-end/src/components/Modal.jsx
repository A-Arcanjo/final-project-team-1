import React from "react";
import { useNavigate } from "react-router";

export const Modal = ({ setOpenModal }) => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    setOpenModal(false);
    navigate("/auth");
  };

  return (
    <div className="page-blocker">
      <div className="modal-wrapper">
        <div className="modal-top">
          <h3 className="top-text">Login to continue</h3>
          <button
            onClick={() => setOpenModal(false)}
            className="close-modal-btn"
          >
            &times;
          </button>
        </div>
        <div className="modal-content">
          <p className="text">You are not logged in...</p>
          <button className="login-btn" onClick={navigateToLogin}>
            Login
          </button>
        </div>
      </div>
      <style jsx>{`
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
        .text {
          margin-top: 30px;
          font-size: 1.2rem;
        }

        .top-text {
          color: #31525b;
        }

        .modal-wrapper {
          background: #fae6b1;
          width: 500px;
          height: 250px;
          margin-bottom: 150px;
          border-radius: 7px;
        }
        .modal-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          border-bottom: 1px solid #ccc;
          width: 100%;
          height: 60px;
        }
        .close-modal-btn {
          border: none;
          background: transparent;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .login-btn {
          background: #ffa101;
          color: #31525b;
          border: none;
          font-size: 1.2rem;
          font-weight: bold;
          padding: 10px;
          margin-top: 60px;
          border-radius: 5px;
        }
        .modal-content {
          padding: 10px 20px;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};
