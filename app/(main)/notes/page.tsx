import { Container } from "@/components/ui/Container";
import { client } from "@/sanity/client";
import { NoteType } from "@/sanity/types/notes";

import TimelineView from "./TimelineView";

const options = { next: { revalidate: 60 * 60 } };

const NOTES_QUERY = `*[
_type == "note"
] | order(publishedAt desc) {
  _id,
  _createdAt,
  content,
  type,
  images,
  isPublic
}`;

const NotesPage = async () => {
  const notes = await client.fetch<NoteType[]>(NOTES_QUERY, {}, options);
  return (
    <Container>
      <div className="mx-auto max-w-4xl py-10">
        <header className="mb-12">
          <h1 className="text-3xl font-bold">随笔</h1>
        </header>

        <TimelineView notes={notes.filter((note) => note.isPublic)} />
      </div>
    </Container>
  );
};

export default NotesPage;
