import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const SocialMedia: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600">
        <Facebook className="h-5 w-5" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-400">
        <Twitter className="h-5 w-5" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-pink-500">
        <Instagram className="h-5 w-5" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-red-500">
        <Youtube className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialMedia;