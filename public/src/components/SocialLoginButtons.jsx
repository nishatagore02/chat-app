import React from "react";
import styled from "styled-components";
import { BsGoogle, BsGithub, } from "react-icons/bs";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { firebaseLoginRoute } from "../utils/APIRoutes";

export default function SocialLoginButtons() {

 const navigate = useNavigate();

  const providers = {
    google:new GoogleAuthProvider(),
    github: new GithubAuthProvider(),
  }

  const firebaseLogin = async (loginType) => {
    try {
      const provider = providers[loginType];
      const userData = await signInWithPopup(firebaseAuth, provider);
      const email = userData.user.email
        ? userData.user.email
        : userData.user.providerData[0].email;
      const { data } = await axios.post(firebaseLoginRoute, { email });

      if (data.status) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      } else {
        navigate("/setusername");
      }
    } catch (err) {}
  };

  return (
    <Container>
  <button type='button' onClick={()=>firebaseLogin("google")}>
   <BsGoogle />
  </button>

  <button type='button' onClick={()=>firebaseLogin("github")}>
   <BsGithub />
  </button>
   </Container>
  );
}

 const Container = styled.div`
 display: flex;
 width: 100%;
 justify-content: center;
 gap: 1rem;
 background-color:transparent;
  button{
    background-color: transparent;
    border: 0.1rem solid limegreen;
    color: white;
    padding: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: limegreen;
    }
  }
 `;