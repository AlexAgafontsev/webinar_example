export default function Home() {
  const text = process.env.ENV_EXAMPLE || "Это пример сайта";

  return (
    <main>
      <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
        {text}
      </h1>
    </main>
  );
}
