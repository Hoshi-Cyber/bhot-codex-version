import Link from "next/link";

interface Segment {
  name: string;
  href: string;
}

export default function Breadcrumbs({ segments }: { segments: Segment[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="list-none p-0 inline-flex">
        {segments.map((seg, idx) => (
          <li key={seg.href} className="flex items-center">
            {idx > 0 && <span className="mx-2">/</span>}
            <Link href={seg.href} className="text-blue-600 underline">
              {seg.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
