import { Nav } from "@/components/nav/nav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {process.env.NEXT_PUBLIC_SHOW_COMING_SOON !== "true" && <Nav />}
      <main>{children}</main>
    </>
  );
}
