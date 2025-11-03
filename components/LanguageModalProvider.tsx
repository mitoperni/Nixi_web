'use client';

import React from 'react';
import { LanguageModal } from './LanguageModal';
import { useLanguagePreference } from '@/hooks/useLanguagePreference';

export const LanguageModalProvider: React.FC = () => {
  const { showModal, currentLanguage, confirmLanguage, switchLanguage } = useLanguagePreference();

  return (
    <LanguageModal
      isOpen={showModal}
      currentLanguage={currentLanguage}
      onConfirm={confirmLanguage}
      onSwitch={switchLanguage}
    />
  );
};
