'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import PaymentForm from './payment-form';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  productName: string;
}

export default function PaymentModal({
  isOpen,
  onClose,
  amount,
  productName,
}: PaymentModalProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const createPaymentIntent = async () => {
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          metadata: {
            productName,
          },
        }),
      });

      const data = await response.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    } catch (error) {
      console.error('Error creating payment intent:', error);
    }
  };

  // Create payment intent when modal opens
  if (isOpen && !clientSecret) {
    createPaymentIntent();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
        </DialogHeader>
        {clientSecret ? (
          <PaymentForm
            clientSecret={clientSecret}
            amount={amount}
            productName={productName}
            returnUrl={`${window.location.origin}/payment/success`}
          />
        ) : (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary"></div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
