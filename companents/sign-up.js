import Image from "next/image"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import styles from "../styles/Home.module.css"
import SignIcon from "@mui/icons-material/Login"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react"

import app from "@/companents/config/firebase_config";
import { useRouter } from "next/router"


export default function SignUp(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState()

    const SignUp_func = () => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)



            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)

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
                                        Sign up
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
                                <button onClick={SignUp_func} className="btn btn-outline-success w-50    " > Sign up <SignIcon /></button>
                                <p onClick={(e) => props.value.setSigned(false)} className="text-center mt-3 qwe">I'm registred (Login)</p>

                            </div>
                        </div>
                    </div>
                </>
            }





        </>
    )
}
