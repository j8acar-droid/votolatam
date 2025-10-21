import './globals.css'
export const metadata = {
  title: 'VotoLatam',
  description: 'Perfiles de candidatos de América Latina — VotoLatam'
}
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
