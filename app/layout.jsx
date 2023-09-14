import './styles/globals.css'
import './styles/F1.css'
import './styles/F2.css'
import './styles/F3.css'

export const metadata = {
  title: 'Discord Servers - Public Server Listing - Slotho',
  description: 'Another Discord Server Listing.',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
  )
}

