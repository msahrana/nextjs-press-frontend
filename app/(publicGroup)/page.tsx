import { Button } from '@/components/ui/button';
import { getMe } from '@/service/getMe';

export default async function HomePage() {
    const user = await getMe()
    console.log(user)

    return (
        <div>
            Hello Next.js World !!
            <Button
                className='bg-green-400'
                size={'sm'}
                variant={'destructive'}
            >
                Click Me
            </Button>
        </div>
    );
}
