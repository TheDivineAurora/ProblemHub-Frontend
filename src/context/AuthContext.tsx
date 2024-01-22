import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AuthContextProps {
  isAuthenicated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenicated, setIsAuthenicated] = useState(false);

  useEffect(() => {
    const StoredToken = localStorage.getItem('token');
    setIsAuthenicated(!!StoredToken);
  }, []);

  const login = () => {
    setIsAuthenicated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenicated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenicated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
