import { GlobalContext } from "@/global/globalProvider";
import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute: FC<any> = ({ children }) => {
  const { user }: any = useContext(GlobalContext);
  const isAuthenticated = JSON.parse(localStorage.getItem("auth")!);
  return (
    <div>
      {isAuthenticated ? <Navigate to="/dashboard" /> : <div>{children}</div>}
    </div>
  );
};

export default ProtectedRoute;
