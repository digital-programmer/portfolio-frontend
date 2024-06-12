export default function BlogRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="relative">
        <div>{children}</div>
    </div>
  );
}
