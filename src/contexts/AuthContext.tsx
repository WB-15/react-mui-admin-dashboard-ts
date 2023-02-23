import { FC, useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../hooks/useUser';


type AuthContext = {
  user: User | null;
  setUser: (user:User | null) => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthContext = createContext<AuthContext>(
  {} as AuthContext
);

export const AuthProvider: FC = ({ children }) => {

  const [user, setUser] = useState({})

  useEffect(() => {
    if (localStorage.getItem('accessToken') == '') {
      const navigate = useNavigate();
      navigate("/");
    }
  })

  return (
    <AuthContext.Provider
      value={{ user:null, setUser: () => {} }}
    >
      {children}
    </AuthContext.Provider>
  );
  
};

