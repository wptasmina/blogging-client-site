import { createContext, useEffect, useState } from 'react';
import { 
   getAuth,
   createUserWithEmailAndPassword, 
   GoogleAuthProvider,
   onAuthStateChanged, 
   signInWithEmailAndPassword, 
   signInWithPopup, 
   signOut } from "firebase/auth";

import app from "../../Firebase/firebase.init";

// import { FaSpinner } from "react-icons/fa";
// import { toast, useToast } from "react-toastify";

export const authContext = createContext()

export default function AuthProvider({children}) {
  const auth = getAuth(app);
  // GoogleProvider create
  const Provider = new GoogleAuthProvider(); 
  
  // GoogleProvider
  const handleGoogleLogin = (e) =>{
    return signInWithPopup(auth, Provider)
    // toast.success("Login Successfully");
  }


  const [user, setUser] = useState(null)
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  // Register
  const handleRegister = ( email, password ) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //Login
  const handleLogin = ( email, password) =>{
   return signInWithEmailAndPassword(auth, email, password)

  }
  //LogOut
  const handleLogOut = () =>{
    return signOut(auth)
  }


  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <FaSpinner className="animate-spin text-3xl" />
  //     </div>
  //   );
  // }


  const authInfo = {
    handleRegister,
    handleLogin,
    handleLogOut,
    handleGoogleLogin
  }
  
  //objerbar
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      return ()=>{ 
        unsubscribe()
      }
      
    })
  },[auth])


  return (
    <>
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </>
  )
}
