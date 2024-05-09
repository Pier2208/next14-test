import Image from 'next/image';

export default function AccountPage() {
  return (
    <section className="max-w-lg">
      <h1 className="text-3xl my-2">ACCOUNT</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, molestias minus consequuntur nisi suscipit asperiores sit qui placeat
        consectetur illo quos in enim minima nobis facilis voluptatem a cumque harum!
      </p>
      <Image src="/beach.jpg" width={1920} height={1276} alt="Beach" />
    </section>
  );
}
