import PixelArtMaker from "@/components/PixelArtMaker";

export default function Home() {
  return (
    <main className="flex overflow-hidden bg-neutral-100 flex-col min-h-[100vh] items-center justify-center">
      <h1 className="py-10 text-4xl font-semibold">Pixel Art Maker</h1>
      <PixelArtMaker />
    </main>
  );
}
