import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  UserCredential,
  signOut
} from "firebase/auth";
import app from "../firebase/firebase.config";


type AuthContextType = {
  user: any;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  logout: () => Promise<void>;
}

type User = any

export const AuthContext = createContext<AuthContextType | null>(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email: string, password: string): Promise<any> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signInWithGoogle =  async (): Promise<UserCredential> => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const login = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
