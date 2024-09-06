import getJoke from "@/utils/getJoke";
import RandJoke from "./components/RandomJoke";
import RandJokeClient from "./components/RandJokeClient";

export const revalidate = 10;

export default async function Home() {
  const joke = await getJoke();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <h1 className="text-xl">{joke.value}</h1>
      <RandJoke />
      <RandJokeClient />
    </main>
  );
}
