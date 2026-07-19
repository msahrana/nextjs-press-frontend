'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    CircleUserRound,
    LayoutDashboard,
    LogOut,
    Menu,
    Settings,
    User,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

const userMenuItems = [
    { label: 'Profile', href: '/profile', icon: User },
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Settings', href: '/settings', icon: Settings },
];

type IUser = {
    success: boolean;
    message: string;
    data: {
        profile: {
            id: string;
            name: string;
            email: string;
            activeStatus: string;
            role: string;
            createdAt: string;
            updatedAt: string;
            profile: {
                id: string;
                profilePhoto: string;
                bio: string | null;
                userId: string;
                createdAt: string;
                updatedAt: string;
            };
        };
    };
};

type NavbarProps = {
    user: IUser;
};

export function Navbar({ user }: NavbarProps) {
    const pathname = usePathname();
    const router = useRouter();

    const getInitials = (name: string) => {
        if (!name) return '';

        const words = name.trim().split(/\s+/);
        // Single name: first + last character (Tara -> TR)
        if (words.length === 1) {
            const word = words[0];
            return (word[0] + (word[word.length - 1] || '')).toUpperCase();
        }
        // Multiple names: first letter of first and last word
        return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    };

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', {
                method: 'POST',
            });
            router.push('/login');
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <CircleUserRound className="size-6 text-primary" />
                    <span className="text-2xl font-bold text-primary tracking-tight">
                        Nextjs Press.
                    </span>
                </Link>

                {/* Desktop nav links */}
                <ul className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={cn(
                                        'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                                        isActive && 'text-foreground',
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Right side: mobile menu + user dropdown */}
                <div className="flex items-center gap-2">
                    {/* Mobile nav dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                    size: 'icon',
                                }),
                                'md:hidden',
                            )}
                        >
                            <Menu />
                            <span className="sr-only">
                                Toggle navigation menu
                            </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuGroup>
                                {navLinks.map((link) => (
                                    <DropdownMenuItem
                                        key={link.href}
                                        onClick={() => router.push(link.href)}
                                    >
                                        {link.label}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* User dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                    size: 'icon',
                                }),
                                'rounded-full',
                            )}
                        >
                            <Avatar className="size-8">
                                <AvatarImage
                                    src={
                                        user.data?.profile.profile
                                            ?.profilePhoto ||
                                        '/diverse-user-avatars.png'
                                    }
                                    alt={
                                        user.data?.profile.name || 'User avatar'
                                    }
                                />
                                <AvatarFallback>
                                    {getInitials(user.data?.profile.name || '')}
                                </AvatarFallback>
                            </Avatar>
                            <span className="sr-only">Open user menu</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <div className="flex flex-col gap-0.5 px-1.5 py-1.5">
                                <span className="text-sm font-medium">
                                    {user.data?.profile.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    {user.data?.profile.email}
                                </span>
                            </div>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                {userMenuItems.map((item) => (
                                    <DropdownMenuItem
                                        key={item.href}
                                        onClick={() => router.push(item.href)}
                                    >
                                        <item.icon />
                                        {item.label}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            {user?.data?.profile ? (
                                <DropdownMenuItem
                                    variant="destructive"
                                    onClick={handleLogout}
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Sign out
                                </DropdownMenuItem>
                            ) : (
                                <DropdownMenuItem
                                    onClick={() => router.push('/login')}
                                >
                                    <User className="mr-2 h-4 w-4" />
                                    Sign in
                                </DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </header>
    );
}
