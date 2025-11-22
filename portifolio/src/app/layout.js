import "./globals.css";
import ClientLayout from "@/componentes/clientLayout/clientLayout";


export const metadata = {
  title: "portifolio",
  description: "desenvolvedor Front-end com experiência em HTML semântico, CSS, JavaScript, React com Next.js, consumo de APIs REST, Git e GitHub. Explore meus projetos e minha evolução na área.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ClientLayout/>
        {children}
      </body>
    </html>
  );
}
