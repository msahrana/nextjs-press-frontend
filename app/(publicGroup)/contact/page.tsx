'use client';

import { GithubLogoIcon } from '@phosphor-icons/react';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    Globe,
} from 'lucide-react';

const contactInfo = [
    {
        title: 'Email',
        value: 'support@prismapress.com',
        description: "We'll respond within 24 hours.",
        icon: Mail,
    },
    {
        title: 'Phone',
        value: '+1 (555) 123-4567',
        description: 'Monday - Friday, 9 AM - 6 PM',
        icon: Phone,
    },
    {
        title: 'Office',
        value: 'Dhaka, Bangladesh',
        description: 'Remote-first development team',
        icon: MapPin,
    },
    {
        title: 'Working Hours',
        value: 'Mon - Fri',
        description: '09:00 AM - 06:00 PM',
        icon: Clock,
    },
];

const faqs = [
    {
        question: 'How quickly do you reply?',
        answer: 'Most emails receive a response within one business day.',
    },
    {
        question: 'Can I request new features?',
        answer: 'Absolutely! We welcome feature requests and community feedback.',
    },
    {
        question: 'Do you provide technical support?',
        answer: 'Yes. Premium users receive priority technical support.',
    },
];

const ContactPage = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-linear-to-r from-indigo-700 via-blue-700 to-cyan-600 py-24 text-white">
                <div className="container mx-auto max-w-5xl px-6 text-center">
                    <h1 className="text-5xl font-bold">Contact Us</h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
                        Have a question, feature request, or partnership idea?
                        We`d love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {contactInfo.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                            >
                                <div className="mb-6 inline-flex rounded-xl bg-indigo-100 p-4">
                                    <Icon className="h-7 w-7 text-indigo-700" />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 font-medium">{item.value}</p>

                                <p className="mt-2 text-sm text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Form */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="grid gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl font-bold">
                                Send Us a Message
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Fill out the form below and our team will get
                                back to you as soon as possible.
                            </p>

                            <form className="mt-10 space-y-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <textarea
                                    rows={6}
                                    placeholder="Write your message..."
                                    className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <button
                                    type="submit"
                                    className="flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700"
                                >
                                    <Send className="h-5 w-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <div className="rounded-3xl bg-slate-900 p-10 text-white">
                                <MessageCircle className="mb-6 h-12 w-12 text-cyan-400" />

                                <h3 className="text-3xl font-bold">
                                    Let`s Build Something Amazing
                                </h3>

                                <p className="mt-6 leading-8 text-slate-300">
                                    Whether you`re building a personal blog or
                                    an enterprise publishing platform, Prisma
                                    Press is here to help you succeed.
                                </p>

                                <div className="mt-10 space-y-5">
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5" />
                                        support@prismapress.com
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5" />
                                        +1 (555) 123-4567
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <MapPin className="h-5 w-5" />
                                        Dhaka, Bangladesh
                                    </div>
                                </div>

                                <div className="mt-10 flex gap-5">
                                    <button className="rounded-full bg-white/10 p-3 hover:bg-white/20">
                                        <GithubLogoIcon className="h-6 w-6" />
                                    </button>

                                    <button className="rounded-full bg-white/10 p-3 hover:bg-white/20">
                                        <Globe className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-center text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>

                    <div className="mt-12 space-y-8">
                        {faqs.map((faq) => (
                            <div
                                key={faq.question}
                                className="rounded-2xl bg-white p-8 shadow"
                            >
                                <h3 className="text-xl font-semibold">
                                    {faq.question}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="bg-indigo-700 py-20 text-white">
                <div className="container mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-4xl font-bold">Stay Updated</h2>

                    <p className="mt-5 text-lg text-indigo-100">
                        Subscribe to receive the latest news, product updates,
                        and feature announcements.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 rounded-xl bg-linear-to-r from-orange-200 via-red-300 to-green-600 px-5 py-4 text-black outline-none"
                        />

                        <button className="rounded-xl bg-white px-8 py-4 font-semibold text-indigo-700 transition hover:bg-green-600 hover:text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
