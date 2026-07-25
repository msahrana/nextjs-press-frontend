/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { toast } from 'sonner';

interface IUserProfile {
    id: string;

    name: string;

    email: string;

    role: string;

    profile?: {
        profilePhoto?: string;

        bio?: string;
    };
}

interface ProfileFormProps {
    profile: IUserProfile;
}

const ProfileForm = ({ profile }: ProfileFormProps) => {
    const initialProfileData = {
        name: profile.name || '',

        email: profile.email || '',

        profilePhoto: profile.profile?.profilePhoto || '',

        bio: profile.profile?.bio || '',
    };

    const [initialData, setInitialData] = useState(initialProfileData);

    const [formData, setFormData] = useState(initialProfileData);

    const [loading, setLoading] = useState(false);

    const isChanged = JSON.stringify(formData) !== JSON.stringify(initialData);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData((prev) => ({
            ...prev,

            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isChanged) return;

        try {
            setLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users/my-profile`,

                {
                    method: 'PUT',

                    credentials: 'include',

                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(formData),
                },
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || 'Profile update failed');
            }

            toast.success('Profile updated successfully');

            // make current data as initial data
            setInitialData(formData);
        } catch (error: any) {
            toast.error(error.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const imageUrl = formData.profilePhoto || '/default-avatar.png';

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                    My Profile :
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div
                    className="
                    grid
                    md:grid-cols-3
                    gap-8
                "
                >
                    {/* Profile Preview */}

                    <div
                        className="
                        flex
                        flex-col
                        items-center
                        gap-4
                    "
                    >
                        <Image
                            src={imageUrl}
                            width={200}
                            height={200}
                            alt="Profile Photo"
                            loading="eager"
                            priority
                            unoptimized
                            className="rounded-full border object-cover"
                        />

                        <h2
                            className="
                            text-xl
                            font-semibold
                        "
                        >
                            {formData.name}
                        </h2>

                        <p
                            className="
                            text-muted-foreground
                        "
                        >
                            {formData.email}
                        </p>

                        <span
                            className="
                            bg-primary
                            text-primary-foreground
                            px-3
                            py-1
                            rounded-full
                            text-sm
                        "
                        >
                            {profile.role}
                        </span>
                    </div>

                    {/* Update Form */}

                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label>Name:</label>

                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Email:</label>

                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Profile Photo URL:</label>

                                <Input
                                    name="profilePhoto"
                                    value={formData.profilePhoto}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Bio:</label>

                                <Textarea
                                    name="bio"
                                    rows={5}
                                    value={formData.bio}
                                    onChange={handleChange}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading || !isChanged}
                                className="w-full"
                            >
                                {loading ? 'Updating...' : 'Update Profile'}
                            </Button>
                        </form>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileForm;
