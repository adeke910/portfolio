import { cn } from "../lib/utils";

export default function SectionHeader({
  sectionTitle,
  sectionSubTitle,
  className,
}: {
  sectionTitle: string;
  sectionSubTitle?: string;
  className?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className={cn("text-3xl md:text-5xl font-semibold", className)}>
        {sectionTitle}
      </h2>
      {sectionSubTitle && (
        <p className={cn("text-lg opacity-70", className)}>{sectionSubTitle}</p>
      )}
    </div>
  );
}
