import { Check, X, Crown } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: 'Free',
        price: '$0',
        period: '/month',
        description: 'Perfect for beginners and personal blogging.',
        button: 'Get Started',
        href: '/register',
        featured: false,
        features: [
            { text: 'Create up to 5 posts', included: true },
            { text: 'Basic user profile', included: true },
            { text: 'Comment on posts', included: true },
            { text: 'Community support', included: true },
            { text: 'Advanced analytics', included: false },
            { text: 'Featured posts', included: false },
            { text: 'Priority support', included: false },
            { text: 'Unlimited posts', included: false },
        ],
    },
    {
        name: 'Pro',
        price: '$9',
        period: '/month',
        description: 'Best for creators and professional writers.',
        button: 'Upgrade Now',
        href: '/premium',
        featured: true,
        features: [
            { text: 'Unlimited posts', included: true },
            { text: 'Advanced analytics', included: true },
            { text: 'Featured articles', included: true },
            { text: 'Priority support', included: true },
            { text: 'Premium badge', included: true },
            { text: 'Custom profile', included: true },
            { text: 'API access', included: true },
            { text: 'Early access features', included: true },
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Designed for teams and organizations.',
        button: 'Contact Sales',
        href: '/contact',
        featured: false,
        features: [
            { text: 'Everything in Pro', included: true },
            { text: 'Unlimited team members', included: true },
            { text: 'Dedicated support', included: true },
            { text: 'Custom integrations', included: true },
            { text: 'Advanced security', included: true },
            { text: 'Private deployment', included: true },
            { text: 'Training sessions', included: true },
            { text: 'SLA support', included: true },
        ],
    },
];

const PricingPage = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-linear-to-r from-indigo-700 via-blue-700 to-cyan-600 py-24 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold">
                        Simple, Transparent Pricing
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
                        Choose the plan that fits your blogging journey. Upgrade
                        anytime as your audience grows.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid gap-10 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl ${
                                plan.featured
                                    ? 'border-indigo-600 ring-2 ring-indigo-600'
                                    : ''
                            }`}
                        >
                            {plan.featured && (
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                                    <Crown className="h-4 w-4" />
                                    Most Popular
                                </div>
                            )}

                            <h2 className="text-3xl font-bold">{plan.name}</h2>

                            <p className="mt-4 text-slate-600">
                                {plan.description}
                            </p>

                            <div className="mt-8">
                                <span className="text-5xl font-bold">
                                    {plan.price}
                                </span>

                                <span className="text-slate-500">
                                    {plan.period}
                                </span>
                            </div>

                            <Link
                                href={plan.href}
                                className={`mt-8 block rounded-xl py-4 text-center font-semibold transition ${
                                    plan.featured
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                        : 'border hover:bg-slate-100'
                                }`}
                            >
                                {plan.button}
                            </Link>

                            <div className="mt-10 space-y-4">
                                {plan.features.map((feature) => (
                                    <div
                                        key={feature.text}
                                        className="flex items-center gap-3"
                                    >
                                        {feature.included ? (
                                            <Check className="h-5 w-5 text-green-600" />
                                        ) : (
                                            <X className="h-5 w-5 text-red-500" />
                                        )}

                                        <span
                                            className={
                                                feature.included
                                                    ? ''
                                                    : 'text-slate-400 line-through'
                                            }
                                        >
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl font-bold">
                            Why Upgrade to Pro?
                        </h2>

                        <p className="mt-6 text-lg text-slate-600">
                            Unlock premium publishing tools, advanced analytics,
                            featured content, API access, and priority support
                            to grow your audience faster.
                        </p>

                        <div className="mt-12 grid gap-8 md:grid-cols-4">
                            <div>
                                <h3 className="text-4xl font-bold text-indigo-600">
                                    Unlimited
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    Blog Posts
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-indigo-600">
                                    24/7
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    Priority Support
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-indigo-600">
                                    API
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    Premium Access
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-indigo-600">
                                    Analytics
                                </h3>
                                <p className="mt-2 text-slate-600">Dashboard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-center text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>

                    <div className="mt-12 space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold">
                                Can I upgrade later?
                            </h3>

                            <p className="mt-2 text-slate-300">
                                Yes. You can upgrade from the Free plan to Pro
                                at any time without losing your content.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">
                                Is there a free trial?
                            </h3>

                            <p className="mt-2 text-slate-300">
                                The Free plan is available forever, allowing you
                                to try the platform before upgrading.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">
                                Do you offer refunds?
                            </h3>

                            <p className="mt-2 text-slate-300">
                                Yes. Refund policies depend on your subscription
                                terms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PricingPage;
