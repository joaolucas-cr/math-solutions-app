import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={'h-screen w-screen bg-slate-800'}>
      <Header equationSelected="Triangle"></Header>
    </main>
  );
}
