import React from 'react';
//components
import { MainMenu, Header } from '../components';

export const ActivationContext = React.createContext();

export const MenuActivation = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <ActivationContext.Provider value={{ openMenu, setOpenMenu }}>
      <MainMenu />
      <Header />
    </ActivationContext.Provider>
  );
};
