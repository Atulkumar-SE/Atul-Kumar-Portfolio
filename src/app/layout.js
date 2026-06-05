import './globals.css'

export const metadata = {
  title: 'Atul Kumar — Full-Stack Developer',
  description: 'Portfolio of Atul Kumar, Full-Stack Developer focused on Frontend, UI/UX, React.js, Next.js, MERN Stack.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
