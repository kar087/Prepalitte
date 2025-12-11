import React, { useState } from 'react';
import { BookOpen, ChevronDown, ArrowLeft, Mail, MapPin, Search, Menu, X, GraduationCap, FileText } from 'lucide-react';

// --- DONNÉES SIMULÉES (BASE DE DONNÉES) ---
// Vous remplacerez ce tableau par le contenu rédigé par vos contributeurs.
const articlesData = [
  // --- RESSOURCES B/L ---
  {
    id: 1,
    titre: "La Guerre Froide : Synthèse complète",
    categorie: "Histoire",
    filiere: "BL",
    section: "ressources",
    type: "Fiche",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800",
    contenu: "La guerre froide est une période de tensions géopolitiques entre le bloc de l'Ouest et le bloc de l'Est (1947-1991)...",
    contenuComplet: `
      <h2 class="text-2xl font-bold text-[#800020] mb-4">Introduction</h2>
      <p class="mb-4">La guerre froide est une période de tensions géopolitiques majeures qui a structuré les relations internationales de la seconde moitié du XXe siècle. Elle oppose deux superpuissances : les États-Unis et l'URSS.</p>
      <h2 class="text-2xl font-bold text-[#800020] mb-4">I. La formation des blocs (1947-1953)</h2>
      <p class="mb-4">Dès 1947, avec la doctrine Truman et le plan Marshall d'un côté, et la doctrine Jdanov de l'autre, le monde se divise. Le "Rideau de fer" tombe sur l'Europe.</p>
    `
  },
  {
    id: 3,
    titre: "Mathématiques : Algèbre Linéaire",
    categorie: "Mathématiques",
    filiere: "BL",
    section: "ressources",
    type: "Fiche",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    contenu: "Les bases de l'algèbre linéaire pour les concours : matrices, déterminants et diagonalisation...",
    contenuComplet: "Contenu complet sur les maths..."
  },
  {
    id: 4,
    titre: "Géopolitique du Moyen-Orient",
    categorie: "Géographie",
    filiere: "BL",
    section: "ressources",
    type: "Article",
    image: "https://images.unsplash.com/photo-1526304640152-d550eacf6090?auto=format&fit=crop&q=80&w=800",
    contenu: "Comprendre les enjeux complexes de cette région clé : pétrole, religion et conflits...",
    contenuComplet: "Contenu complet sur le Moyen-Orient..."
  },

  // --- RESSOURCES A/L ---
  {
    id: 2,
    titre: "La Conscience chez Kant",
    categorie: "Philosophie",
    filiere: "AL",
    section: "ressources",
    type: "Fiche",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=800",
    contenu: "Analyse du concept de 'Je pense' qui doit pouvoir accompagner toutes mes représentations...",
    contenuComplet: "Contenu complet sur Kant..."
  },
  {
    id: 5,
    titre: "Le Romantisme : Hugo et Musset",
    categorie: "Lettres", // Catégorie mise à jour pour A/L
    filiere: "AL",
    section: "ressources",
    type: "Fiche",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800",
    contenu: "Les grandes figures du romantisme français : Hugo, Lamartine, Musset...",
    contenuComplet: "Contenu complet sur le romantisme..."
  },
  {
    id: 6,
    titre: "Latin : La déclinaison latine",
    categorie: "Langues Anciennes",
    filiere: "AL",
    section: "ressources",
    type: "Fiche",
    image: "https://images.unsplash.com/photo-1544253304-4860d46d039e?auto=format&fit=crop&q=80&w=800",
    contenu: "Rappels fondamentaux sur les déclinaisons et les cas en latin pour la version.",
    contenuComplet: "Contenu latin..."
  },
  {
    id: 7,
    titre: "La dissertation en Histoire de l'art",
    categorie: "Options",
    filiere: "AL",
    section: "ressources",
    type: "Méthode",
    image: "https://images.unsplash.com/photo-1541757754-0b6d21e3f8b3?auto=format&fit=crop&q=80&w=800",
    contenu: "Les spécificités de l'exercice pour l'option Histoire des Arts.",
    contenuComplet: "Contenu sur l'Histoire des Arts..."
  },
  {
    id: 8,
    titre: "Vocabulaire courant espagnol C1",
    categorie: "Langue Vivante",
    filiere: "AL",
    section: "ressources",
    type: "Fiche",
    image: "https://images.unsplash.com/photo-1580228026135-24e6a6f1d93b?auto=format&fit=crop&q=80&w=800",
    contenu: "Liste de vocabulaire thématique indispensable pour la version et le thème.",
    contenuComplet: "Contenu vocabulaire LV..."
  },
  {
    id: 9,
    titre: "La Révolution Française : Un article",
    categorie: "Histoire",
    filiere: "AL",
    section: "ressources",
    type: "Article",
    image: "https://images.unsplash.com/photo-1533518469312-32b70f06f522?auto=format&fit=crop&q=80&w=800",
    contenu: "Analyse des causes profondes et des conséquences à long terme de la Révolution.",
    contenuComplet: "Contenu Révolution Française..."
  },
  {
    id: 10,
    titre: "Lecture analytique en Français",
    categorie: "Français",
    filiere: "BL",
    section: "ressources",
    type: "Méthode",
    image: "https://images.unsplash.com/photo-1544253304-4860d46d039e?auto=format&fit=crop&q=80&w=800",
    contenu: "Techniques pour l'analyse de texte rapide et efficace pour les khôlles.",
    contenuComplet: "Contenu lecture analytique..."
  },
  {
    id: 11,
    titre: "Économie et sociologie : les liens",
    categorie: "SES",
    filiere: "BL",
    section: "ressources",
    type: "Article",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    contenu: "Comment articuler les concepts économiques et sociologiques dans la dissertation BL.",
    contenuComplet: "Contenu SES/Sociologie..."
  },

  // --- CONCOURS (AL & BL) ---
  {
    id: 101,
    titre: "Calendrier des concours 2024 (BL)",
    categorie: "Info Concours",
    filiere: "BL",
    section: "concours",
    type: "Info",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    contenu: "Dates clés pour les écrits et les oraux de la banque BL-SES.",
    contenuComplet: "<h1>Calendrier BL</h1><p>Voici les dates...</p>"
  },
  {
    id: 102,
    titre: "Rapport de jury : Épreuve de Philo (BL)",
    categorie: "Rapport",
    filiere: "BL",
    section: "concours",
    type: "Info",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
    contenu: "Analyse des attentes du jury pour l'épreuve de philosophie de l'année précédente.",
    contenuComplet: "Détails du rapport..."
  },
  {
    id: 201,
    titre: "Modalités d'inscription ENS Ulm (AL)",
    categorie: "Inscription",
    filiere: "AL",
    section: "concours",
    type: "Info",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    contenu: "Tout savoir sur la procédure BEL et les inscriptions aux ENS.",
    contenuComplet: "Détails inscription..."
  },
  {
    id: 202,
    titre: "L'épreuve de spécialité Lettres Modernes",
    categorie: "Épreuve",
    filiere: "AL",
    section: "concours",
    type: "Info",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    contenu: "Format, durée et attendus de l'épreuve de spécialité.",
    contenuComplet: "Détails épreuve..."
  }
];

