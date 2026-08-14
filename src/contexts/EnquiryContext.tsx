import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export interface EnquiryTarget {
  ref?: string;
  name?: string;
}

interface EnquiryValue {
  isOpen: boolean;
  target: EnquiryTarget;
  openEnquiry: (target?: EnquiryTarget) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryValue | null>(null);

export function EnquiryProvider({ children }: {children: React.ReactNode;}) {
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState<EnquiryTarget>({});

  const openEnquiry = useCallback((next: EnquiryTarget = {}) => {
    setTarget(next);
    setIsOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, target, openEnquiry, closeEnquiry }),
    [isOpen, target, openEnquiry, closeEnquiry]
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry(): EnquiryValue {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider');
  return ctx;
}