import Link from 'next/link';
import { BookOpen, Users, PenTool, Library, ArrowRight } from 'lucide-react';

const HomePage = () => {
    return (
        <main className="min-h-screen">
            {/* Hero Banner */}
            <section className="relative overflow-hidden bg-linear-to-r from-green-600 via-red-300 to-orange-200 text-white">
                <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-6 py-24 lg:flex-row">
                    {/* Hero Content */}
                    <div className="max-w-2xl space-y-6">
                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Publish Your Story,
                            <br />
                            <span className="text-yellow-300">
                                Inspire The World
                            </span>
                        </h1>

                        <p className="text-lg leading-relaxed text-white/90 md:text-xl">
                            Turn your ideas into published books and share your
                            creativity with readers around the world through
                            Prisma Press.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/books"
                                className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-red-600 transition hover:bg-orange-300"
                            >
                                Explore Books
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/author/register"
                                className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-red-600"
                            >
                                Become An Author
                            </Link>
                        </div>
                    </div>

                    {/* Banner Illustration */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute h-72 w-72 rounded-full bg-white/20 blur-3xl" />

                        <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl bg-white shadow-2xl md:h-96 md:w-96">
                            <BookOpen
                                size={170}
                                strokeWidth={1.5}
                                className="text-red-600"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="container mx-auto grid gap-6 px-6 py-16 md:grid-cols-3">
                <StatCard
                    icon={<BookOpen size={30} />}
                    title="10K+"
                    description="Published News"
                />

                <StatCard
                    icon={<Users size={30} />}
                    title="5K+"
                    description="Active Readers"
                />

                <StatCard
                    icon={<PenTool size={30} />}
                    title="1K+"
                    description="Professional Authors"
                />
            </section>

            {/* Categories Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="mb-10 text-center text-3xl font-bold">
                        Explore Our Categories
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            'Fiction',
                            'Technology',
                            'Education',
                            'Biography',
                        ].map((category) => (
                            <div
                                key={category}
                                className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <Library
                                    size={40}
                                    className="mx-auto mb-4 text-red-500"
                                />

                                <h3 className="text-lg font-semibold">
                                    {category}
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    Discover amazing {category.toLowerCase()}{' '}
                                    books.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

// Reusable Statistics Card
function StatCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="flex items-center gap-5 rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="rounded-lg bg-red-100 p-4 text-red-600">{icon}</div>

            <div>
                <h3 className="text-3xl font-bold">{title}</h3>

                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
}

export default HomePage;
