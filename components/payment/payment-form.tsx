'use client';

import { useState, useEffect } from 'react';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { stripePromise, appearance } from '@/lib/stripe';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface PaymentFormProps {
  clientSecret: string;
  amount: number;
  productName: string;
  returnUrl: string;
}

function CheckoutForm({ amount, productName, returnUrl }: Omit<PaymentFormProps, 'clientSecret'>) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: returnUrl,
        },
      });

      if (error) {
        setErrorMessage(error.message ?? 'An error occurred during payment.');
      }
    } catch (e) {
      setErrorMessage('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Order Summary</h3>
          <span className="text-secondary font-bold">${amount.toFixed(2)}</span>
        </div>
        <p className="text-slate-300">{productName}</p>
      </div>

      <div className="space-y-4">
        <PaymentElement />

        {errorMessage && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg p-4 text-sm">
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          disabled={!stripe || isLoading}
          className="w-full bg-secondary hover:bg-secondary/90"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            `Pay $${amount.toFixed(2)}`
          )}
        </Button>
      </div>
    </form>
  );
}

export default function PaymentForm({ clientSecret, amount, productName, returnUrl }: PaymentFormProps) {
  const options = {
    clientSecret,
    appearance,
    layout: {
      type: 'accordion' as const,
      defaultCollapsed: false,
      radios: true,
      spacedAccordionItems: true,
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amount} productName={productName} returnUrl={returnUrl} />
    </Elements>
  );
}
