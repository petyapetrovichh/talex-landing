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
          <img src="/images/logo.png" alt="TaleX Logo" className="h-8 w-auto" style={{height: '25px'}} />
        </a>
        
        <div className="container mx-auto flex items-center justify-between h-20" style={{paddingLeft: '25px'}}>
          {/* Left: Logo Placeholder (empty for flex layout) */}
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
                style={{fontSize: '17px', fontFamily: 'Alibaba PuHuiTi 3.0, sans-serif', marginLeft: '15px'}}
              >
                Community
                <ChevronDown className="w-4 h-4" />
              </button>
              {communityOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-max z-50" style={{marginTop: '0px'}}>
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

          {/* Right: Search & Action */}
          <div className="flex items-center gap-6" style={{marginRight: '-25px'}}>
            <div className="hidden md:block relative group">
              <div className="relative flex items-center">
                <Search className="absolute left-3 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search TaleX..." 
                  className="bg-transparent border-b border-gray-300 focus:border-primary outline-none w-48 py-1 text-black placeholder-gray-400 transition-all text-sm pl-8" 
                  style={{backgroundColor: '#f6f6f6', borderRadius: '1000px', borderColor: '#dddddd', fontFamily: 'Alibaba PuHuiTi 3.0, sans-serif', height: '36px'}}
                />
              </div>
            </div>
            <style>{springStyle}</style>
            <Button 
              variant="outline" 
              className={`hidden md:flex border-black/20 rounded-none font-mono text-xs uppercase tracking-wider transition-all duration-200 ${buttonSpring ? 'spring-button' : ''}`}
              style={{
                color: buttonHovered || buttonClicked ? '#ffffff' : '#000000', 
                backgroundColor: buttonHovered || buttonClicked ? '#000000' : '#6ff000', 
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
                  window.location.href = 'https://www.talex.world/profile';
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 border-b border-black/5 relative" style={{backgroundImage: 'url(/images/hero-background.png)', backgroundSize: '110% 110%', backgroundPosition: 'center', backgroundAttachment: 'scroll', minHeight: '100vh'}}>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-black" style={{fontSize: '45px', maxWidth: '90%', marginTop: '-56px', marginBottom: '25px', fontFamily: '"Abril Fatface", serif', fontWeight: '300'}}>
              TaleX is where<br />
              <span className="text-primary" style={{color: '#6FF000'}}>great content</span> <span className="text-accent" style={{color: '#000000'}}>pays off</span><br />
              both creators and supporters
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed" style={{marginBottom: '25px', maxWidth: '90%'}}>
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
                  window.location.href = 'https://www.talex.world/profile';
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
        
        {/* Phone Mockup Left - Support & Earn */}
        <img 
          src="/images/phone-support-earn.png" 
          alt="Support & Earn Interface" 
          className="hidden md:block absolute" 
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
          className="hidden md:block absolute" 
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
          className="hidden md:block absolute" 
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
          className="hidden md:block absolute" 
          style={{
            right: '-8%',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '325px',
            width: '210px',
            zIndex: 10,
            marginRight: '150px',
            marginTop: '-100px'
          }}
        />
        
        {/* Phone Mockup Far Right Bottom - Article */}
        <img 
          src="/images/phone-article.png" 
          alt="Article Content" 
          className="hidden md:block absolute" 
          style={{
            right: '-8%',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '457px',
            width: '210px',
            zIndex: 10,
            marginRight: '150px',
            marginTop: '260px'
          }}
        />
      </section>

      {/* Discover Works Section */}
      <section className="py-24 border-b border-black/5">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
              Discover works worth supporting
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              On TaleX, discovery isn’t driven by ads, sponsored content, or engagement algorithms. The Home feed is a place to see what you and your friends genuinely choose to support — ideas that earn attention through real tips, not forced promotion.
            </p>
            <a href="#" className="inline-flex items-center text-primary font-mono uppercase tracking-wider hover:underline font-bold">
              Start exploring in the app <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-[300px] md:w-[350px] border border-black/10 bg-white shadow-xl shadow-black/5 p-2 rounded-[2rem]">
              <img 
                src="/images/mobile-app-feed.png" 
                alt="TaleX Feed" 
                className="w-full h-auto rounded-[1.8rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support & Earn Section */}
      <section className="py-24 border-b border-black/5">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
             <div className="relative w-[300px] md:w-[350px] border border-black/10 bg-white shadow-xl shadow-black/5 p-2 rounded-[2rem]">
              <img 
                src="/images/mobile-app-tipping.png" 
                alt="TaleX Tipping" 
                className="w-full h-auto rounded-[1.8rem]"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
              Support that can benefit in return
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every tip, whether to unlock full access or give extra support, is a prediction of the content’s future popularity. If others tip it after you, you can benefit from being early.
            </p>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none h-12 px-6 font-mono uppercase tracking-wider">
              Start supporting & earning
            </Button>
          </div>
        </div>
      </section>

      {/* Founder's Quote Section */}
      <section className="py-32 bg-gray-50 border-b border-black/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-center">
            <div className="space-y-8">
              <blockquote className="text-2xl md:text-3xl font-display leading-tight text-black">
                "Being an independent creator often means pushing yourself to earn your first $1 — and then constantly thinking about how to drive traffic. Eventually, there comes a moment when creators inevitably starts thinking more about attracting traffic than about the quality of their content. That’s when the worst thing happens: creation slows down, or just stops."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-primary"></div>
                <cite className="not-italic font-mono text-primary font-bold">Petr Osipov, Founder</cite>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden border border-black/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg">
                <img 
                  src="/images/petr-osipov-photo.jpg" 
                  alt="Petr Osipov" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Model Section */}
      <section className="py-24 border-b border-black/5">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black">
              A model that changes everything
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              When fans don’t just support creators by tipping their work, but join real economic value distribution, the magic happens. For the first time, creators get what nobody has offered them before — a natural promotional instrument powered by their own audience.
            </p>
            <a href="#" className="inline-flex items-center text-black border-b border-primary pb-1 hover:text-primary transition-colors font-medium">
              Learn more about the TaleX Model
            </a>
          </div>
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gray-100 border border-black/10 overflow-hidden relative shadow-lg">
              <img 
                src="/images/talex-model-video-preview.png" 
                alt="Model Video Preview" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-mono text-xs text-gray-500">EXPLAINER VIDEO</span>
              <span className="font-mono text-xs text-gray-500">02:14</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Ideas Section */}
      <section className="py-24 border-b border-black/5">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-black">Ideas already live on TaleX</h2>
            <p className="text-gray-600">Here are just a few of many people you can support and grow together</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group border border-black/10 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    {/* Placeholder for author image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                  </div>
                  <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-1 rounded-full bg-primary/5">
                    NEW
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-black group-hover:text-primary transition-colors">The Future of Digital Ownership</h3>
                <p className="text-sm text-gray-500 mb-6">By Alex Rivera</p>
                <div className="flex items-center justify-between pt-6 border-t border-black/5">
                  <div className="flex gap-4 text-xs font-mono text-gray-500">
                    <span>1.2k Reads</span>
                    <span>$450 Tipped</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="border-black/20 text-black hover:bg-black hover:text-white rounded-none h-12 px-8 font-mono uppercase tracking-wider">
              Discover ever more ideas
            </Button>
          </div>
        </div>
      </section>

      {/* Why Creators Choose TaleX */}
      <section className="py-24 border-b border-black/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-black">Why Creators Choose TaleX</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<User className="w-8 h-8 text-primary" />}
              title="No Account"
              description="Neither creators nor users need to register an account to start publishing or exploring."
              link="Start publishing in one second →"
            />
            <FeatureCard 
              icon={<Globe className="w-8 h-8 text-primary" />}
              title="Natural Promotion"
              description="The problem of attracting traffic to content is the most common challenge in the creator economy."
              link="Learn more about our model →"
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="Healthy Virality"
              description="Creators no longer fight algorithms that constantly favor noise or ads over their work."
              link="Explore our recommendation mechanism →"
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-primary" />}
              title="Ultimate Ownership"
              description="Creators keep what matters most — complete freedom over how, when, and where their content is distributed."
              link="Tell your Tale →"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gray-50 border-t border-black/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="block mb-8">
                <img src="/images/logo.png" alt="TaleX Logo" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
              </a>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-sm text-gray-400 uppercase tracking-wider">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">TaleX App</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Model</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Featured</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-sm text-gray-400 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-sm text-gray-400 uppercase tracking-wider">Community</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-wrap gap-6 text-xs text-gray-500 font-mono">
              <span>© Metasset Limited</span>
              <a href="#" className="hover:text-black">Privacy</a>
              <a href="#" className="hover:text-black">Terms</a>
              <a href="#" className="hover:text-black">Disclaimer</a>
            </div>
            <p className="text-sm text-gray-400 max-w-md text-right hidden md:block">
              TaleX is where great content pays off both creators and supporters
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
  return (
    <div className="space-y-4 group">
      <div className="w-16 h-16 border border-black/10 bg-white flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed h-24">
        {description}
      </p>
      <a href="#" className="inline-block text-xs font-mono uppercase tracking-wider text-black border-b border-black/20 pb-1 group-hover:text-primary group-hover:border-primary transition-colors">
        {link}
      </a>
    </div>
  );
}
