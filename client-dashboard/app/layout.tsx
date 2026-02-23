import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { UserProvider } from "@/components/UserContext"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <UserProvider>
          <div className="flex h-screen overflow-hidden">

            {/* Sidebar (FIXED) */}
            <div className="w-64 shrink-0">
              <Sidebar />
            </div>

            {/* Right side */}
            <div className="flex flex-col flex-1">

              {/* Topbar (FIXED) */}
              <div className="shrink-0">
                <Topbar />
              </div>

              {/* Main content (SCROLLABLE) */}
              <main className="flex-1 overflow-y-auto p-6">
                {children}
              </main>

            </div>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
