import MainLayout from "./components/layout/MainLayout";
import WallpaperProvider from "./provider/WallpaperProvider";
import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <WallpaperProvider>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </WallpaperProvider>
  );
}