import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutSection from '../components/Sections/AboutSection'
import BenefitSection from '../components/Sections/BenefitsSection'
import ContactSection from '../components/Sections/ContactSection'
import Hero from '../components/Sections/Hero'
import OverviewSection from '../components/Sections/OverviewSection'
import Subscription from '../components/Subscriptions'

export default function Home () { 
    return (
        <>
            <Header />
            <main>
                <Hero />
                <AboutSection />
                <OverviewSection />
                <BenefitSection />
                <ContactSection />
                <Subscription />
            </main>
            <Footer />
        </>
    )
}