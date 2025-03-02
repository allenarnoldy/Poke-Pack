import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "../App.css";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

  const toggleSignup = () => setIsSignup((prevState) => !prevState);

  return (
    isOpen && (
      <div className="modal-overlay">
        {/* Modal Container */}
        <div className="modal-container">
          <div className="modal-content">
            {/* Close Button */}
            <button className="close-btn" onClick={onClose}>
              X
            </button>
            <h2>{isSignup ? "Sign Up" : "Login"}</h2>
            {isSignup ? (
              // Show Signup Form
              <SignupForm handleModalClose={onClose} />
            ) : (
              // Show Login Form
              <LoginForm handleModalClose={onClose} />
            )}
            <button type="button" onClick={toggleSignup}>
              {isSignup
                ? "Already have an account? Log in"
                : "Need an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginModal;
