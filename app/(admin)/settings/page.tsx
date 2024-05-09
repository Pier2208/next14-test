import Image from 'next/image';

export default function SettingsPage() {
  return (
    <section className="max-w-lg">
      <h1 className="text-3xl my-2">SETTINGS</h1>
      <p className="max-w-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, molestias minus consequuntur nisi suscipit asperiores sit qui placeat
        consectetur illo quos in enim minima nobis facilis voluptatem a cumque harum!
      </p>
      <Image src="/snow.jpg" width={1920} height={1276} alt="Snow" />
    </section>
  );
}
