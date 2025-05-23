import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductsContainer } from "@/components/productsContainer";
import { api } from "@/lib/api";
import { Amiibo } from "@/types/amiibo";

export default async function Home() {
  const response = await api.get('/amiibo')
  const items = response.data.amiibo as Amiibo[]

  const marioSerie = items.filter((char) => char.gameSeries === "Super Mario")

  return (
    <main className="w-full h-screen flex justify-center flex-col items-center bg-nitendo">
      <Header />

      <ProductsContainer marioSerie={marioSerie} />

      <Footer />
    </main>
  );
}
