import { useState } from 'react'
import { Button } from './components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card.jsx'
import { Menu, X, ChevronDown, Youtube, Instagram, Facebook, Mail, Phone, MapPin, Calendar, Users, Heart, BookOpen } from 'lucide-react'
import logo from './assets/imagemchurch.jpg'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Configurações editáveis do site
  const siteConfig = {
    churchName: "TCC",
    tagline: "Uma igreja que manifesta o Reino de Deus, edifica o Corpo de Cristo e atua pelo Espírito Santo",
    youtubeChannelUrl: "https://youtube.com/@tempodacolheitachurch?si=YWokINV3BKGwEkjL",
    instagramUrl: "https://www.instagram.com/tempodacolheitachurch/",
    facebookUrl: "https://www.facebook.com/share/1DSBVmMGnV/?mibextid=wwXIfr",
    email: "contato@tempodacolheitachurch.co.uk",
    phone: "+44 7496 695325",
    address: "8 - 10 Allerford Road, London SE6 3DD",

    // Seção "Quem Somos"
    aboutText: "A TCC é uma igreja chamada para manifestar o Reino de Deus, edificar o Corpo de Cristo, estabelecer o governo do Espírito Santo, exercer paternidade espiritual em favor dos homens e fluir por meio dos cinco ministérios.",

    // Lives recentes do YouTube (IDs dos vídeos)
    recentLives: [
      { id: "kTqRx1sIkbs", title: "Quinta Profética", date: "17 Out 2025" },
      { id: "cZSu3DUGQQc", title: "Culto ao Vivo - Domingo", date: "15 Out 2025" },
      { id: "MWrNTeB2Qxc", title: "Volta da Tenda", date: "11 Out 2025" },
      
    ],

    // Próximos eventos (editado conforme solicitado)
    upcomingEvents: [
      { title: "Quinta Profética", date: "Quinta-feira, 8pm" },
      { title: "Estudo Bíblico", date: "Domingo, 10am" },
      { title: "Culto da Família", date: "Domingo, 7h30pm", description: "Encontro para celebrarmos!" },
    ],

    // Ministérios
    ministries: [
      { icon: Users, title: "Grupos de Célula", description: "Conecte-se em comunhão" },
      { icon: Heart, title: "Ação Social", description: "Transformando vidas" },
      { icon: BookOpen, title: "Escola Bíblica", description: "Crescimento espiritual" },
      { icon: Calendar, title: "Eventos", description: "Programações especiais" },
    ]
  }

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre Nós' },
    { id: 'lives', label: 'Ao Vivo' },
    { id: 'events', label: 'Eventos' },
    { id: 'ministries', label: 'Ministérios' },
    { id: 'contact', label: 'Contato' },
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src={logo} alt={siteConfig.churchName} className="h-12 w-12 rounded-full" />
              <span className="text-xl font-bold hidden md:block">{siteConfig.churchName}</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-[#ff8c00] transition-colors ${
                    activeSection === item.id ? 'text-[#ff8c00]' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a href={siteConfig.youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8c00] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8c00] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8c00] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-700">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 hover:bg-gray-800 hover:text-[#ff8c00] transition-colors ${
                    activeSection === item.id ? 'text-[#ff8c00]' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-700">
                <a href={siteConfig.youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8c00]">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8c00]">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8c00]">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 hero-gradient text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <img src={logo} alt={siteConfig.churchName} className="h-32 w-32 mx-auto mb-8 rounded-full shadow-2xl" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bem-vindos à <span className="text-[#ff8c00]">Tempo da Colheita Church</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              {siteConfig.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-[#ff8c00] hover:bg-[#e67e00] text-white text-lg px-8 py-6 rounded"
                onClick={() => scrollToSection('lives')}
              >
                Assista Nossas Lives
              </button>
              <button
                className="border border-white text-[#ff8c00] hover:bg-white hover:text-black text-lg px-8 py-6 rounded"
                onClick={() => scrollToSection('about')}
              >
                Conheça Nossa História
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Quem <span className="text-[#ff8c00]">Somos</span>
            </h2>
            <div className="w-24 h-1 bg-[#ff8c00] mx-auto mb-12"></div>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              {siteConfig.aboutText}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center border-2 hover:border-[#ff8c00] transition-colors p-6 rounded">
                <Heart className="h-12 w-12 mx-auto text-[#ff8c00] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nossa Missão</h3>
                <p className="text-gray-600">Levar o amor de Cristo e transformar vidas através da Palavra de Deus.</p>
              </div>
              <div className="text-center border-2 hover:border-[#ff8c00] transition-colors p-6 rounded">
                <BookOpen className="h-12 w-12 mx-auto text-[#ff8c00] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nossa Visão</h3>
                <p className="text-gray-600">Ser uma igreja referência em ensino bíblico e comunhão cristã.</p>
              </div>
              <div className="text-center border-2 hover:border-[#ff8c00] transition-colors p-6 rounded">
                <Users className="h-12 w-12 mx-auto text-[#ff8c00] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nossos Valores</h3>
                <p className="text-gray-600">Fé, amor, comunhão, excelência e compromisso com a verdade bíblica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lives Section */}
      <section id="lives" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Assista Nossas <span className="text-[#ff8c00]">Lives</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff8c00] mx-auto mb-12"></div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${siteConfig.recentLives[0].id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-[#ff8c00] hover:bg-[#e67e00] text-white px-6 py-3 rounded"
                onClick={() => window.open(siteConfig.youtubeChannelUrl, '_blank')}
              >
                Acesse Nosso Canal no YouTube
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Lives Recentes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {siteConfig.recentLives.map((live, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open(`https://www.youtube.com/watch?v=${live.id}`, '_blank')}>
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${live.id}/maxresdefault.jpg`}
                      alt={live.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-1">{live.title}</h4>
                    <p className="text-sm text-gray-500">{live.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Próximos <span className="text-[#ff8c00]">Eventos</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff8c00] mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {siteConfig.upcomingEvents.map((event, index) => (
              <div key={index} className="border-2 p-6 rounded hover:border-[#ff8c00] transition-colors">
                <div className="mb-3">
                  <Calendar className="h-10 w-10 text-[#ff8c00]" />
                </div>
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="font-semibold text-black mb-2">{event.date}</p>
                {event.description && <p className="text-gray-600">{event.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministries" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Nossos <span className="text-[#ff8c00]">Ministérios</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff8c00] mx-auto mb-12"></div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            {siteConfig.ministries.map((ministry, index) => {
              const Icon = ministry.icon
              return (
                <div key={index} className="text-center bg-white p-6 rounded shadow hover:shadow-lg transition-shadow">
                  <Icon className="h-12 w-12 mx-auto text-[#ff8c00] mb-3" />
                  <h4 className="text-lg font-semibold">{ministry.title}</h4>
                  <p className="text-gray-600">{ministry.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Entre em <span className="text-[#ff8c00]">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff8c00] mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-10 w-10 mx-auto text-[#ff8c00] mb-4" />
              <h3 className="text-xl font-bold mb-2">Endereço</h3>
              <p className="text-gray-300">{siteConfig.address}</p>
            </div>
            <div className="text-center">
              <Phone className="h-10 w-10 mx-auto text-[#ff8c00] mb-4" />
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-gray-300">{siteConfig.phone}</p>
            </div>
            <div className="text-center">
              <Mail className="h-10 w-10 mx-auto text-[#ff8c00] mb-4" />
              <h3 className="text-xl font-bold mb-2">E-mail</h3>
              <p className="text-gray-300">{siteConfig.email}</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Nos Acompanhe nas Redes Sociais</h3>
            <div className="flex justify-center space-x-6">
              <a href={siteConfig.youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8c00] transition-colors">
                <Youtube className="h-10 w-10" />
              </a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8c00] transition-colors">
                <Instagram className="h-10 w-10" />
              </a>
              <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8c00] transition-colors">
                <Facebook className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.churchName}. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Desenvolvido com amor para a glória de Deus
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
