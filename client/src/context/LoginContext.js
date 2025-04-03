import React , {useContext , createContext} from "react"

export const LoginContext = createContext({
    
})

export const useLoginContext = () => {
  return useContext(LoginContext)
}

export const LoginContextProvider = LoginContext.Provider