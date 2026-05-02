'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { pricingPlans } from '@/lib/dummy-data';
import { Check, X } from 'lucide-react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">

      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Simple Pricing
        </h1>
        <p className="text-muted-foreground mb-8">
          Choose a plan that fits your learning journey
        </p>

        {/* MODERN TOGGLE */}
        <div className="flex justify-center">
          <div className="relative flex bg-muted p-1 rounded-full w-[260px]">
            
            <div
              className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-primary transition-all duration-300 ${
                billingPeriod === 'monthly' ? 'left-1' : 'left-[50%]'
              }`}
            />

            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`w-1/2 z-10 py-2 text-sm font-semibold ${
                billingPeriod === 'monthly' ? 'text-white' : 'text-muted-foreground'
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBillingPeriod('annual')}
              className={`w-1/2 z-10 py-2 text-sm font-semibold ${
                billingPeriod === 'annual' ? 'text-white' : 'text-muted-foreground'
              }`}
            >
              Annual
            </button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">

          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-[2px] transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? 'bg-gradient-to-r from-primary to-purple-500'
                  : 'bg-border'
              }`}
            >
              <div
                className={`rounded-3xl p-8 h-full transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary to-primary/80 text-white shadow-2xl'
                    : 'bg-white hover:shadow-xl'
                }`}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <span className="absolute top-4 right-4 text-xs bg-white text-primary px-3 py-1 rounded-full font-semibold animate-pulse">
                    MOST POPULAR
                  </span>
                )}

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="mb-6 opacity-80">{plan.description}</p>

                {/* PRICE */}
                <div className="mb-6">
                  <div
                    key={billingPeriod}
                    className="text-5xl font-bold transition-all duration-300"
                  >
                    ₹
                    {billingPeriod === 'monthly'
                      ? plan.offerPrice ?? plan.price
                      : Math.floor((plan.annualPrice ?? 0) / 12)}
                    <span className="text-lg"> /month</span>
                  </div>

                  {/* strike */}
                  {plan.offerPrice && billingPeriod === 'monthly' && (
                    <div className="line-through text-sm opacity-70">
                      ₹{plan.price}
                    </div>
                  )}

                  {/* annual */}
                  {billingPeriod === 'annual' && (
                    <div className="text-sm opacity-70">
                      ₹{plan.annualPrice} billed yearly
                    </div>
                  )}

                  {/* offer badge */}
                  {plan.offerPrice && (
                    <span className="inline-block mt-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                      LIMITED OFFER
                    </span>
                  )}
                </div>

                {/* BUTTON */}
                <Button
                  className={`w-full mb-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  Get Started
                </Button>

                {/* FEATURES */}
                <ul className="space-y-3">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                    >
                      <Check size={18} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CLASSES */}
                <div className="mt-8">
                  <p className="text-sm mb-2 opacity-80">Best for:</p>
                  <div className="flex flex-wrap gap-2">
                    {plan.classes.map((c, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-16 bg-white border-y">
        <h2 className="text-3xl font-bold text-center mb-10">
          Feature Comparison
        </h2>

        <div className="overflow-x-auto max-w-5xl mx-auto px-4">
          <table className="w-full border rounded-xl overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="p-4 text-left">Feature</th>
                {pricingPlans.map(plan => (
                  <th key={plan.id} className="p-4 text-center">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                ['Live Classes', [false, true]],
                ['Recorded Classes', [true, true]],
                ['Mentor Support', [false, true]],
                ['Test Series', [false, true]],
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4">{row[0]}</td>
                  {row[1].map((val: any, idx: number) => (
                    <td key={idx} className="text-center">
                      {val ? (
                        <Check className="mx-auto text-green-500" />
                      ) : (
                        <X className="mx-auto text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ (UNCHANGED + slight animation) */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 px-4">
          {[
            {
              q: 'Can I change my plan anytime?',
              a: 'Yes, you can upgrade or downgrade anytime.'
            },
            {
              q: 'Do you offer refund?',
              a: 'Yes, 7-day money back guarantee.'
            },
            {
              q: 'Hidden charges?',
              a: 'No hidden fees at all.'
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-primary to-purple-500 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Start Learning Today 🚀
        </h2>
        <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4">
          Get Started
        </Button>
      </section>

    </div>
  );
}