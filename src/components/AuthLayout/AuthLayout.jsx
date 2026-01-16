import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? <>...Loading</> : <>{children}</>;
}

export default Protected;
