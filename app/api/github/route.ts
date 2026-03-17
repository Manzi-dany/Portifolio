import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/users/Manzi-dany/repos?sort=updated&per_page=100",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add a GitHub token if you have one to avoid rate limits
          // "Authorization": "Bearer YOUR_GITHUB_TOKEN"
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repos");
    }

    const repos = await response.json();

    // Filter out forks and archived repos, then map to needed fields
    const filteredRepos = repos
      .filter((repo: any) => !repo.fork && !repo.archived)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        topics: repo.topics || [],
      }));

    return NextResponse.json(filteredRepos);
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}
