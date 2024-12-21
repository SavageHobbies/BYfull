'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export default function PaymentSuccessPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const searchParams = useSearchParams();
  const paymentIntentId = searchParams.get('payment_intent');

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await fetch(`/api/check-payment-status?payment_intent=${paymentIntentId}`);
        const data = await response.json();
        
        setStatus(data.status === 'succeeded' ? 'success' : 'error');
      } catch (error) {
        setStatus('error');
      }
    };

    if (paymentIntentId) {
      checkPaymentStatus();
    }
  }, [paymentIntentId]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        {status === 'loading' ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
            <p className="mt-4 text-slate-300">Confirming your payment...</p>
          </div>
        ) : status === 'success' ? (
          <div className="text-center space-y-6">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
            <h1 className="text-2xl font-bold">Payment Successful!</h1>
            <p className="text-slate-300">
              Thank you for your purchase. We'll be in touch shortly with next steps.
            </p>
            <div className="space-y-4">
              <Link href="/">
                <Button className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
              <XCircle className="h-10 w-10 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold">Payment Failed</h1>
            <p className="text-slate-300">
              Something went wrong with your payment. Please try again or contact support.
            </p>
            <div className="space-y-4">
              <Link href="/pricing">
                <Button className="w-full">Try Again</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full">Contact Support</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
