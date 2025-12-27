export const metadata = {
  title: 'Parcours Ingénieur Mécatronicien - Robotique & IA',
  description: 'Guide complet des compétences pour devenir ingénieur mécatronicien spécialisé en robotique et intelligence artificielle'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
