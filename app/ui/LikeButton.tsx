'use client';

const LikeButton = () => {
    return (
        <button
            onClick={() => {
                console.log('Liked Button Liked');
            }}
        >
            Liked
        </button>
    );
};

export default LikeButton;
