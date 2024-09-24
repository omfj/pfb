import { api } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await api("").text();

  return (
    <div>
      <p data-testid="server-says">Server says: {data}</p>
    </div>
  );
}
