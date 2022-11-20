import auth from "./firebaseAuth";
import { signOut } from "firebase/auth";
import { CurrentUserContext } from "../components/CurrentUserContext";
import { useContext } from "react";

export default function SignOut() {
  const currentUser = useContext(CurrentUserContext);

  const userSignOut = () => {
    signOut(auth)
      .then((cred) => {
        currentUser.setCurrentUser("");
        console.log(cred);
        alert("user signed out", cred);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return <button onClick={userSignOut}>Sign Out</button>;
}
