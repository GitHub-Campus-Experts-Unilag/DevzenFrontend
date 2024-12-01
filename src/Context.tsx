import * as React from "react";
interface AppState {
  boxes: string[];
  setBoxes: (boxes: string[]) => void;
  dropDown: boolean;
  setDropdown: (dropDown: boolean) => void;
  dropDownSpace: boolean;
  setDropdownSpace: (dropDownSpace: boolean) => void;
  inputSql: string;
  setInputSql: (inputSql: string) => void;
  outputSql: string;
  setOutputSql: (inputSql: string) => void;
}
export const AppContext = React.createContext<AppState | undefined>(undefined);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [boxes, setBoxes] = React.useState([
    "Untitled",
    "Untitled",
    "Untitled",
  ]);
  const [dropDown, setDropdown] = React.useState(false);
  const [dropDownSpace, setDropdownSpace] = React.useState(false);
  const [inputSql, setInputSql] = React.useState('')
  const [outputSql, setOutputSql] = React.useState('')

  return (
    <AppContext.Provider
      value={{
        boxes,
        setBoxes,
        dropDown,
        setDropdown,
        setDropdownSpace,
        dropDownSpace,
        inputSql,
        setInputSql,
        outputSql,
        setOutputSql
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
