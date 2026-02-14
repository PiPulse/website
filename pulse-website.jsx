import React, { useState, useEffect } from 'react';
import { Menu, X, Github, MessageCircle, Book, Heart, Cpu, Battery, Zap, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

export default function PulseWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      name: 'Pulse Tab',
      tagline: '7" Touchscreen Tablet',
      status: 'available',
      specs: ['7" capacitive touch', 'Pi 5 (8GB RAM)', '64-256GB storage', '8-10hr battery', 'FydeOS'],
      price: 'Starting at $350',
      image: '📱',
      link: 'https://github.com/BeaconPro/pulse-tab',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'PulseOne',
      tagline: 'Raspberry Pi Smartphone',
      status: 'soon',
      specs: ['5-6" display', '4G LTE', 'Dual cameras', 'GPS', 'All-day battery'],
      price: 'Pre-order soon',
      image: '📞',
      link: '#',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'Pulse Hub',
      tagline: 'Desktop Computer',
      status: 'planned',
      specs: ['Multiple USB', 'Dual display', 'Expandable storage', 'Low power', 'Ethernet + WiFi'],
      price: 'Coming 2026',
      image: '🖥️',
      link: '#',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Pulse Whisper',
      tagline: 'Portable Laptop',
      status: 'planned',
      specs: ['10-13" display', 'Full keyboard', 'Extended battery', 'Fanless', 'Ultra-portable'],
      price: 'Coming 2026',
      image: '💻',
      link: '#',
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  const pricingTiers = [
    { storage: '64GB', type: 'microSD', price: '$350' },
    { storage: '128GB', type: 'microSD', price: '$385' },
    { storage: '256GB', type: 'microSD', price: '$425' },
    { storage: '128GB', type: 'NVMe SSD', price: '$450', recommended: true },
    { storage: '256GB', type: 'NVMe SSD', price: '$495' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.2}px)`
        }} />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg animate-pulse" />
                <div className="absolute inset-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg blur-md opacity-50 animate-pulse" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Pulse
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm">Products</a>
              <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm">Pricing</a>
              <a href="#diy" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm">DIY</a>
              <a href="#community" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm">Community</a>
              <a href="https://github.com/BeaconPro" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-cyan-400"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-cyan-500/20 bg-slate-950/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3">
              <a href="#products" className="block text-slate-300 hover:text-cyan-400 font-mono text-sm">Products</a>
              <a href="#pricing" className="block text-slate-300 hover:text-cyan-400 font-mono text-sm">Pricing</a>
              <a href="#diy" className="block text-slate-300 hover:text-cyan-400 font-mono text-sm">DIY</a>
              <a href="#community" className="block text-slate-300 hover:text-cyan-400 font-mono text-sm">Community</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono mb-6">
                <Zap className="w-4 h-4" />
                <span>Open-Source Raspberry Pi Computing</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Build Professional
              </span>
              <br />
              <span className="text-slate-100">Raspberry Pi Devices</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Tablets, phones, desktops, and laptops powered by Raspberry Pi. 
              Get them pre-built or build your own with our open-source designs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a 
                href="#products"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#diy"
                className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold hover:border-cyan-500/50 hover:bg-slate-800 transition-all flex items-center justify-center space-x-2"
              >
                <span>Build Your Own</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2 text-slate-400">
                <Battery className="w-5 h-5 text-cyan-400" />
                <span>8-10hr battery</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>Raspberry Pi 5</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Daily-driver ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative pulse rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-96 h-96 rounded-full border border-cyan-500/10 animate-ping-slow" />
          <div className="w-96 h-96 rounded-full border border-cyan-500/5 animate-ping-slower absolute inset-0" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Line</h2>
            <p className="text-slate-400 text-lg">Four devices, endless possibilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className="group relative bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-4xl">{product.image}</span>
                        <div>
                          <h3 className="text-2xl font-bold">{product.name}</h3>
                          <p className="text-cyan-400 font-mono text-sm">{product.tagline}</p>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                      product.status === 'available' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      product.status === 'soon' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                      'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                    }`}>
                      {product.status === 'available' ? 'AVAILABLE' : product.status === 'soon' ? 'COMING SOON' : 'PLANNED'}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center space-x-2 text-slate-300 text-sm">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                        <span className="font-mono">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <span className="text-lg font-bold text-cyan-400">{product.price}</span>
                    {product.status === 'available' && (
                      <a 
                        href={product.link}
                        className="flex items-center space-x-2 text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors group"
                      >
                        <span>View Docs</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pulse Tab Pricing</h2>
            <p className="text-slate-400">Pre-built and ready to ship</p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-700/50">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`bg-slate-900 p-6 relative ${tier.recommended ? 'md:col-span-1 ring-2 ring-cyan-500/50' : ''}`}
                >
                  {tier.recommended && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      RECOMMENDED
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{tier.price}</div>
                    <div className="text-lg font-semibold mb-1">{tier.storage}</div>
                    <div className="text-sm text-slate-400 font-mono">{tier.type}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-800/30">
              <h3 className="font-bold mb-4 text-lg">What's Included:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Fully assembled Pulse Tab',
                  'Pre-installed FydeOS',
                  'Configured & tested (8+ hour QA)',
                  'USB-C charger',
                  'Quick start guide',
                  '30-day warranty',
                  'Lifetime documentation access'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                  Join Waitlist
                </button>
                <p className="text-xs text-slate-500 mt-2 font-mono">Pre-orders opening soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Pre-Built Comparison */}
      <section id="diy" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Choose Your Path</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pre-Built */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-2">Pre-Built</h3>
              <p className="text-cyan-400 font-mono text-sm mb-6">Ready in days, not hours</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Save Time</div>
                    <div className="text-sm text-slate-400">Unbox and use immediately</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Professional Quality</div>
                    <div className="text-sm text-slate-400">8+ hours of QA testing</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">30-Day Warranty</div>
                    <div className="text-sm text-slate-400">Peace of mind included</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <div className="text-sm text-slate-400 mb-1">Starting at</div>
                <div className="text-2xl font-bold text-cyan-400">$350</div>
              </div>
            </div>

            {/* DIY */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-2">DIY Build</h3>
              <p className="text-cyan-400 font-mono text-sm mb-6">Learn and customize</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Lower Cost</div>
                    <div className="text-sm text-slate-400">$50-100 less than pre-built</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Learn Skills</div>
                    <div className="text-sm text-slate-400">Hardware assembly & Linux config</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Full Customization</div>
                    <div className="text-sm text-slate-400">Modify everything to your needs</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <div className="text-sm text-slate-400 mb-1">Parts cost</div>
                <div className="text-2xl font-bold text-cyan-400">$300-400</div>
                <div className="text-xs text-slate-500 mt-1 font-mono">4-6 hours build time</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://github.com/BeaconPro/pulse-tab"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors"
            >
              <Book className="w-5 h-5" />
              <span>View complete build guide</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Join the Community</h2>
            <p className="text-slate-400">Open-source, collaborative, and growing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://github.com/orgs/BeaconPro/discussions"
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <MessageCircle className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">Discussions</h3>
              <p className="text-sm text-slate-400">Ask questions, share builds, propose ideas</p>
            </a>

            <a 
              href="https://github.com/BeaconPro"
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <Github className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">Contribute</h3>
              <p className="text-sm text-slate-400">Improve docs, report bugs, add features</p>
            </a>

            <a 
              href="https://github.com/BeaconPro/pulse-tab/wiki"
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <Book className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">Wiki</h3>
              <p className="text-sm text-slate-400">Community guides, tips, and tutorials</p>
            </a>
          </div>

          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Built by makers, for makers</h3>
            <p className="text-slate-400 mb-6">Privacy-focused, open-source, and community-driven</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
              <span className="px-3 py-1 bg-slate-800/50 rounded-full">No tracking</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-full">No bloatware</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-full">Your data stays yours</span>
            </div>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Open Source License</h2>
            <p className="text-slate-400">CC BY-NC-SA 4.0 - Build freely, share openly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-green-400">You Can ✅</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Build for personal use</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Modify and improve designs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Share your modifications (same license)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Use for educational purposes</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-red-500/30 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-red-400">You Cannot ❌</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Sell pre-built devices commercially</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Manufacture and sell in bulk</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Use in commercial products</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Offer paid assembly services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 text-center">
            <p className="text-slate-300">
              <span className="font-bold text-cyan-400">Note:</span> Pre-built devices sold by BeaconPro are offered by the original copyright holder. 
              The NonCommercial clause prevents third parties from commercial sales while ensuring our open-source community can build for personal use.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg" />
                <span className="text-xl font-bold">Pulse</span>
              </div>
              <p className="text-sm text-slate-400 font-mono">Signal your innovation</p>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-sm">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pulse Tab</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">PulseOne</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pulse Hub</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pulse Whisper</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://github.com/BeaconPro/pulse-tab" className="hover:text-cyan-400 transition-colors">Build Guides</a></li>
                <li><a href="https://github.com/BeaconPro/pulse-tab/wiki" className="hover:text-cyan-400 transition-colors">Wiki</a></li>
                <li><a href="https://github.com/orgs/BeaconPro/discussions" className="hover:text-cyan-400 transition-colors">Discussions</a></li>
                <li><a href="https://github.com/BeaconPro" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-sm">Organization</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About BeaconPro</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">License (CC BY-NC-SA 4.0)</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contributing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p className="font-mono">© 2026 BeaconPro. CC BY-NC-SA 4.0 License.</p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by the community</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.05; }
        }

        @keyframes ping-slower {
          0%, 100% { transform: scale(1); opacity: 0.05; }
          50% { transform: scale(1.2); opacity: 0.02; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
