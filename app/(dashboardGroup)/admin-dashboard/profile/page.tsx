import ProfileForm from '../../dashboard/profile/_components/profile-form';
import { cookies } from 'next/headers';

const getMyProfile = async () => {
    const cookieStore = await cookies();

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users/me`,
        {
            headers: {
                Cookie: cookieStore.toString(),
            },
            cache: 'no-store',
        },
    );

    if (!res.ok) {
        throw new Error('Failed to fetch profile');
    }

    const result = await res.json();

    return result.data;
};

const UserProfilePage = async () => {
    const result = await getMyProfile();

    const profile = result.profile;

    return (
        <div className="container mx-auto py-8">
            <ProfileForm profile={profile} />
        </div>
    );
};

export default UserProfilePage;
