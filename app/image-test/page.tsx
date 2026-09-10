import Image from "next/image";

export default function ImageTest() {
  return (
    <main style={{ padding: 24 }}>
      <Image
        src="/memes/feel-warm.webp"
        alt="Uji coba pipeline gambar meme"
        width={640}
        height={640}
        priority
      />
    </main>
  );
}