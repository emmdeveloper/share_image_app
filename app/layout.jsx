import "./globals.css";
import Fonts from "@/components/Fonts";
import Navbar from "@/components/Navbar";
import Provider from "./Provider";
import "./globals.css";

export const metadata = {
  title: "Share-Images",
  description: "Share images with friends and family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-[1200px]">
          <Provider>
            <Navbar />
            <Fonts>{children}</Fonts>
          </Provider>
        </div>
      </body>
    </html>
  );
}
