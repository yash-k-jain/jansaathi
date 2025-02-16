import type { Metadata } from 'next'
import Header from '../components/header'
import Hero from '../components/hero'
import ComparisonTool from '../components/comparison-tool'
import Footer from '../components/footer'

export const metadata: Metadata = {
    title: 'v0 App',
    description: 'Created with v0',
    generator: 'v0.dev',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <Hero />
                {children}
                <ComparisonTool />
                <Footer />
            </body>
        </html>
    )
}
