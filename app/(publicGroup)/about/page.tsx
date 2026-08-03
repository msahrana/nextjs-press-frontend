import {
    BookOpen,
    Target,
    Eye,
    HeartHandshake,
    ShieldCheck,
    Rocket,
    Database,
    Code2,
    Users,
    CheckCircle2,
} from 'lucide-react';

const values = [
    {
        title: 'Quality Content',
        description:
            'We believe great ideas deserve a powerful publishing platform.',
        icon: BookOpen,
    },
    {
        title: 'Security',
        description:
            'Authentication, authorization, and secure APIs are built into the platform.',
        icon: ShieldCheck,
    },
    {
        title: 'Innovation',
        description:
            'Modern technologies help developers build faster and scale confidently.',
        icon: Rocket,
    },
    {
        title: 'Community',
        description:
            'We encourage meaningful discussions between writers and readers.',
        icon: HeartHandshake,
    },
];

const technologies = [
    'Next.js',
    'Express.js',
    'TypeScript',
    'Prisma ORM',
    'PostgreSQL',
    'JWT Authentication',
    'Tailwind CSS',
    'REST API',
];

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-linear-to-r from-indigo-700 via-blue-700 to-cyan-600 py-24 text-white">
                <div className="container mx-auto max-w-5xl px-6 text-center">
                    <h1 className="text-5xl font-bold">About Prisma Press</h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
                        Prisma Press is a modern blogging platform designed for
                        developers, creators, and organizations who want a fast,
                        secure, and scalable content management experience.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-bold">Our Story</h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            Prisma Press was created with one goal: make
                            publishing simple without sacrificing performance or
                            security. Whether you`re writing technical
                            tutorials, personal blogs, or company articles, the
                            platform provides everything needed to publish with
                            confidence.
                        </p>

                        <p className="mt-6 leading-8 text-slate-600">
                            Built using modern web technologies, Prisma Press
                            combines Express.js, Prisma ORM, PostgreSQL, JWT
                            Authentication, and Next.js into a clean and
                            scalable architecture.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-10 shadow-lg">
                        <div className="space-y-8">
                            <div className="flex gap-5">
                                <Target className="mt-1 h-8 w-8 text-indigo-600" />
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        Our Mission
                                    </h3>
                                    <p className="mt-2 text-slate-600">
                                        Empower writers and developers with
                                        modern publishing tools.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <Eye className="mt-1 h-8 w-8 text-indigo-600" />
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        Our Vision
                                    </h3>
                                    <p className="mt-2 text-slate-600">
                                        Become a trusted platform for secure and
                                        scalable content publishing worldwide.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <Users className="mt-1 h-8 w-8 text-indigo-600" />
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        Our Community
                                    </h3>
                                    <p className="mt-2 text-slate-600">
                                        We help creators connect with readers
                                        through meaningful conversations and
                                        engaging content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-14 text-center">
                        <h2 className="text-4xl font-bold">Our Core Values</h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                            Every feature in Prisma Press is built around these
                            principles.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <div
                                    key={value.title}
                                    className="rounded-2xl border bg-slate-50 p-8 transition hover:shadow-xl"
                                >
                                    <div className="mb-6 inline-flex rounded-xl bg-indigo-100 p-4">
                                        <Icon className="h-7 w-7 text-indigo-700" />
                                    </div>

                                    <h3 className="text-xl font-semibold">
                                        {value.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-bold">
                            Built with Modern Technology
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Prisma Press follows modern development practices
                            using a production-ready technology stack for speed,
                            reliability, and scalability.
                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-5">
                            {technologies.map((tech) => (
                                <div
                                    key={tech}
                                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />

                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl bg-linear-to-br from-slate-900 to-slate-700 p-10 text-white">
                        <Database className="mb-6 h-12 w-12" />

                        <h3 className="text-3xl font-bold">Developer First</h3>

                        <p className="mt-6 leading-8 text-slate-300">
                            Our modular backend architecture, Prisma ORM
                            integration, TypeScript support, and REST APIs make
                            Prisma Press easy to extend and maintain for
                            projects of any size.
                        </p>

                        <div className="mt-10 flex items-center gap-4">
                            <Code2 className="h-8 w-8 text-cyan-400" />

                            <span className="text-lg">
                                Clean Architecture & Scalable APIs
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-4xl font-bold">
                        Join the Prisma Press Community
                    </h2>

                    <p className="mx-auto mt-6 text-lg text-slate-300">
                        Start publishing articles, share your knowledge, and
                        connect with readers around the world using a secure and
                        modern blogging platform.
                    </p>

                    <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-200">
                        Start Writing Today
                    </button>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
