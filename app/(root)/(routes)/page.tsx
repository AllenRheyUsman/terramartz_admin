'use client';

// Libraries
import { useEffect } from 'react';

// Hooks
import { useStoreModal } from '@/hooks/use-store-modal';

// Components (uncomment if needed)
// import { Modal } from '@/components/ui/modal';

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}

export default SetupPage;


