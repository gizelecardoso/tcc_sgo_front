import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import returnActivities from "../services/api/Activity/find_all_api";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [evolution, setEvolution] = useState(0);

  return (
    <AuthContext.Provider value={{ evolution , setEvolution}}>
      { props.children}
    </AuthContext.Provider>
  )
}