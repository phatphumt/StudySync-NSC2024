import { Button } from "react-bootstrap";
import "../styles/LoginPage.sass";
import { FormEvent, useState } from "react";

const LoginPage = () => {
  const [signing, setSigning] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = () => {
    console.log(credentials);
    setSigning((prev) => !prev);
  };

  return (
    <>
      <main>
        <h1>Login</h1>
        <form>
          <div className="fromItemWrapper">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={handleChange}
            />
          </div>
          <div className="fromItemWrapper">
            <label htmlFor="passwordinput" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="passwordinput"
              onChange={handleChange}
            />
          </div>
          <Button
            variant="secondary"
            className={!signing ? "signin--btn" : "signin--btn signining"}
            disabled={signing}
            onClick={handleClick}
          >
            ลงชื่อเข้าใช้
          </Button>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
