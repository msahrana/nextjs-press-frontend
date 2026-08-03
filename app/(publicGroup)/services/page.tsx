import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import {
    FileText,
    ShieldCheck,
    BarChart3,
    Settings2,
    Search,
    MessageSquare,
} from 'lucide-react';

// Define the services data based on Prisma Press backend features
const services = [
    {
        title: 'Content Management',
        description:
            'Effortlessly create, edit, and manage blog posts with a robust Prisma-powered backend and intuitive API endpoints.',
        icon: FileText,
    },
    {
        title: 'Secure Authentication',
        description:
            "Built-in JWT and bcrypt security protocols ensure your users' data, profiles, and passwords are always protected.",
        icon: ShieldCheck,
    },
    {
        title: 'Admin Analytics',
        description:
            'Track post views, user growth, and comment metrics with a dedicated admin dashboard and reporting endpoints.',
        icon: BarChart3,
    },
    {
        title: 'Modular Architecture',
        description:
            'Built with Express and TypeScript, ensuring your backend remains scalable, maintainable, and lightning fast.',
        icon: Settings2,
    },
    {
        title: 'Advanced Search',
        description:
            'Find content instantly with powerful query parameters for tags, authors, status, and featured posts.',
        icon: Search,
    },
    {
        title: 'Comment Moderation',
        description:
            'Keep your community safe with built-in tools allowing admins to approve, reject, or delete user comments.',
        icon: MessageSquare,
    },
];

export default function Services() {
    return (
        <section id="services" className="w-full py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                        Our Services
                    </h2>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        We provide top-notch services to help you scale your
                        blog and manage your content effortlessly using Prisma
                        Press.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card
                                key={index}
                                className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-primary/50"
                            >
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
