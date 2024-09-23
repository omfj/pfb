export default async function Home() {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL!).then((res) =>
    res.text()
  );

  return (
    <div>
      <p data-testid="server-says">Server says: {data}</p>
    </div>
  );
}