// --- CONSTANTES FILTRES ---
const FILTERS_AL = ['Tout', 'Lettres', 'Philosophie', 'Histoire', 'Géographie', 'Langue Vivante', 'Langues Anciennes', 'Options'];
const FILTERS_BL = ['Tout', 'Mathématiques', 'SES', 'Histoire', 'Géographie', 'Philosophie', 'Français', 'Anglais'];

// --- COMPOSANT PRINCIPAL ---
const App = () => {
  // États
  const [currentPage, setCurrentPage] = useState('home'); 
  const [currentFiliere, setCurrentFiliere] = useState(null);
  const [currentSection, setCurrentSection] = useState(null); 
  const [currentArticle, setCurrentArticle] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Tout');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation
  const navigateToSection = (filiere, section) => {
    setCurrentFiliere(filiere);
    setCurrentSection(section);
    setCurrentPage('list');
    setActiveFilter('Tout');
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openArticle = (article) => {
    setCurrentArticle(article);
    setCurrentPage('article');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // --- COMPOSANTS INTERNES ---

  const Header = () => (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b-4 border-[#800020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={goHome}>
            <div className="h-10 w-10 bg-[#800020] rounded-full flex items-center justify-center mr-3 text-white">
                <BookOpen size={24} />
            </div>
            <span className="font-serif text-2xl font-bold text-[#800020]">Prépa'Litté</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            
            {/* Menu B/L */}
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-[#800020] font-semibold py-2">
                Prépa B/L <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-[#800020] rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                <a onClick={() => navigateToSection('BL', 'ressources')} className="flex items-center px-4 py-3 text-white hover:bg-white/10 cursor-pointer border-b border-white/10">
                    <FileText size={16} className="mr-2"/> Ressources
                </a>
                <a onClick={() => navigateToSection('BL', 'concours')} className="flex items-center px-4 py-3 text-white hover:bg-white/10 cursor-pointer">
                    <GraduationCap size={16} className="mr-2"/> Tout sur les concours
                </a>
              </div>
            </div>

            {/* Menu A/L */}
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-[#800020] font-semibold py-2">
                Prépa A/L <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-[#800020] rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                <a onClick={() => navigateToSection('AL', 'ressources')} className="flex items-center px-4 py-3 text-white hover:bg-white/10 cursor-pointer border-b border-white/10">
                    <FileText size={16} className="mr-2"/> Ressources
                </a>
                <a onClick={() => navigateToSection('AL', 'concours')} className="flex items-center px-4 py-3 text-white hover:bg-white/10 cursor-pointer">
                    <GraduationCap size={16} className="mr-2"/> Tout sur les concours
                </a>
              </div>
            </div>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-[#800020] font-semibold">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#800020]">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2 text-[#800020] font-bold border-b border-gray-100">Prépa B/L</div>
            <button onClick={() => navigateToSection('BL', 'ressources')} className="block w-full text-left px-6 py-2 text-gray-600">Ressources</button>
            <button onClick={() => navigateToSection('BL', 'concours')} className="block w-full text-left px-6 py-2 text-gray-600">Concours</button>
            
            <div className="px-3 py-2 text-[#800020] font-bold border-b border-gray-100 mt-2">Prépa A/L</div>
            <button onClick={() => navigateToSection('AL', 'ressources')} className="block w-full text-left px-6 py-2 text-gray-600">Ressources</button>
            <button onClick={() => navigateToSection('AL', 'concours')} className="block w-full text-left px-6 py-2 text-gray-600">Concours</button>
            
            <button onClick={() => {document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false);}} className="block w-full text-left px-3 py-2 mt-2 text-[#800020] font-bold">Contact</button>
          </div>
        </div>
      )}
    </header>
  );

  const Footer = () => (
    <footer className="bg-[#3A3A3A] text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8" id="contact">
        
        {/* Section Contact Info */}
        <div>
          <h2 className="text-2xl font-serif text-white mb-6">Contactez-nous</h2>
          <p className="mb-4 text-gray-400">Une question ? Une suggestion ? N'hésitez pas à nous écrire.</p>
          <div className="space-y-3">
             <div className="flex items-center"><Mail size={18} className="mr-3 text-[#800020]" /> contact@prepalitte.fr</div>
             <div className="flex items-center"><MapPin size={18} className="mr-3 text-[#800020]" /> Paris, France</div>
          </div>
        </div>

        {/* Section Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
           <form className="space-y-4">
              <input type="text" placeholder="Votre Nom" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#800020]" />
              <input type="email" placeholder="Votre Email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#800020]" />
              <textarea rows={3} placeholder="Votre Message" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#800020]"></textarea>
              <button type="button" className="w-full bg-[#800020] text-white font-bold py-3 rounded hover:bg-[#600018] transition duration-300">
                Envoyer le message
              </button>
           </form>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-700 text-sm">
        &copy; 2024 Prépa'Litté. Tous droits réservés.
      </div>
    </footer>
  );

  // --- VUES DU SITE ---

  const HomeView = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#800020] mb-6 leading-tight">
                    L'Excellence Littéraire,<br />Accessible à Tous.
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    La première plateforme communautaire et gratuite dédiée aux étudiants de classes préparatoires A/L et B/L. Fiches, méthodes et annales corrigées.
                </p>
                <div className="flex space-x-4">
                    <button onClick={() => navigateToSection('BL', 'ressources')} className="bg-[#800020] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#600018] transition transform hover:-translate-y-1">
                        Prépa B/L
                    </button>
                    <button onClick={() => navigateToSection('AL', 'ressources')} className="bg-white text-[#800020] border-2 border-[#800020] px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition transform hover:-translate-y-1">
                        Prépa A/L
                    </button>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                {/* Illustration Image */}
                <img 
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800" 
                    alt="Illustration Études" 
                    className="rounded-lg shadow-2xl max-w-full h-auto transform rotate-2 hover:rotate-0 transition duration-500"
                />
            </div>
        </div>
      </div>

      {/* Qui Sommes Nous Section */}
      <div className="bg-[#F0F0F0] py-20 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 bg-[#800020] h-full min-h-[400px] flex items-center justify-center p-10">
                 {/* Grand Logo */}
                 <div className="text-center">
                    <BookOpen size={120} className="text-white mx-auto mb-4" />
                    <span className="text-white font-serif text-3xl font-bold">Prépa'Litté</span>
                 </div>
            </div>
            <div className="md:w-2/3 p-10 md:p-16">
                <h2 className="text-3xl font-serif font-bold text-[#800020] mb-6">Qui sommes-nous ?</h2>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                    Prépa'Litté est né d'un constat simple : l'absence de ressources centralisées et de qualité pour les étudiants des classes préparatoires littéraires.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Notre mission est de combler ce vide en offrant une plateforme unique, créée par des anciens élèves et des professeurs.
                </p>
            </div>
        </div>
      </div>
    </div>
  );

  // Vue Liste (Utilisée pour Ressources ET Concours)
  const ListView = () => {
    // Choix des filtres selon la filière (simplifié pour AL/BL)
    const filters = currentFiliere === 'AL' ? FILTERS_AL : FILTERS_BL;
    const isConcours = currentSection === 'concours';

    // Filtrage des articles/infos
    const filteredItems = articlesData.filter(item => {
        // Filtrer par filière (AL/BL) et par section (Ressources/Concours)
        const matchFiliere = item.filiere === currentFiliere;
        const matchSection = item.section === currentSection;
        // Filtrer par matière si ce n'est PAS la section concours
        const matchFilter = isConcours || activeFilter === 'Tout' || item.categorie === activeFilter;
        
        return matchFiliere && matchSection && matchFilter;
    });

    const pageTitle = isConcours 
        ? `Tout sur les concours Prépa ${currentFiliere}` 
        : `Ressources Pédagogiques Prépa ${currentFiliere}`;
    
    const pageSubtitle = isConcours
        ? "Informations officielles, calendriers, rapports de jury et modalités d'inscription."
        : "Fiches de révision, articles et conseils méthodologiques par matière.";

    return (
      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
         <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-[#800020] mb-4">{pageTitle}</h1>
            <p className="text-gray-600">{pageSubtitle}</p>
         </div>

         {/* FILTRES (Seulement si section ressources) */}
         {!isConcours && (
             <div className="flex flex-wrap justify-center gap-3 mb-12">
                {filters.map(filter => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-6 py-2 rounded-full font-semibold transition duration-300 text-sm ${
                            activeFilter === filter 
                            ? 'bg-[#800020] text-white shadow-lg' 
                            : 'bg-white text-gray-700 border border-gray-200 hover:border-[#800020] hover:text-[#800020]'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
             </div>
         )}

         {/* GRILLE D'ITEMS */}
         {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map(item => (
                    <div 
                        key={item.id} 
                        onClick={() => openArticle(item)}
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition duration-300 group"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img src={item.image} alt={item.titre} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            <div className="absolute top-0 right-0 bg-[#800020] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                {item.type}
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="text-[#800020] font-bold text-xs uppercase tracking-wider block mb-2">{item.categorie}</span>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#800020] transition">{item.titre}</h3>
                            <p className="text-gray-500 text-sm line-clamp-3">{item.contenu}</p>
                            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-[#800020] font-semibold text-sm">
                                Lire la suite <ArrowLeft className="rotate-180 ml-2" size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         ) : (
             <div className="text-center py-20 text-gray-500">
                 <Search size={48} className="mx-auto mb-4 opacity-20" />
                 <p>Aucun contenu trouvé pour le moment.</p>
             </div>
         )}
      </div>
    );
  };

  const ArticleView = () => (
    <div className="pt-28 pb-20 px-4 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-100">
                <button onClick={() => setCurrentPage('list')} className="flex items-center text-gray-600 hover:text-[#800020] font-semibold transition">
                    <ArrowLeft size={20} className="mr-2" /> 
                    Retour {currentSection === 'concours' ? 'aux infos concours' : 'aux ressources'}
                </button>
            </div>

            <div className="h-64 md:h-96 w-full relative">
                <img src={currentArticle?.image || 'https://images.unsplash.com/photo-1518779576974-4ea6914c2b96?auto=format&fit=crop&q=80&w=800'} alt={currentArticle?.titre} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <div>
                        <span className="bg-[#800020] text-white px-3 py-1 rounded text-sm font-bold mb-3 inline-block">
                            {currentArticle?.categorie}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white shadow-sm">
                            {currentArticle?.titre}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: currentArticle?.contenuComplet || '<p>Contenu non trouvé pour cet article.</p>' }} />
                
                {!(currentArticle?.contenuComplet.includes('<') ?? false) && (
                    <div className="mt-6 text-gray-600 leading-relaxed space-y-4">
                        <p><strong>Résumé :</strong> {currentArticle?.contenu}</p>
                        <p>Voici le contenu complet de l'article, éditable directement dans le tableau `articlesData` dans le code source.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );

  return (
    <div className="font-sans text-gray-900 bg-[#F0F0F0] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'list' && <ListView />}
        {currentPage === 'article' && <ArticleView />}
      </main>
      <Footer />
    </div>
  );
}

export default App;