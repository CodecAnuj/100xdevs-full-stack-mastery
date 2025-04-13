import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
export const Dashboard = () => {
  return (
    <div>
      <Appbar></Appbar>
      <div className="m-8">
        <Balance></Balance>
        <Users></Users>
      </div>
      
    </div>
  );
};
