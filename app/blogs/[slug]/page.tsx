import DislikeButton from '@/app/ui/DislikeButton';

const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    return (
        <div>
            Slug Page : {slug}
            <DislikeButton blogSlug={slug} />
        </div>
    );
};

export default SlugPage;
