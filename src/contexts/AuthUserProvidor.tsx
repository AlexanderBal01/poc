import { createContext } from 'react';

const AuthUserContext = createContext({ userName: null, setUserName: (user: any) => {} });

export default AuthUserContext;
