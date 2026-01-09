import { PlayCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-4xl hover:text-amber-500 transition-colors"
        >
          ×
        </button>
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={videoUrl}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

const VideoButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TODO: Bu URL'yi Sanity'den alacağız
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group relative flex items-center gap-4 transition-all duration-300 hover:scale-105"
      >
        <div className="relative">
          {/* Outer pulse ring */}
          <div className="absolute inset-0 rounded-full bg-amber-600/30 animate-ping"></div>
          
          {/* Middle ring */}
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-amber-600/10 border-2 border-amber-600 group-hover:bg-amber-600 transition-all duration-300">
            {/* Play icon */}
            <PlayCircleOutlined className="text-3xl text-amber-600 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        
        <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Watch Video
        </span>
      </button>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
};

export default VideoButton;
