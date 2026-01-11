import { Button } from "@/components/ui/button";
import { ArrowRight, Play, User, Globe, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-primary selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="#" className="block">
              <img src="/images/logo.png" alt="TaleX Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500 absolute left-1/2 -translate-x-1/2">
            <a href="#" className="hover:text-black transition-colors">Explore</a>
            <a href="#" className="hover:text-black transition-colors">Community</a>
          </div>

          {/* Right: Search & Action */}
          <div className="flex items-center gap-6">
            <div className="hidden md:block relative group">
              <input 
                type="text" 
                placeholder="Search TaleX..." 
                className="bg-transparent border-b border-gray-300 focus:border-primary outline-none w-48 py-1 text-black placeholder-gray-400 transition-all text-sm"
              />
            </div>
            <Button variant="outline" className="hidden md:flex border-black/20 hover:bg-black hover:text-white rounded-none font-mono text-xs uppercase tracking-wider">
              Start publishing
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 border-b border-black/5">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tight text-black">
              TaleX is where <span className="text-primary">great content</span> pays off both creators and supporters
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              TaleX is a new content app where creators and fans grow together. Here, supporting content means more than donating — it means predicting its future and helping it spread.
            </p>
            <Button className="bg-primary text-white hover:bg-black rounded-none h-14 px-8 text-lg font-bold uppercase tracking-wide">
              Tell a Tale
            </Button>
          </div>
          <div className="relative flex justify-center">
            <div className="relative z-10 w-[300px] md:w-[350px] border border-black/10 bg-white shadow-2xl shadow-black/5 p-2 rounded-[2rem]">
              <img 
                src="/images/mobile-app-interface-1.png" 
                alt="TaleX App Interface" 
                className="w-full h-auto rounded-[1.8rem]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
          </div>
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
