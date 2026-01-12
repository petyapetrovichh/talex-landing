import { Button } from "@/components/ui/button";
import { ArrowRight, Play, User, Globe, ShieldCheck, Zap, ChevronDown, Search } from "lucide-react";
import { useState, useEffect } from "react";

// Spring animation for button click
const springStyle = `
  @keyframes spring {
    0% { transform: scale(1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
  .spring-button { animation: spring 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
`;

export default function Home() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonSpring, setButtonSpring] = useState(false);
  const [buttonTaleHovered, setButtonTaleHovered] = useState(false);
  const [buttonTaleClicked, setButtonTaleClicked] = useState(false);
  const [buttonTaleSpring, setButtonTaleSpring] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-primary selection:text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-black/5 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'
      }`}>
        {/* Logo - Independent positioning */}
        <a href="#" className="block absolute left-0 top-1/2 -translate-y-1/2" style={{paddingLeft: '25px'}}>
          <img src="/images/logo.png" alt="TaleX Logo" className="h-8 w-auto" style={{height: '20px'}} />
        </a>
        
        <div className="container mx-auto flex items-center justify-between h-20" style={{paddingLeft: '25px'}}>
          {/* Left: Hamburger Menu for Mobile */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{height: '20px', justifyContent: 'center'}}
          >
            <div className="w-6 h-0.5 bg-black transition-all"></div>
            <div className="w-6 h-0.5 bg-black transition-all"></div>
            <div className="w-6 h-0.5 bg-black transition-all"></div>
          </button>

          {/* Logo Placeholder (empty for flex layout) */}
          <div className="flex items-center invisible">
            <a href="#" className="block">
              <img src="/images/logo.png" alt="TaleX Logo" className="h-8 w-auto" style={{height: '36px'}} />
            </a>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black absolute left-0" style={{paddingLeft: '140px', marginLeft: '75px'}}>
            {/* Explore Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-black transition-colors text-black" 
                style={{fontSize: '17px', fontFamily: 'Alibaba PuHuiTi 3.0, sans-serif'}}
              >
                Explore
                <ChevronDown className="w-4 h-4" />
              </button>
              {exploreOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-max z-50" style={{marginTop: '0px'}}>
                  <a href="https://www.talex.world/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">TaleX App</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Our Model</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Featured</a>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-black transition-colors text-black" 
                style={{fontSize: '17px', fontFamily: 'Alibaba PuHuiTi 3.0, sans-serif', marginLeft: '13px'}}
              >
                Company
                <ChevronDown className="w-4 h-4" />
              </button>
              {companyOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-max z-50" style={{marginTop: '0px'}}>
                  <a href="https://docs.talex.world/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">About</a>
                  <a href="https://t.me/talex_chain_community" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Help</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Contact</a>
                </div>
              )}
            </div>

            {/* Community Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCommunityOpen(true)}
              onMouseLeave={() => setCommunityOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-black transition-colors text-black" 
                style={{fontSize: '17px', fontFamily: 'Alibaba PuHuiTi 3.0, sans-serif', marginLeft: '13px'}}
              >
                Community
                <ChevronDown className="w-4 h-4" />
              </button>
              {communityOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-max z-50" style={{marginTop: '0px'}}>
                  <a href="https://t.me/talex_chain_community" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Telegram</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Discord</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-black">Twitter</a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
              <div className="p-4 space-y-2">
                {/* Explore Section */}
                <div>
                  <button 
                    onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                    className="w-full text-left px-4 py-2 font-semibold text-black flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    Explore
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExploreOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExploreOpen && (
                    <div className="pl-4 space-y-1">
                      <a href="https://www.talex.world/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">TaleX App</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">Our Model</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">Featured</a>
                    </div>
                  )}
                </div>

                {/* Company Section */}
                <div>
                  <button 
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    className="w-full text-left px-4 py-2 font-semibold text-black flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    Company
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileCompanyOpen && (
                    <div className="pl-4 space-y-1">
                      <a href="https://docs.talex.world/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">About</a>
                      <a href="https://t.me/talex_chain_community" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">Help</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">Contact</a>
                    </div>
                  )}
                </div>

                {/* Community Section */}
                <div>
                  <button 
                    onClick={() => setMobileCommunityOpen(!mobileCommunityOpen)}
                    className="w-full text-left px-4 py-2 font-semibold text-black flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    Community
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileCommunityOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileCommunityOpen && (
                    <div className="pl-4 space-y-1">
                      <a href="https://t.me/talex_chain_community" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">Telegram</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">Discord</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">Twitter</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Right: CTA Button */}
          <Button 
            className={`hidden md:inline-flex ml-auto ${buttonSpring ? 'spring-button' : ''}`}
            style={{
              backgroundColor: buttonHovered || buttonClicked ? '#000000' : '#6ff000',
              color: buttonHovered || buttonClicked ? '#ffffff' : '#000000',
              height: '44px',
              paddingLeft: '24px',
              paddingRight: '24px',
              fontSize: '14px',
              borderRadius: '1000px', 
              fontWeight: '700', 
              borderColor: '#ffffff', 
              fontFamily: '"Alibaba PuHuiTi 3.0", sans-serif'
            }}
            onClick={() => {
              setButtonClicked(true);
              setButtonSpring(true);
              setTimeout(() => setButtonSpring(false), 400);
              setTimeout(() => {
                window.location.href = 'https://www.talex.world/publish';
              }, 200);
            }}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => {
              setButtonHovered(false);
              if (!buttonClicked) {
                setButtonClicked(false);
              }
            }}
          >
            Start publishing
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 border-b border-black/5 relative" style={{backgroundImage: 'url(/images/hero-background.png)', backgroundSize: '110% 110%', backgroundPosition: 'center', backgroundAttachment: 'scroll', minHeight: '100vh'}}>
        {/* Mobile Hero Content */}
        <div className="md:hidden container mx-auto px-4 space-y-6 relative z-20">
          <h1 className="text-3xl font-bold leading-tight text-black" style={{fontFamily: '"Abril Fatface", serif', fontWeight: '800', fontSize: '30px'}}>
            TaleX is where<br />
            <span style={{color: '#6FF000'}}>great content</span> <span style={{color: '#000000'}}>pays off</span><br />
            both creators and supporters
          </h1>
          <p className="text-base text-gray-700 leading-relaxed" style={{color: '#000000'}}>
            TaleX is a new content app where creators and fans grow together. Here, supporting content means more than donating — it means predicting its future and helping it spread. Every Tale, whether it's an article, book, podcast, or video, has X ways to travel farther, faster, and reward those who believe in it.
          </p>
          <Button 
            className={`bg-primary text-black rounded-full h-12 px-6 text-base font-bold uppercase tracking-wide w-full ${buttonTaleSpring ? 'spring-button' : ''}`}
            style={{
              backgroundColor: buttonTaleClicked ? '#000000' : '#6ff000',
              color: buttonTaleClicked ? '#ffffff' : '#000000',
              paddingRight: '76px',
              paddingLeft: '73px',
              width: '15px',
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
          >
            Tell a Tale
          </Button>
        </div>

        {/* Desktop Hero Content */}
        <div className="hidden md:block">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-black" style={{fontSize: '45px', maxWidth: '90%', marginTop: '-56px', marginBottom: '25px', fontFamily: '"Abril Fatface", serif', fontWeight: '300'}}>
                TaleX is where<br />
                <span className="text-primary" style={{color: '#6FF000'}}>great content</span> <span className="text-accent" style={{color: '#000000'}}>pays off</span><br />
                both creators and supporters
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed" style={{marginBottom: '25px', maxWidth: '90%', color: '#000000'}}>
                TaleX is a new content app where creators and fans grow together. Here, supporting content means more than donating — it means predicting its future and helping it spread. Every Tale, whether it's an article, book, podcast, or video, has X ways to travel farther, faster, and reward those who believe in it.
              </p>
              <Button 
                className={`bg-primary text-white hover:bg-black rounded-none h-14 px-8 text-lg font-bold uppercase tracking-wide ${buttonTaleSpring ? 'spring-button' : ''}`}
                style={{marginLeft: '0px', color: buttonTaleHovered || buttonTaleClicked ? '#ffffff' : '#000000', backgroundColor: buttonTaleHovered || buttonTaleClicked ? '#000000' : '#6ff000', borderRadius: '1000px'}}
                onClick={() => {
                  setButtonTaleClicked(true);
                  setButtonTaleSpring(true);
                  setTimeout(() => setButtonTaleSpring(false), 400);
                  setTimeout(() => {
                    window.location.href = 'https://www.talex.world/publish';
                  }, 200);
                }}
                onMouseEnter={() => setButtonTaleHovered(true)}
                onMouseLeave={() => {
                  setButtonTaleHovered(false);
                  if (!buttonTaleClicked) {
                    // Reset if not clicked
                  }
                }}
              >
                Tell a Tale
              </Button>
            </div>
          </div>

          {/* Desktop Phone Mockups */}
          {/* Phone Mockup Left - Support & Earn */}
          <img 
            src="/images/phone-support-earn.png" 
            alt="Support & Earn Interface" 
            className="absolute" 
            style={{
              right: '50%',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '349.85px',
              width: '200px',
              maxWidth: '35%',
              zIndex: 10,
              marginRight: '-178px',
              marginTop: '-129px'
            }}
          />
          
          {/* Phone Mockup Center Bottom - Trending */}
          <img 
            src="/images/phone-trending.png" 
            alt="Trending Content" 
            className="absolute" 
            style={{
              right: '50%',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '162px',
              width: '200px',
              maxWidth: '35%',
              zIndex: 10,
              marginRight: '-178px',
              marginTop: '225px'
            }}
          />
          
          {/* Phone Mockup Right - Main Feed */}
          <img 
            src="/images/phone-mockup.png" 
            alt="TaleX App Interface" 
            className="absolute" 
            style={{
              right: '5%',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '600px',
              width: 'auto',
              maxWidth: '35%',
              zIndex: 10,
              marginTop: '50px',
              marginRight: '166px'
            }}
          />
          
          {/* Phone Mockup Far Right - Profile */}
          <img 
            src="/images/phone-profile.png" 
            alt="User Profile" 
            className="absolute" 
            style={{
              right: '-8%',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '309px',
              width: '200px',
              zIndex: 10,
              marginRight: '163px',
              marginTop: '-120px'
            }}
          />
          
          {/* Phone Mockup Far Right Bottom - Article */}
          <img 
            src="/images/phone-article.png" 
            alt="Article Content" 
            className="absolute" 
            style={{
              right: '-8%',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '273px',
              width: '200px',
              zIndex: 10,
              marginRight: '163px',
              marginTop: '228px'
            }}
          />
        </div>
      </section>

      {/* Discover Works Section */}
      <section className="py-24 border-b border-black/5">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
              Discover works worth supporting
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              On TaleX, discovery isn't driven by ads, sponsored content, or engagement algorithms. The Home feed is a place to see what you and your friends genuinely choose to support — ideas that earn attention through real tips, not forced promotion.
            </p>
            <a href="#" className="inline-flex items-center text-primary font-mono uppercase tracking-wider hover:underline font-bold">
              Start exploring in the app <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-[300px] md:w-[350px] border border-black/10 bg-white shadow-xl shadow-black/5 p-2 rounded-[2rem]">
              <img 
                src="/images/mobile-app-feed.png" 
                alt="Mobile App Feed" 
                className="w-full rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{springStyle}</style>
    </div>
  );
}
