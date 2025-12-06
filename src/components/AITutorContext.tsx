import { createContext, useContext, useState, ReactNode } from "react";

interface AITutorContextType {
  isAITutorEnabled: boolean;
  setIsAITutorEnabled: (enabled: boolean) => void;
  selectedText: string;
  setSelectedText: (text: string) => void;
}

const AITutorContext = createContext<AITutorContextType | undefined>(undefined);

export const AITutorProvider = ({ children }: { children: ReactNode }) => {
  const [isAITutorEnabled, setIsAITutorEnabled] = useState(false);
  const [selectedText, setSelectedText] = useState("");

  return (
    <AITutorContext.Provider value={{ 
      isAITutorEnabled, 
      setIsAITutorEnabled, 
      selectedText, 
      setSelectedText 
    }}>
      {children}
    </AITutorContext.Provider>
  );
};

export const useAITutor = () => {
  const context = useContext(AITutorContext);
  if (!context) {
    throw new Error("useAITutor must be used within AITutorProvider");
  }
  return context;
};
