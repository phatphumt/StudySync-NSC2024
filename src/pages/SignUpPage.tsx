import TextInput from "../components/TextInput";
import { useState } from "react";
import { signUpForm } from "../configs/stuff";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const authstuff = useAuth();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (credentials.password !== credentials.confirmPassword) {
      return setError("Password does not match");
    }
    authstuff?.createUser(credentials.email, credentials.password).then((a) => {
      navigate("/dashboard");
      console.log(a.user.email);
    });
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center text-center h--full--nav">
        <h1 className="mb-8 text-5xl">Sign up</h1>
        <form
          className="flex flex-col items-center gap-5"
          onSubmit={handleSubmit}
        >
          {signUpForm.map(({ name, type, text }) => {
            return (
              <TextInput
                onChange={handleChange}
                name={name}
                type={type}
                className="px-1 py-2 text-base rounded-lg input--style"
                required={true}
              >
                {text}
              </TextInput>
            );
          })}
          {error && <p className="text-red-600 font-medium">{error}</p>}
          <button className="signin--btn">ลงชื่อเข้าใช้</button>
        </form>
      </main>
    </>
  );
};

export default SignUpPage;
