// @ts-ignore -- CSS side-effect imports are handled by Next.js.
import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className ={`${inter.className} antialiased`}>{children}</body>
      {/* <body className={`$inter.className} antialiased`}>{children}</body> */}
    </html>
  );
}
