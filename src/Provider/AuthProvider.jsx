import AuthContext from "../context/authContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
const AuthProvider = ({ children }) => {
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const info = {
    name: "rj",
    userRegister,
    updateUserProfile,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
