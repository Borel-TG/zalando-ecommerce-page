import Link from "next/link";

export default function Home() {
  return (
    <div className="my-20 text-center space-y-10">
      <h1 className="text-2xl font-bold">Zalando Clone</h1>
      <div>
        <p>By Borel T.G</p>
        <p>Fullstack Javascript Developer</p>
      </div>
      <Link
        href={"products"}
        className="underline font-bold block text-primary hover:text-orange-600 text-orange-400"
      >
        Aller sur la page produit !
      </Link>
    </div>
  );
}
