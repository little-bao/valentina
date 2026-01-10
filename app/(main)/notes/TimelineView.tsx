import dayjs from "dayjs";
import {
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  Coffee,
  Flag,
  MessageSquareQuote,
  Sun,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/sanityImageUrl";
import type { NoteCategory, NoteType } from "@/sanity/types/notes";

const TimelineView = ({ notes }: { notes: NoteType[] }) => {
  const getIcon = (type: NoteCategory, className?: string) => {
    const cnStr = cn("w-4 h-4", className);
    switch (type) {
      case "flag":
        return <Flag className={cn(cnStr, "text-red-500 dark:text-red-400")} />;
      case "weather":
        return (
          <Sun className={cn(cnStr, "text-orange-500 dark:text-orange-400")} />
        );
      case "reading":
        return (
          <BookOpen className={cn(cnStr, "text-blue-500 dark:text-blue-400")} />
        );
      case "thought":
        return (
          <MessageSquareQuote
            className={cn(cnStr, "text-purple-500 dark:text-purple-400")}
          />
        );
      case "life":
        return (
          <Coffee
            className={cn(cnStr, "text-emerald-500 dark:text-emerald-400")}
          />
        );
      case "work":
        return (
          <BriefcaseBusiness
            className={cn(cnStr, "text-amber-500 dark:text-amber-400")}
          />
        );
      default:
        return (
          <Calendar
            className={cn(cnStr, "text-stone-500 dark:text-stone-400")}
          />
        );
    }
  };

  const ImageGrid = ({ images }: { images?: string[] }) => {
    if (!images || images.length === 0) return null;

    const count = images.length;

    const gridClass =
      count === 1
        ? "grid-cols-1 max-w-[60%]"
        : count === 2
          ? "grid-cols-2 max-w-[80%]"
          : "grid-cols-2 sm:grid-cols-3 max-w-full";

    return (
      <div className={cn("mt-3 grid gap-2", gridClass)}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={cn(
              "overflow-hidden rounded-xl",
              count === 1 ? "aspect-4/3" : "aspect-square"
            )}
          >
            <img
              src={urlForImage(img).url()}
              alt="Note image"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border-border/50 relative ml-4 space-y-12 border-l">
      {notes.map((note) => (
        <div key={note._id} className="group relative pl-8">
          <span className="bg-background border-border/50 absolute top-0 left-0 -translate-x-1/2 rounded-full border p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-110">
            {getIcon(note.type)}
          </span>
          <div className="flex flex-col gap-1.5">
            <span className="text-muted-foreground/60 font-mono text-xs">
              {dayjs(note._createdAt).format("YYYY-MM-DD HH:mm")}
            </span>
            <div>
              <p className="text-sm leading-relaxed whitespace-pre-wrap sm:text-base">
                {note.content}
              </p>
              <ImageGrid images={note.images} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineView;
