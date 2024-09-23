export default async function Home() {
  const data = await fetch("http://localhost:8000").then((res) => res.text());

  return (
    <div>
      <p data-testid="server-says">Server says: {data}</p>
    </div>
  );
}
