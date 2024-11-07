import * as React from 'react'
interface AppState{
    boxes: string[]
    setBoxes:(boxes:string[])=>void
}
export const AppContext = React.createContext<AppState | undefined>(undefined)
export const AppProvider=({children}: {children: React.ReactNode})=>{
    const [boxes,setBoxes] = React.useState(['Untitled', 'Untitled', 'Untitled']);
    return(
        <AppContext.Provider value={{boxes,setBoxes}}>
            {children}
        </AppContext.Provider>
    )
    
}