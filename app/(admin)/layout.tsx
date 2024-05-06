type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center bg-slate-700 text-white">{children}</div>
    </main>
  );
}
