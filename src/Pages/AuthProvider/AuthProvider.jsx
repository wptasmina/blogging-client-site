import { createContext, useEffect, useState } from 'react';
import { 
  //  getAuth,
   createUserWithEmailAndPassword, 
   GoogleAuthProvider,
   onAuthStateChanged, 
   signInWithEmailAndPassword, 
   signInWithPopup, 
   signOut } from "firebase/auth";

import auth from "../../Firebase/firebase.init";

// import { FaSpinner } from "react-icons/fa";
// import { toast, useToast } from "react-toastify";

export const authContext = createContext()

export default function AuthProvider({children}) {
  // const auth = getAuth(app);



  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // if (currentUser) {
  //       setUser(currentUser);
  //       if (currentUser?.email) {
  //         const users = {
  //           email: currentUser?.email,
  //         };
  //         // axios.post("http://localhost:5000/jwt", users, {
  //         //   withCredentials: true,
  //         // });
  //       }
  //       setLoading(false);
  //     } else {
  //       setUser(null);
  //       setLoading(false);
  //     }

  // const [userPhoto, setUserPhoto] = useState(null);
  // const [userName, setUserName] = useState(null);
  // const [userEmail, setUserEmail] = useState(null);

  // Register
  const handleRegister = ( email, password ) =>{
    // console.log(auth)
    return createUserWithEmailAndPassword( auth, email, password )
  }
  //Login
  const handleLogin = ( email, password) =>{
   return signInWithEmailAndPassword(auth, email, password)

  }

    // GoogleProvider create
    const Provider = new GoogleAuthProvider(); 

    // GoogleProvider
    const handleGoogleLogin = (e) =>{
      return signInWithPopup(auth, Provider)
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
    user,
    loading,
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogOut
  }
  

  
  //objerbar
  // useEffect(()=>{
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     console.log(currentUser)
  //     return ()=>{ 
  //       unsubscribe()
  //     }
      
  //   })
  // },[auth])




  return (
    <>
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </>
  )
}
