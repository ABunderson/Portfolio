import { Footer } from '../components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-[30px]" />
      <main className="flex-grow lg:max-w-7xl m-auto w-full px-4">{children}</main>
      <div className="h-[30px] bg-gradient-to-t from-th-purple to-th-green" />
      <Footer />
    </>
  );
}
