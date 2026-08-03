import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

const tiers = [
    {
        name: 'Starter',
        price: '$0',
        description: 'Perfect for individual writers getting started.',
        features: [
            'Up to 100 posts',
            'Basic comment moderation',
            'Standard authentication',
            'Community support',
        ],
        cta: 'Get Started',
        highlighted: false,
    },
    {
        name: 'Pro',
        price: '$29',
        description: 'For growing publications that need more power.',
        features: [
            'Unlimited posts',
            'Advanced analytics & stats',
            'Role-based access (Admin/User)',
            'Premium tags & search filtering',
            'Priority support',
        ],
        cta: 'Upgrade to Pro',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: '$99',
        description: 'Advanced features for large-scale operations.',
        features: [
            'Everything in Pro',
            'Dedicated server resources',
            'Custom Prisma adapters',
            'SSO & Advanced Security',
            '24/7 Phone Support',
        ],
        cta: 'Contact Sales',
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="w-full py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        Choose the plan that fits your needs. No hidden fees,
                        cancel anytime.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <Card
                            key={index}
                            className={`relative flex flex-col transition-all duration-300 ${
                                tier.highlighted
                                    ? 'border-primary border-2 shadow-lg scale-105 z-10'
                                    : 'border-border shadow-sm hover:shadow-md'
                            }`}
                        >
                            {tier.highlighted && (
                                <span className="absolute -top-1 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </span>
                            )}

                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    {tier.name}
                                </CardTitle>
                                <CardDescription>
                                    {tier.description}
                                </CardDescription>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-bold text-foreground">
                                        {tier.price}
                                    </span>
                                    <span className="ml-1 text-muted-foreground">
                                        /mo
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className="flex grow">
                                <ul className="space-y-3">
                                    {tier.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-3"
                                        >
                                            <Check className="w-5 h-5 text-primary shrink-0" />
                                            <span className="text-sm text-foreground">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    className="w-full"
                                    variant={
                                        tier.highlighted ? 'default' : 'outline'
                                    }
                                >
                                    {tier.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
