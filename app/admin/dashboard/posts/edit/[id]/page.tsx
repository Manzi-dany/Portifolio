import { blogPosts } from "@/data/content";
import EditPostClient from "./EditPostClient";

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function EditPostPage({ params }: { params: { id: string } }) {
  return <EditPostClient postId={params.id} />;
}
