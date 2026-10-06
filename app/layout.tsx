import "./globals.css";
export const metadata={title:"VocabQuest",description:"Learn English vocabulary through short games"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}