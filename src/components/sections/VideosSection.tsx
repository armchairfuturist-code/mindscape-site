"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Play } from "lucide-react";

interface YouTubeVideo {
    id: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
}

// Placeholder videos - will be replaced with YouTube API integration
const placeholderVideos: YouTubeVideo[] = [
    {
        id: "o2wXQd3KaSM",
        title: "The Art of Sacred Facilitation",
        thumbnail: "https://img.youtube.com/vi/o2wXQd3KaSM/maxresdefault.jpg",
        publishedAt: "2024-01-20",
    },
    {
        id: "pZW5yo1JpoA",
        title: "5-MeO/Bufo Facilitation: Beyond Costumes",
        thumbnail: "https://img.youtube.com/vi/pZW5yo1JpoA/maxresdefault.jpg",
        publishedAt: "2026-01-28",
    },
    {
        id: "Kix2m4jx_Yg",
        title: "Ram Dass: We Meet Our Ideas, Not People",
        thumbnail: "https://img.youtube.com/vi/Kix2m4jx_Yg/maxresdefault.jpg",
        publishedAt: "2026-01-26",
    },
    {
        id: "C_cXz3LwlRw",
        title: "Judgement.. How Real Is It?",
        thumbnail: "https://img.youtube.com/vi/C_cXz3LwlRw/maxresdefault.jpg",
        publishedAt: "2026-01-25",
    },
    {
        id: "xvLqh7eSyDo",
        title: "Break Free From Old Patterns",
        thumbnail: "https://img.youtube.com/vi/xvLqh7eSyDo/maxresdefault.jpg",
        publishedAt: "2026-01-21",
    },
    {
        id: "mISdZWN_7w8",
        title: "Why Losing a Pet Hurts MORE Than Losing a Person",
        thumbnail: "https://img.youtube.com/vi/mISdZWN_7w8/maxresdefault.jpg",
        publishedAt: "2026-01-20",
    },
];

export default function VideosSection() {
    const [videos, setVideos] = useState<YouTubeVideo[]>(placeholderVideos);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await fetch('/api/youtube');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                
                if (data && data.length > 0) {
                    // Keep the first placeholder as the "main" video per instructions
                    // and append the most recent shorts below it
                    setVideos([placeholderVideos[0], ...data]);
                }
            } catch (error) {
                console.error('Failed to fetch videos:', error);
            }
        }
        fetchVideos();
    }, []);

    return (
        <section id="videos" className="section bg-navy relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="decorative-line mx-auto mb-6" />
                    <h2 className="text-white mb-4">Video Library</h2>
                    <p className="text-lg text-white/70">
                        Explore teachings, insights, and practical guidance from Stephan and Amber.
                        Subscribe to our channel for regular updates.
                    </p>
                </div>

                {/* Featured Video */}
                <div className="mb-12">
                    <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden 
                         bg-navy-800 border border-white/10 shadow-2xl">
                        {selectedVideo ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        ) : (
                            <div
                                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                                onClick={() => setSelectedVideo(videos[0]?.id)}
                            >
                                <img
                                    src={videos[0]?.thumbnail}
                                    alt={videos[0]?.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />
                                <div className="relative z-10 text-center">
                                    <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 
                                 hover:bg-gold/40 transition-all group-hover:scale-110">
                                        <Play size={32} className="text-gold" fill="currentColor" />
                                    </div>
                                    <p className="text-white font-medium text-lg mb-1">{videos[0]?.title}</p>
                                    <p className="text-white/60">Click to play featured teaching</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.slice(1).map((video, index) => (
                        <button
                            key={video.id}
                            onClick={() => setSelectedVideo(video.id)}
                            className={`group text-left rounded-xl overflow-hidden bg-white/5 border border-white/10
                         hover:border-teal/50 transition-all duration-300 hover:-translate-y-1
                         ${selectedVideo === video.id ? 'ring-2 ring-teal' : ''}`}
                        >
                            {/* Thumbnail */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center
                                 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                                        <Play size={20} className="text-white ml-0.5" fill="currentColor" />
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <h4 className="font-heading font-medium text-white group-hover:text-gold transition-colors line-clamp-2">
                                    {video.title}
                                </h4>
                                <p className="text-sm text-white/50 mt-1">
                                    {new Date(video.publishedAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* YouTube Channel Link */}
                <div className="text-center mt-12">
                    <a
                        href="https://www.youtube.com/@mindscapeinstitute/shorts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-teal-300 hover:text-gold font-medium transition-colors"
                    >
                        View more shorts on YouTube
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
