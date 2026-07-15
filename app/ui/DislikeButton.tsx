'use client';

const DislikeButton = ({ blogSlug }: { blogSlug: string }) => {
    return (
        <button
            onClick={() => {
                console.log('Disliked Button Liked', blogSlug);
            }}
        >
            Disliked :{blogSlug}
        </button>
    );
};

export default DislikeButton;
