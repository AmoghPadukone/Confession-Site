import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  return (
    <DataContext.Provider value={{ notes, setNotes }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
