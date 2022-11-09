import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/Firebase.Config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photoUrl, email) => {
    return updateUserProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
      email: email,
    });
  };
  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    setLoading,
    providerLogin,
    createUser,
    updateUserProfile,
    singInUser,
    logOut,
  };
  return (
    <div>
      {loading && (
        <div>
          {" "}
          <progress
            className="progress progress-warning w-56"
            value="10"
            max="100"
          ></progress>
          <progress
            className="progress progress-warning w-56"
            value="40"
            max="100"
          ></progress>
        </div>
      )}
      <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
