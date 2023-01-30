import Image from "next/image"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import styles from "../styles/Home.module.css"
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";


import 'react-toastify/dist/ReactToastify.css';
import SignIcon from "@mui/icons-material/Login"
import app from "@/companents/config/firebase_config";

import { useState } from "react";
import Link from "next/link";
export default function Signin(props) {








  const [email, setEmail] = useState("")
  const [user, setUser] = useState()
  const [password, setPassword] = useState("")







  const SignIn = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 

        const user = userCredential.user;

setUser(user)


      })
      .catch((error) => {
        alert(error)

        console.log(error)
      });

  }

  return (
    <>

      {user ?
        <>
          <div className="container mx-auto">
            <div className="row mx-auto">
              <div className="col-sm-8 mx-auto col-sm-offset-2">
                <div className="panel panel-white profile-widget">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="image-container bg2">
                        <img src={user.photoURL} className="avatar" alt="avatar" loading="lazy" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="details">
                        <h4>UserName: {user.displayName} <i className="fa fa-sheild"></i></h4>
                        <div>Phone Number: {user.phoneNumber}</div>
                        <div>Email: {user.email}</div>


                      </div>
                    </div>

                  </div>
                </div >
              </div >
            </div >
          </div >
        </>
        :

        <>

          <div className="container">
            <div className="row mt-5" >
              <div className="col-lg-12 mx-auto w-50  text-center" >
                <img src={"/images/logo.svg"} loading={"lazy"} width={100} height={100} className="mb-3 mt-5" />

                <FormGroup floating>
                  <Input onChange={(e) => setEmail(e.target.value)}
                    id="exampleEmail"
                    name="email"

                    placeholder="Email"
                    type="email"
                  />

                  <Label for="exampleEmail">
                    Login
                  </Label>
                </FormGroup>

                <FormGroup floating>
                  <Input onChange={(e) => setPassword(e.target.value)}
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <Label for="examplePassword">
                    Password
                  </Label>
                </FormGroup>

                <button onClick={SignIn} className="btn btn-outline-success w-50" > Sign In <SignIcon /></button>
                <p onClick={(e) => props.value.setSigned(true)} className="text-center mt-3 qwe">I'm not registred (Sign-Up)</p>
              </div>
            </div>
          </div>


        </>
      }
    </>

  )
}
