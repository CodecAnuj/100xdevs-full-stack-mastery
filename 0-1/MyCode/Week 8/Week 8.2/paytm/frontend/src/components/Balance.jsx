import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {
  const [balance, setbalance] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setbalance(response.data.balance);
      });
  }, []);

  return (
    <div className="flex">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="font-semibold ml-4 text-lg">
        Rs {balance}
      </div>
    </div>
  );
};
