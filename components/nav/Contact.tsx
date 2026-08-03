import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin } from 'lucide-react';
import { GithubLogoIcon } from '@phosphor-icons/react';

export default function Contact() {
    return (
        <section id="contact" className="w-full py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
                    {/* Left Column: Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                Get in touch
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Have questions about integrating Prisma Press
                                into your project? Need enterprise support?
                                Reach out to us.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground">
                                        Email
                                    </h3>
                                    <p className="text-muted-foreground">
                                        support@prismapress.dev
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground">
                                        Location
                                    </h3>
                                    <p className="text-muted-foreground">
                                        San Francisco, California
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                    <GithubLogoIcon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground">
                                        GitHub
                                    </h3>
                                    <p className="text-muted-foreground">
                                        github.com/prisma-press
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-muted/30 p-8 rounded-xl border border-border shadow-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">
                                        First name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        placeholder="John"
                                        className="bg-background"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Doe"
                                        className="bg-background"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="bg-background"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    placeholder="How can we help?"
                                    className="bg-background"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us a little bit about your project..."
                                    className="bg-background min-h-30 resize-none"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full" size="lg">
                                Send message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
