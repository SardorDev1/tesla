import SignIn from "../companents/sign-in"
import { useState } from "react";
import SignUp from "../companents/sign-up"
export default function Account() {


  const [signed, setSigned] = useState(false)

    




  return (
    <>

      {signed === false ?
        <SignIn value={{ signed, setSigned }} />
        :
        <SignUp value={{ signed, setSigned }} />
      }
    </>

  )
}
