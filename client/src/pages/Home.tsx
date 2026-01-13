import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const springStyle = `
  @keyframes spring {
    0% { transform: scale(1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
  .spring-button { animation: spring 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
  
  @keyframes slideInFromLeft {
    0% { transform: translateX(-100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  
  .menu-slide-in { animation: slideInFromLeft 0.4s ease-out forwards; }
`;

export default function Home() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [buttonTaleHovered, setButtonTaleHovered] = useState(false);
  const [buttonTaleClicked, setButtonTaleClicked] = useState(false);
  const [buttonTaleSpring, setButtonTaleSpring] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <style>{springStyle}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-black/5 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'
      }`}>
        <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8">
          {/* Left: Hamburger Menu for Mobile */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
              style={{width: '24px', height: '20px', padding: 0, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
            >
              <span style={{width: '100%', height: '2px', backgroundColor: '#000'}}></span>
              <span style={{width: '100%', height: '2px', backgroundColor: '#000'}}></span>
              <span style={{width: '100%', height: '2px', backgroundColor: '#000'}}></span>
            </button>
          )}

          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src="/images/logo.png" alt="TaleX Logo" style={{height: '20px', width: 'auto'}} />
          </a>

          {/* Center: Navigation (Desktop Only) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black flex-1 justify-start ml-12">
            {/* Explore */}
            <div 
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-black transition-colors text-black">
                Explore
                <ChevronDown className="w-4 h-4" />
              </button>
              {exploreOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-max z-50">
                  <a href="https://www.talex.world/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">TaleX App</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Our Model</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Featured</a>
                </div>
              )}
            </div>

            {/* Company */}
            <div 
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-black transition-colors text-black">
                Company
                <ChevronDown className="w-4 h-4" />
              </button>
              {companyOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-max z-50">
                  <a href="https://docs.talex.world/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">About</a>
                  <a href="https://t.me/talex_chain_community" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Help</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Contact</a>
                </div>
              )}
            </div>

            {/* Community */}
            <div 
              className="relative"
              onMouseEnter={() => setCommunityOpen(true)}
              onMouseLeave={() => setCommunityOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-black transition-colors text-black">
                Community
                <ChevronDown className="w-4 h-4" />
              </button>
              {communityOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-max z-50">
                  <a href="https://x.com/talex_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">X</a>
                  <a href="https://t.me/TaleX_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Telegram</a>
                  <a href="https://discord.gg/talex" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Discord</a>
                  <a href="https://www.binance.com/en/square/profile/talex_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Binance Square</a>
                  <a href="https://coinmarketcap.com/community/profile/TaleX_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">CoinMarketCap</a>
                  <a href="https://facebook.com/TaleXchain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Facebook</a>
                  <a href="https://youtube.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">YouTube</a>
                  <a href="https://www.instagram.com/talexchain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Instagram</a>
                  <a href="https://www.tiktok.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">TikTok</a>
                  <a href="https://open.spotify.com/show/51Q8zhfB2ADlmyEaUzT3iR" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Spotify</a>
                  <a href="https://www.linkedin.com/company/talexchain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">LinkedIn</a>
                </div>
              )}
            </div>
          </div>

          {/* Right: Start publishing button */}
          <Button 
            className="hidden md:block rounded-full px-6 h-10 text-sm font-bold uppercase tracking-wide"
            style={{
              backgroundColor: buttonTaleHovered || buttonTaleClicked ? '#000000' : '#6ff000',
              color: buttonTaleHovered || buttonTaleClicked ? '#ffffff' : '#000000',
              transition: 'all 0.2s ease'
            }}
            onClick={() => {
              setButtonTaleClicked(true);
              setButtonTaleSpring(true);
              setTimeout(() => setButtonTaleSpring(false), 400);
              setTimeout(() => {
                window.location.href = 'https://www.talex.world/publish';
              }, 200);
            }}
            onMouseEnter={() => setButtonTaleHovered(true)}
            onMouseLeave={() => setButtonTaleHovered(false)}
          >
            Start publishing
          </Button>

          {/* Mobile Start publishing */}
          <Button 
            className="md:hidden rounded-full px-4 h-9 text-xs font-bold uppercase tracking-wide"
            style={{
              backgroundColor: '#6ff000',
              color: '#000000',
            }}
            onClick={() => {
              window.location.href = 'https://www.talex.world/publish';
            }}
          >
            Start
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuExpanded && (
          <div className="md:hidden fixed top-20 left-0 h-screen w-full bg-white shadow-lg z-40 menu-slide-in overflow-y-auto">
            <div className="p-4 space-y-2">
              {/* Explore */}
              <button 
                onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                className="w-full text-left px-4 py-2 font-semibold text-black flex items-center justify-between hover:bg-gray-50"
              >
                Explore
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExploreOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileExploreOpen && (
                <div className="pl-4 space-y-1">
                  <a href="https://www.talex.world/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">TaleX App</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Our Model</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Featured</a>
                </div>
              )}

              {/* Company */}
              <button 
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className="w-full text-left px-4 py-2 font-semibold text-black flex items-center justify-between hover:bg-gray-50"
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCompanyOpen && (
                <div className="pl-4 space-y-1">
                  <a href="https://docs.talex.world/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">About</a>
                  <a href="https://t.me/talex_chain_community" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Help</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Contact</a>
                </div>
              )}

              {/* Community */}
              <button 
                onClick={() => setMobileCommunityOpen(!mobileCommunityOpen)}
                className="w-full text-left px-4 py-2 font-semibold text-black flex items-center justify-between hover:bg-gray-50"
              >
                Community
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCommunityOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCommunityOpen && (
                <div className="pl-4 space-y-1">
                  <a href="https://x.com/talex_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">X</a>
                  <a href="https://t.me/TaleX_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Telegram</a>
                  <a href="https://discord.gg/talex" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Discord</a>
                  <a href="https://www.binance.com/en/square/profile/talex_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Binance Square</a>
                  <a href="https://coinmarketcap.com/community/profile/TaleX_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">CoinMarketCap</a>
                  <a href="https://facebook.com/TaleXchain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Facebook</a>
                  <a href="https://youtube.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">YouTube</a>
                  <a href="https://www.instagram.com/talexchain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Instagram</a>
                  <a href="https://www.tiktok.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">TikTok</a>
                  <a href="https://open.spotify.com/show/51Q8zhfB2ADlmyEaUzT3iR" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Spotify</a>
                  <a href="https://www.linkedin.com/company/talexchain" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">LinkedIn</a>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-lime-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{fontFamily: '"Abril Fatface", serif'}}>
                TaleX is where<br />
                <span style={{color: '#6FF000'}}>great content</span><br />
                pays off<br />
                <span>both creators and</span><br />
                <span>supporters</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                TaleX is a new content app where creators and fans grow together. Here, supporting content means more than donating — it means predicting its future and helping it spread. Every Tale, whether it's an article, book, podcast, or video, has X ways to travel farther, faster, and reward those who believe in it.
              </p>
              <Button 
                className="rounded-full px-8 h-12 text-base font-bold uppercase tracking-wide"
                style={{
                  backgroundColor: buttonTaleHovered || buttonTaleClicked ? '#000000' : '#6ff000',
                  color: buttonTaleHovered || buttonTaleClicked ? '#ffffff' : '#000000',
                }}
                onClick={() => {
                  setButtonTaleClicked(true);
                  setButtonTaleSpring(true);
                  setTimeout(() => setButtonTaleSpring(false), 400);
                  setTimeout(() => {
                    window.location.href = 'https://www.talex.world/publish';
                  }, 200);
                }}
                onMouseEnter={() => setButtonTaleHovered(true)}
                onMouseLeave={() => setButtonTaleHovered(false)}
              >
                Tell a Tale
              </Button>
            </div>

            {/* Right: App Screenshots */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-sm">
                <img src="/images/hero-phone.png" alt="TaleX App" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
              <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{fontFamily: '"Abril Fatface", serif'}}>
                Discover works<br />
                worth supporting
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                On TaleX, discovery isn't driven by ads, sponsored content, or engagement algorithms. The Home feed is a place to see what you and your friends genuinely choose to support.
              </p>
              <a href="#" className="inline-flex items-center text-lime-500 font-bold hover:underline">
                Start exploring in the app <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Right: Phone Mockups Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-center">
                <div className="relative w-32 md:w-40 border-4 border-black rounded-2xl overflow-hidden bg-black">
                  <img src="/images/discover-phone.png" alt="App 1" className="w-full" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-32 md:w-40 border-4 border-black rounded-2xl overflow-hidden bg-black">
                  <img src="/images/discover-phone.png" alt="App 2" className="w-full" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-32 md:w-40 border-4 border-black rounded-2xl overflow-hidden bg-black">
                  <img src="/images/discover-phone.png" alt="App 3" className="w-full" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-32 md:w-40 border-4 border-black rounded-2xl overflow-hidden bg-black">
                  <img src="/images/discover-phone.png" alt="App 4" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support that pays Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-lime-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Phone Mockup */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative w-40 md:w-48 border-4 border-black rounded-2xl overflow-hidden bg-black">
                <img src="/images/support-phone.png" alt="Support Feature" className="w-full" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{fontFamily: '"Abril Fatface", serif'}}>
                Support that pays back
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you support a Tale, you're not just donating. You're predicting its future and helping it spread. Every support comes with rewards that grow as the content succeeds.
              </p>
              <Button 
                className="rounded-full px-8 h-12 text-base font-bold uppercase tracking-wide"
                style={{
                  backgroundColor: '#6ff000',
                  color: '#000000',
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Model Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{fontFamily: '"Abril Fatface", serif'}}>
                A model that changes everything
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                TaleX introduces a revolutionary model where creators and supporters share in the success of content. It's not about ads or algorithms — it's about genuine value creation.
              </p>
              <Button 
                className="rounded-full px-8 h-12 text-base font-bold uppercase tracking-wide"
                style={{
                  backgroundColor: '#6ff000',
                  color: '#000000',
                }}
              >
                Explore Model
              </Button>
            </div>

            {/* Right: Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-40 md:w-48 border-4 border-black rounded-2xl overflow-hidden bg-black">
                <img src="/images/mobile-app-feed.png" alt="Model" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Ideas Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-lime-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{fontFamily: '"Abril Fatface", serif'}}>
              Ideas already live on TaleX
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the diverse range of content creators and supporters building the future on TaleX.
            </p>
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative group cursor-pointer overflow-hidden rounded-lg h-64 md:h-72">
                <img 
                  src="/images/mobile-app-feed.png" 
                  alt={`Idea ${i}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">Creator {i}</h3>
                    <p className="text-gray-300 text-sm">Idea Title</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Creators Choose TaleX Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{fontFamily: '"Abril Fatface", serif'}}>
              Why Creators Choose TaleX
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🔐', title: 'No Account', desc: 'Start creating without complex setup' },
              { icon: '🚀', title: 'Instant Protection', desc: 'Your content is protected from day one' },
              { icon: '💚', title: 'Healthy Vitality', desc: 'Grow sustainably with genuine support' },
              { icon: '🎯', title: 'Ultimate Ownership', desc: 'You own your content and your audience' }
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Telegram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 TaleX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
