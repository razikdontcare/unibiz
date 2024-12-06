// import { User } from "@/types";
import React, { useContext, useState, createContext, ReactNode } from "react";

interface UserContextProps {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextProps>({
  user: false,
  setUser: () => {},
});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
}
