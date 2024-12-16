"use client";

// import { User } from "@/types";
import React, { useContext, useState, createContext, ReactNode } from "react";

interface UserContextProps {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RegisterEmailContextProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextProps>({
  user: false,
  setUser: () => {},
});

const RegisterEmailContext = createContext<RegisterEmailContextProps>({
  email: "",
  setEmail: () => {},
});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function RegisterEmailContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [email, setEmail] = useState<string>("");

  return (
    <RegisterEmailContext.Provider value={{ email, setEmail }}>
      {children}
    </RegisterEmailContext.Provider>
  );
}

export function useUserContext() {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
}

export function useRegisterEmailContext() {
  const { email, setEmail } = useContext(RegisterEmailContext);
  return { email, setEmail };
}
