export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-grow lg:max-w-7xl m-auto w-full">{children}</main>;
}
