'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { pricingPlans } from '@/lib/dummy-data';
import { Check, X } from 'lucide-react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Choose the perfect plan for your learning journey. Upgrade or downgrade anytime.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-primary text-white'
                    : 'bg-white border border-border text-foreground hover:bg-muted'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  billingPeriod === 'annual'
                    ? 'bg-primary text-white'
                    : 'bg-white border border-border text-foreground hover:bg-muted'
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-secondary text-white px-2 py-1 rounded-full">Save 17%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl overflow-hidden transition-all ${
                  plan.highlighted
                    ? 'md:scale-105 bg-gradient-to-br from-primary to-primary/80 text-white shadow-2xl'
                    : 'bg-white border border-border'
                }`}
              >
                {/* Recommended Badge */}
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  <p className={plan.highlighted ? 'text-white/80 mb-6' : 'text-muted-foreground mb-6'}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                        ₹{billingPeriod === 'monthly' ? plan.price : Math.floor(plan.annualPrice! / 12)}
                      </span>
                      <span className={plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}>
                        /month
                      </span>
                    </div>
                    {billingPeriod === 'annual' && (
                      <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                        Billed ₹{plan.annualPrice} annually
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mb-8 font-semibold py-3 rounded-lg ${
                      plan.highlighted
                        ? 'bg-white text-primary hover:bg-white/90'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    Get Started
                  </Button>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className={`font-semibold text-sm ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                      What's included:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.highlighted ? 'text-white' : 'text-primary'
                          }`} />
                          <span className={plan.highlighted ? 'text-white/90' : 'text-muted-foreground'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Classes Info */}
                  <div className={`mt-8 pt-8 border-t ${plan.highlighted ? 'border-white/20' : 'border-border'}`}>
                    <p className={`text-xs font-semibold mb-3 ${plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                      Best for these grades:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {plan.classes.map((cls, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-3 py-1 rounded-full ${
                            plan.highlighted
                              ? 'bg-white/20 text-white'
                              : 'bg-primary/10 text-primary'
                          }`}
                        >
                          {cls}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  {pricingPlans.map(plan => (
                    <th key={plan.id} className="text-center py-4 px-4 font-semibold text-foreground">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-foreground">Live Classes</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-border bg-muted/50">
                  <td className="py-4 px-4 text-foreground">Recorded Classes</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-foreground">1-on-1 Sessions</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-border bg-muted/50">
                  <td className="py-4 px-4 text-foreground">Personal Mentor</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-foreground">24/7 Support</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="py-4 px-4 text-foreground">Lifetime Access</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I change my plan anytime?',
                a: 'Yes, you can upgrade or downgrade your plan anytime. Changes take effect at the next billing cycle.'
              },
              {
                q: 'Do you offer a refund policy?',
                a: 'We offer a 7-day money-back guarantee if you are not satisfied with our courses.'
              },
              {
                q: 'Are there any hidden charges?',
                a: 'No, the price you see is the price you pay. There are no hidden charges or surprise fees.'
              },
              {
                q: 'Do you offer discounts for annual subscriptions?',
                a: 'Yes, we offer 17% discount on annual subscriptions compared to monthly pricing.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of students already learning with Zenith Institute
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}
