"use client";

interface Props {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: Props) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return (
    <div className="mt-4 flex space-x-2">
      <a
        href={`https://twitter.com/share?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline"
      >
        Facebook
      </a>
    </div>
  );
}
