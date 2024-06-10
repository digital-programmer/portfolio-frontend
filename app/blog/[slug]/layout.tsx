export default function BlogRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        <div>Blog</div>
        <div>{children}</div>
    </div>
  );
}
