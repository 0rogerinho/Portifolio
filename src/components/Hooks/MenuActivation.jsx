import React, { createContext } from 'react';
import { MainMenu } from '../Header/MainMenu';
import Header from '../Header/Header';

export const ActivationContext = createContext();

export const MenuActivation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <ActivationContext.Provider value={{ openMenu, setOpenMenu }}>
      <MainMenu />
      <Header />
    </ActivationContext.Provider>
  );
};
