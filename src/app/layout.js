import './global.css'

export const metadata = {
  title: 'Egbe Jahari',
  description: 'Ile Ase Egbe Jahari',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt_br">
      <body>{children}</body>
    </html>
  )
}
