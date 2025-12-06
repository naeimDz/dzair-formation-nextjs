import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
    videoId: string;
    title?: string;
    thumbnailUrl?: string;
    className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title = "YouTube video player", thumbnailUrl, className = "" }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Function to extract video ID if a full URL is passed
    const extractVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : url;
    };

    const id = extractVideoId(videoId);
    const posterUrl = thumbnailUrl || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className={`relative overflow-hidden w-full h-full ${className}`}>
            {!isPlaying ? (
                <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={handlePlay}
                >
                    <img
                        src={posterUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                            <Play size={32} className="text-white fill-white ml-1" />
                        </div>
                    </div>
                </div>
            ) : (
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default YouTubeEmbed;
