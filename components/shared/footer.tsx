import Link from 'next/link';
import {
    BookOpen,
    Inspect,
    Mail,
    MapPin,
    Phone,
    User,
    User2,
} from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-linear-to-r from-orange-200 via-red-300 to-green-600">
            <div className="container mx-auto px-6 py-12">
                {/* Top Footer */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-2xl font-bold"
                        >
                            <BookOpen className="text-red-500" size={32} />
                            Prisma Press
                        </Link>

                        <p className="text-sm text-muted-foreground">
                            Turn your ideas into published books and share your
                            creativity with readers around the world through
                            Prisma Press.
                        </p>

                        <div className="flex gap-2">
                            <Button size="icon" variant="outline">
                                <User2 size={18} />
                            </Button>

                            <Button size="icon" variant="outline">
                                <User size={18} />
                            </Button>

                            <Button size="icon" variant="outline">
                                <Inspect size={18} />
                            </Button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-4 font-semibold">Quick Links</h3>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-red-500">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/books"
                                    className="hover:text-red-500"
                                >
                                    Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/authors"
                                    className="hover:text-red-500"
                                >
                                    Authors
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-red-500"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Author */}
                    <div>
                        <h3 className="mb-4 font-semibold">For Authors</h3>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="/author/register"
                                    className="hover:text-red-500"
                                >
                                    Become an Author
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/author/dashboard"
                                    className="hover:text-red-500"
                                >
                                    Author Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/publish"
                                    className="hover:text-red-500"
                                >
                                    Publish Book
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-red-500"
                                >
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 font-semibold">Contact</h3>

                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div className="flex gap-3">
                                <MapPin size={20} className="text-red-500" />

                                <span>Dhaka, Bangladesh</span>
                            </div>

                            <div className="flex gap-3">
                                <Mail size={20} className="text-red-500" />

                                <span>support@prismapress.com</span>
                            </div>

                            <div className="flex gap-3">
                                <Phone size={20} className="text-red-500" />

                                <span>+880 1234-567890</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Prisma Press. All rights
                        reserved.
                    </p>

                    <div className="flex gap-5">
                        <Link href="/privacy" className="hover:text-red-500">
                            Privacy Policy
                        </Link>

                        <Link href="/terms" className="hover:text-red-500">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
