import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // 완성된 로직들이 아니에요! 참고만 하세요!
  const handleSignup = async (formData) => {
    try {
      const data = await register(formData);
      if (data.success) {
        navigate("/login");
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-primary-color mb-6 text-center">회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            이미 계정이 있으신가요? <Link to="/login" className="text-primary-color hover:underline">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
