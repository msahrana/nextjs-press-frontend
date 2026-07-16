import { Button } from '@/components/ui/button';

export default function HomePage() {
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
