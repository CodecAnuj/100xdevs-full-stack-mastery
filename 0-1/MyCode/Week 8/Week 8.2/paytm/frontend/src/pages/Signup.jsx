import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWaring } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Entre your information to create an account"} />
          <InputBox
            onType={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="Enter your First Name"
            label={"First Name"}
          />
          <InputBox
            onType={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Enter your Last Name"
            label={"Last Name"}
          />
          <InputBox
            onType={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter your Email"
            label={"Email"}
          />
          <InputBox
            onType={(e) => {
              setPasword(e.target.value);
            }}
            placeholder="Enter your Password"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onPress={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/signin");
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWaring
            label={"Already have an account?"}
            buttonText={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
