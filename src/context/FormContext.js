import { createContext, useState } from "react";


const FormContext = createContext({
  selectedStomach: null,
  selectedHand: null,
  updateStomach: (name) => {},
  updateHand: (name) => {},
});

export const FormContextProvider = (props) => {
  const [selectedStomach, setSelectedStomach] = useState(null);
  const [selectedHand, setSelectedHand] = useState(null);

  const updateStomachForm = (name) => {
    if (selectedStomach && selectedStomach === name) {
      setSelectedStomach(null);
    } else if (selectedStomach && selectedStomach !== name) {
      setSelectedStomach(name);
    } else {
      setSelectedStomach(name);
    }
  };

  const updateHandForm = (name) => {
    if (selectedHand && selectedHand === name) {
      setSelectedHand(null);
    } else if (selectedHand && selectedHand !== name) {
      setSelectedHand(name);
    } else {
      setSelectedHand(name);
    }
  };

  return (
    <FormContext.Provider
      value={{
        selectedStomach: selectedStomach,
        selectedHand: selectedHand,
        updateStomach:updateStomachForm,
        updateHand:updateHandForm
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
