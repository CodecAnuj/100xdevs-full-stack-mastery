import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video)",
    image: "Girl.webp",
    thumbImage: "thumb.jpg",
    author: "Anuj Tiwari",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video)",
    image: "Girl.webp",
    thumbImage: "thumb.jpg",
    author: "Anuj Tiwari",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video)",
    image: "Girl.webp",
    thumbImage: "thumb.jpg",
    author: "Anuj Tiwari",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video)",
    image: "Girl.webp",
    thumbImage: "thumb.jpg",
    author: "Anuj Tiwari",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video)",
    image: "Girl.webp",
    thumbImage: "thumb.jpg",
    author: "Anuj Tiwari",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video)",
    image: "Girl.webp",
    thumbImage: "thumb.jpg",
    author: "Anuj Tiwari",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video)",
    image: "Girl.webp",
    thumbImage: "thumb.jpg",
    author: "Anuj Tiwari",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video)",
    image: "Girl.webp",
    thumbImage: "thumb.jpg",
    author: "Anuj Tiwari",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video)",
    image: "Girl.webp",
    thumbImage: "thumb.jpg",
    author: "Anuj Tiwari",
    views: "100k",
    timestamp: "2 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
