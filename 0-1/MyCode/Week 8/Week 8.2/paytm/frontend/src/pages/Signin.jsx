import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWaring } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max">
          <Heading label={"Sign in"} />
          <SubHeading
            label={"Entre your credentials to accsess your account"}
          />
          <InputBox
            onType={(e) => {
              setUsername(e.target.value);
            }}
            placeholder={"Enter your Email"}
            label={"Email"}
          />
          <InputBox
            onType={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"Enter your Password"}
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onPress={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Sign in"}
            />
          </div>
          <BottomWaring
            label={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
