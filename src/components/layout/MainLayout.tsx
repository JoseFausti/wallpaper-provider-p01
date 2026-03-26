import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col text-white bg-black">
        <Header />
        <main className="p-4 w-full min-h-screen flex flex-col grow">{children}</main>
        <Footer />
    </div>
  );
}