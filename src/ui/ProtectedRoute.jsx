// import { Children } from "react";

import { useEffect } from "react";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

import styled from "styled-components";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isAuthenticated,isLoading } = useUser();
    useEffect(
      function () {
        if (!isAuthenticated && !isLoading) navigate("/login");
      },
      [isAuthenticated, isLoading, navigate],
    );
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;

  // return null;
}
