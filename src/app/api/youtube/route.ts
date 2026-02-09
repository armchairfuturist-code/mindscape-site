import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const playlistId = 'PLmhin2TKpUsksRBlJC5owDdGRSDHo7wL-';
        const response = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error('Failed to fetch YouTube feed');
        }

        const xml = await response.text();

        // Extract entries
        const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
        const entries = [];
        let match;

        while ((match = entryRegex.exec(xml)) !== null) {
            const entryXml = match[1];

            const videoIdMatch = entryXml.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
            const titleMatch = entryXml.match(/<title>(.*?)<\/title>/);
            const publishedMatch = entryXml.match(/<published>(.*?)<\/published>/);

            if (videoIdMatch && titleMatch) {
                const videoId = videoIdMatch[1];

                entries.push({
                    id: videoId,
                    title: titleMatch[1].replace(' #shorts', '').replace('#shorts', ''),
                    thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                    publishedAt: publishedMatch ? publishedMatch[1] : new Date().toISOString(),
                });
            }
        }

        return NextResponse.json(entries);
    } catch (error) {
        console.error('YouTube API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
    }
}
