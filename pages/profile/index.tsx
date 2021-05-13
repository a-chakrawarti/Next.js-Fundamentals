import { useState } from "react";
import jwt from "jsonwebtoken";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("You are not logged in!");

  const handleLogin = async () => {
    const res = await (
      await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
    ).json();

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };

      console.log(json);

      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? "an admin!" : "not an admin."
        }`
      );
    } else {
      setMessage("Something went wrong...");
    }
  };

  return (
    <div>
      <h1>{message}</h1>
      <form>
        <input
          name="usename"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="smallcase" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
