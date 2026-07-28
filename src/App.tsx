import { ScrollProgress } from '@/components/layout/ScrollProgress/ScrollProgress'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { Footer } from '@/components/layout/Footer/Footer'
import { ScrollToTop } from '@/components/ui/ScrollToTop/ScrollToTop'
import { Hero } from '@/components/sections/Hero/Hero'
import { About } from '@/components/sections/About/About'
import { TechStack } from '@/components/sections/TechStack/TechStack'
import { Projects } from '@/components/sections/Projects/Projects'
import { Contact } from '@/components/sections/Contact/Contact'

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
