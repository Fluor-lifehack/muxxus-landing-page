import React from 'react';
import { Metadata } from 'next';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code2, 
  Palette, 
  Component, 
  Layers, 
  Zap, 
  BookOpen
} from 'lucide-react';
import ComponentCard from '@/components/resources/ComponentCard';
import MuxxusHero from '@/components/muxxus/MuxxusHero';
import MuxxusAbout from '@/components/muxxus/MuxxusAbout';
import MuxxusService from '@/components/muxxus/MuxxusService';
import MuxxusFAQ from '@/components/muxxus/MuxxusFAQ';
import MuxxusCTA from '@/components/muxxus/MuxxusCTA';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const metadata: Metadata = {
  title: 'Ressources Composants - Muxxus',
  description: 'Documentation complète de tous les composants disponibles dans le projet Muxxus',
};



export default function ResourcesPage() {
  const uiComponents = [
    {
      title: 'Button',
      description: 'Composant bouton avec différentes variantes et tailles',
      category: 'UI',
      usage: 'Bouton principal pour les actions utilisateur',
      props: ['variant', 'size', 'children', 'onClick'],
      example: "import { Button } from '@/components/ui/button';"
    },
    {
      title: 'Card',
      description: 'Conteneur de carte avec header, content et footer',
      category: 'UI',
      usage: 'Affichage d\'informations organisées en cartes',
      props: ['CardHeader', 'CardContent', 'CardFooter'],
      example: "import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';"
    },
    {
      title: 'Dialog',
      description: 'Modal dialog pour les interactions importantes',
      category: 'UI',
      usage: 'Affichage de formulaires ou d\'informations critiques',
      props: ['open', 'onOpenChange', 'children'],
      example: "import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';"
    },
    {
      title: 'Accordion',
      description: 'Composant accordéon pour organiser le contenu',
      category: 'UI',
      usage: 'Organisation de contenu en sections pliables',
      props: ['type', 'collapsible', 'children'],
      example: "import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';"
    },
    {
      title: 'Input',
      description: 'Champ de saisie de texte standard',
      category: 'UI',
      usage: 'Saisie de données utilisateur',
      props: ['type', 'placeholder', 'value', 'onChange'],
      example: "import { Input } from '@/components/ui/input';"
    },
    {
      title: 'Select',
      description: 'Menu déroulant de sélection',
      category: 'UI',
      usage: 'Choix parmi une liste d\'options',
      props: ['value', 'onValueChange', 'children'],
      example: "import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';"
    },
    {
      title: 'Navigation Menu',
      description: 'Menu de navigation principal',
      category: 'UI',
      usage: 'Navigation principale du site',
      props: ['children'],
      example: "import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';"
    },
    {
      title: 'Carousel',
      description: 'Carrousel d\'images ou de contenu',
      category: 'UI',
      usage: 'Affichage de contenu en slides',
      props: ['children', 'opts'],
      example: "import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';"
    },
    {
      title: 'Form',
      description: 'Composant de formulaire avec validation',
      category: 'UI',
      usage: 'Création de formulaires avec validation automatique',
      props: ['children', 'onSubmit'],
      example: "import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';"
    },
    {
      title: 'Scroll Animations',
      description: 'Animations au scroll avec Framer Motion',
      category: 'UI',
      usage: 'Animations déclenchées lors du scroll',
      props: ['children', 'className'],
      example: "import { ScrollAnimation } from '@/components/ui/scroll-animations';"
    },
    {
      title: 'Animated Background',
      description: 'Arrière-plan animé avec particules',
      category: 'UI',
      usage: 'Arrière-plans dynamiques pour les sections',
      props: ['children', 'className'],
      example: "import { AnimatedBackground } from '@/components/ui/animated-background';"
    }
  ];

  const muxxusComponents = [
    {
      title: 'MuxxusHero',
      description: 'Section héro principale avec titre, description et boutons d&apos;action',
      category: 'Muxxus',
      usage: 'Page d&apos;accueil et sections principales avec titre en grand format',
      props: ['title', 'subtitle', 'description', 'primaryButton', 'secondaryButton', 'videoUrl', 'image', 'stats'],
      example: "import { MuxxusHero } from '@/components/muxxus/MuxxusHero';"
    },
    {
      title: 'MuxxusAbout',
      description: 'Section à propos avec image, statistiques et fonctionnalités',
      category: 'Muxxus',
      usage: 'Présentation de l&apos;entreprise ou du service avec détails',
      props: ['title', 'subtitle', 'description', 'image', 'stats', 'actionButton', 'features'],
      example: "import { MuxxusAbout } from '@/components/muxxus/MuxxusAbout';"
    },
    {
      title: 'MuxxusService',
      description: 'Section de services avec liste détaillée et fonctionnalités',
      category: 'Muxxus',
      usage: 'Présentation des services offerts avec descriptions complètes',
      props: ['title', 'subtitle', 'description', 'services', 'showViewAll', 'viewAllText', 'viewAllHref'],
      example: "import { MuxxusService } from '@/components/muxxus/MuxxusService';"
    },
    {
      title: 'MuxxusTeam',
      description: 'Section équipe avec photos et informations détaillées',
      category: 'Muxxus',
      usage: 'Présentation de l\'équipe avec photos et descriptions',
      props: ['title', 'subtitle', 'description', 'members', 'showViewAll', 'viewAllText', 'viewAllHref'],
      example: "import { MuxxusTeam } from '@/components/muxxus/MuxxusTeam';"
    },
    {
      title: 'MuxxusFAQ',
      description: 'Section FAQ avec accordéon et questions organisées',
      category: 'Muxxus',
      usage: 'Questions fréquemment posées avec réponses organisées',
      props: ['title', 'subtitle', 'description', 'questions', 'showViewAll', 'viewAllText', 'viewAllHref'],
      example: "import { MuxxusFAQ } from '@/components/muxxus/MuxxusFAQ';"
    },
    {
      title: 'MuxxusPricing',
      description: 'Section tarification avec plans et fonctionnalités',
      category: 'Muxxus',
      usage: 'Affichage des prix et plans de tarification',
      props: ['title', 'subtitle', 'description', 'plans', 'showViewAll', 'viewAllText', 'viewAllHref'],
      example: "import { MuxxusPricing } from '@/components/muxxus/MuxxusPricing';"
    },
    {
      title: 'MuxxusContact',
      description: 'Section de contact avec formulaire et informations',
      category: 'Muxxus',
      usage: 'Formulaire de contact et informations de contact',
      props: ['title', 'subtitle', 'description', 'contactInfo', 'showForm', 'formFields'],
      example: "import { MuxxusContact } from '@/components/muxxus/MuxxusContact';"
    },
    {
      title: 'MuxxusCTA',
      description: 'Call-to-action avec bouton principal et texte motivant',
      category: 'Muxxus',
      usage: 'Encouragement à l\'action avec bouton principal',
      props: ['title', 'subtitle', 'description', 'primaryButton', 'secondaryButton', 'background'],
      example: "import { MuxxusCTA } from '@/components/muxxus/MuxxusCTA';"
    },
    {
      title: 'MuxxusProcess',
      description: 'Section processus avec étapes numérotées',
      category: 'Muxxus',
      usage: 'Explication du processus étape par étape',
      props: ['title', 'subtitle', 'description', 'steps', 'showNumbers', 'orientation'],
      example: "import { MuxxusProcess } from '@/components/muxxus/MuxxusProcess';"
    },
    {
      title: 'MuxxusTestimonials',
      description: 'Témoignages clients avec photos et avis',
      category: 'Muxxus',
      usage: 'Avis et témoignages de clients satisfaits',
      props: ['title', 'subtitle', 'description', 'testimonials', 'showAvatars', 'showRatings'],
      example: "import { MuxxusTestimonials } from '@/components/muxxus/MuxxusTestimonials';"
    },
    {
      title: 'MuxxusAI',
      description: 'Section IA avec fonctionnalités avancées et démonstrations',
      category: 'Muxxus',
      usage: 'Présentation des fonctionnalités IA et innovations',
      props: ['title', 'subtitle', 'description', 'features', 'demoUrl', 'showDemo'],
      example: "import { MuxxusAiSection } from '@/components/muxxus/MuxxusAiSection';"
    },
    {
      title: 'MuxxusCard',
      description: 'Carte personnalisée Muxxus avec design unique',
      category: 'Muxxus',
      usage: 'Affichage d\'informations en cartes stylisées',
      props: ['title', 'description', 'icon', 'link', 'variant', 'size'],
      example: "import { MuxxusCard } from '@/components/muxxus/MuxxusCard';"
    },
    {
      title: 'MuxxusSectionTitle',
      description: 'Titre de section avec sous-titre et description',
      category: 'Muxxus',
      usage: 'Titres de section standardisés pour la cohérence',
      props: ['title', 'subtitle', 'description', 'align', 'className'],
      example: "import { MuxxusSectionTitle } from '@/components/muxxus/MuxxusSectionTitle';"
    },
    {
      title: 'StatMuxxus',
      description: 'Section de statistiques avec compteurs animés',
      category: 'Muxxus',
      usage: 'Affichage de statistiques importantes avec animations',
      props: ['title', 'subtitle', 'stats', 'showAnimation', 'layout'],
      example: "import { StatMuxxus } from '@/components/muxxus/StatMuxxus';"
    },
    {
      title: 'MuxxusCenteredSection',
      description: 'Section centrée avec contenu aligné au centre',
      category: 'Muxxus',
      usage: 'Sections avec contenu centré pour l\'accent',
      props: ['title', 'subtitle', 'description', 'children', 'background', 'padding'],
      example: "import { MuxxusCenteredSection } from '@/components/muxxus/MuxxusCenteredSection';"
    },
    {
      title: 'MuxxusSecurity',
      description: 'Section sécurité avec fonctionnalités de protection',
      category: 'Muxxus',
      usage: 'Présentation des mesures de sécurité',
      props: ['title', 'subtitle', 'description', 'features', 'certifications', 'showBadges'],
      example: "import { MuxxusSecurity } from '@/components/muxxus/MuxxusSecurity';"
    },
    {
      title: 'MuxxusSteps',
      description: 'Section étapes avec progression visuelle',
      category: 'Muxxus',
      usage: 'Processus étape par étape avec indicateurs visuels',
      props: ['title', 'subtitle', 'steps', 'currentStep', 'showProgress', 'orientation'],
      example: "import { MuxxusSteps } from '@/components/muxxus/MuxxusSteps';"
    },
    {
      title: 'MuxxusScrollImage',
      description: 'Image avec effet de scroll et animations',
      category: 'Muxxus',
      usage: 'Images avec effets de parallaxe et animations au scroll',
      props: ['src', 'alt', 'className', 'effect', 'speed'],
      example: "import { MuxxusScrollImage } from '@/components/muxxus/MuxxusScrollImage';"
    },
    {
      title: 'MuxxusListers',
      description: 'Liste d\'éléments avec design personnalisé',
      category: 'Muxxus',
      usage: 'Affichage de listes avec style Muxxus',
      props: ['items', 'title', 'subtitle', 'layout', 'showIcons'],
      example: "import { MuxxusListers } from '@/components/muxxus/MuxxusListers';"
    },
    {
      title: 'MuxxusColumns',
      description: 'Section avec colonnes organisées',
      category: 'Muxxus',
      usage: 'Organisation de contenu en colonnes',
      props: ['title', 'subtitle', 'columns', 'layout', 'gap'],
      example: "import { MuxxusColumns } from '@/components/muxxus/MuxxusColumns';"
    }
  ];

  const utilityComponents = [
    {
      title: 'SectionDivider',
      description: 'Séparateur de section avec design personnalisé',
      category: 'Utility',
      usage: 'Séparation visuelle entre sections',
      props: ['className', 'children'],
      example: "import { SectionDivider } from '@/components/ui/SectionDivider';"
    },
    {
      title: 'SectionSpacing',
      description: 'Espacement de section standardisé',
      category: 'Utility',
      usage: 'Espacement cohérent entre sections',
      props: ['children', 'className'],
      example: "import { SectionSpacing } from '@/components/ui/section-spacing';"
    },
    {
      title: 'Spacing',
      description: 'Composant d\'espacement réutilisable',
      category: 'Utility',
      usage: 'Espacement vertical et horizontal',
      props: ['size', 'direction'],
      example: "import { Spacing } from '@/components/ui/spacing';"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-4xl font-bold">Ressources Composants Muxxus</h1>
              <p className="text-xl text-muted-foreground">
                Documentation complète des composants de votre template Muxxus
              </p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Cette page centralise tous les composants disponibles dans votre template Muxxus. 
            Utilisez-la comme référence pour comprendre comment utiliser chaque composant, 
            leurs props disponibles et des exemples d&apos;import.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="muxxus" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="muxxus" className="flex items-center gap-2">
              <Component className="h-4 w-4" />
              Composants Muxxus
            </TabsTrigger>
            <TabsTrigger value="ui" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Composants UI
            </TabsTrigger>
            <TabsTrigger value="utility" className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              Composants Utilitaires
            </TabsTrigger>
                          <TabsTrigger value="guide" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Guide d&apos;Usage
              </TabsTrigger>
          </TabsList>

          {/* Composants Muxxus - ONGLET PRINCIPAL */}
          <TabsContent value="muxxus" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Composants Muxxus</h2>
              <p className="text-muted-foreground">
                Composants métier spécifiques à votre template Muxxus avec design et fonctionnalités uniques
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {muxxusComponents.map((component, index) => (
                <ComponentCard key={index} {...component} />
              ))}
            </div>
          </TabsContent>

          {/* Composants UI */}
          <TabsContent value="ui" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Composants UI de Base</h2>
                              <p className="text-muted-foreground">
                  Composants fondamentaux basés sur shadcn/ui pour la construction d&apos;interfaces
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uiComponents.map((component, index) => (
                <ComponentCard key={index} {...component} />
              ))}
            </div>
          </TabsContent>

          {/* Composants Utilitaires */}
          <TabsContent value="utility" className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Composants Utilitaires</h2>
                              <p className="text-muted-foreground">
                  Composants d&apos;aide et d&apos;organisation du layout
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {utilityComponents.map((component, index) => (
                <ComponentCard key={index} {...component} />
              ))}
            </div>
          </TabsContent>

          {/* Guide d'Usage */}
          <TabsContent value="guide" className="mt-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Guide d&apos;Usage Muxxus</h2>
                <p className="text-muted-foreground mb-6">
                  Conseils et bonnes pratiques pour utiliser efficacement vos composants Muxxus
                </p>
              </div>

              {/* Démonstrations des Composants Muxxus */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Démonstrations des Composants</h3>
                  
                  {/* MuxxusHero Demo */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">MuxxusHero - Section Héro</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <MuxxusHero
                        title="DÉMONSTRATION COMPOSANT"
                        subtitle="EXEMPLE"
                        description="Ceci est un exemple de rendu du composant MuxxusHero avec des données de démonstration pour montrer son apparence et ses fonctionnalités."
                        primaryButton={{
                          text: "Commencer",
                          href: "#"
                        }}
                        secondaryButton={{
                          text: "En savoir plus",
                          href: "#"
                        }}
                        stats={{
                          number: "99%",
                          label: "satisfaction client"
                        }}
                      />
                    </div>
                  </div>

                  {/* MuxxusAbout Demo */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">MuxxusAbout - Section À Propos</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <MuxxusAbout
                        title="À Propos de Nos Composants"
                        subtitle="QUI SOMMES-NOUS"
                        description="Nos composants Muxxus sont conçus pour offrir une expérience utilisateur exceptionnelle avec des animations fluides et un design moderne."
                        features={[
                          "Design responsive et moderne",
                          "Animations GSAP intégrées",
                          "Accessibilité optimisée",
                          "Performance exceptionnelle"
                        ]}
                        actionButton={{
                          text: "Découvrir",
                          href: "#"
                        }}
                      />
                    </div>
                  </div>

                  {/* MuxxusService Demo */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">MuxxusService - Section Services</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <MuxxusService
                        title="Nos Services"
                        subtitle="CE QUE NOUS OFFRONS"
                        description="Une gamme complète de services pour répondre à tous vos besoins digitaux."
                        services={[
                          {
                            id: 1,
                            title: "Design Web",
                            description: "Création de sites web modernes et responsives",
                            features: ["UI/UX Design", "Responsive Design", "Optimisation SEO"],
                            icon: { light: "🎨", dark: "🎨" },
                            slug: "web-design"
                          },
                          {
                            id: 2,
                            title: "Développement",
                            description: "Développement d'applications web performantes",
                            features: ["Frontend", "Backend", "API Integration"],
                            icon: { light: "💻", dark: "💻" },
                            slug: "development"
                          }
                        ]}
                        showViewAll={false}
                      />
                    </div>
                  </div>

                  {/* MuxxusFAQ Demo */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">MuxxusFAQ - Section FAQ</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <MuxxusFAQ
                        title="Questions Fréquentes"
                        subtitle="FAQ"
                        description="Trouvez rapidement les réponses à vos questions sur nos composants Muxxus."
                        faqs={[
                          {
                            question: "Comment utiliser les composants Muxxus ?",
                            answer: "Importez simplement le composant depuis @/components/muxxus et utilisez-le avec les props appropriées."
                          },
                          {
                            question: "Les composants sont-ils responsives ?",
                            answer: "Oui, tous nos composants sont conçus pour être parfaitement responsives sur tous les appareils."
                          }
                        ]}
                      />
                    </div>
                  </div>

                  {/* MuxxusCTA Demo */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">MuxxusCTA - Call to Action</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <MuxxusCTA
                        title="Prêt à Commencer ?"
                        subtitle="COMMENCER"
                        description="Rejoignez des milliers de développeurs qui utilisent déjà nos composants Muxxus pour créer des expériences exceptionnelles."
                        buttons={[
                          { text: "Commencer Maintenant", href: "#", variant: "primary" },
                          { text: "Voir la Documentation", href: "#", variant: "secondary" }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="imports">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4" />
                      Imports et Exports Muxxus
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-4">
                      <p>
                        Tous les composants Muxxus sont exportés depuis le dossier muxxus. 
                        Utilisez les imports directs pour une meilleure performance :
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <pre className="text-sm bg-muted p-3 rounded-md overflow-x-auto">
                          <code>
{`// Composants Muxxus principaux
import { MuxxusHero } from '@/components/muxxus/MuxxusHero';
import { MuxxusAbout } from '@/components/muxxus/MuxxusAbout';
import { MuxxusService } from '@/components/muxxus/MuxxusService';

// Ou depuis l'index centralisé
import { MuxxusHero, MuxxusAbout, MuxxusService } from '@/components/muxxus';`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="styling">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Palette className="h-4 w-4" />
                      Style et Design Muxxus
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-4">
                      <p>
                        Les composants Muxxus utilisent un design system cohérent :
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Classes Tailwind personnalisées (container2, has_fade_anim, etc.)</li>
                        <li>Animations GSAP intégrées pour les transitions</li>
                        <li>Thème clair/sombre automatique</li>
                        <li>Design responsive avec breakpoints personnalisés</li>
                        <li>Typographie cohérente avec la famille Teko</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="composition">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      Composition des Composants Muxxus
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-4">
                      <p>
                        Les composants Muxxus sont conçus pour être composables. Exemples :
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <code className="text-sm">
                          &lt;MuxxusHero title=&quot;Titre&quot; subtitle=&quot;Sous-titre&quot; /&gt;
                        </code>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="responsive">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Design Responsive Muxxus
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-4">
                      <p>
                        Tous les composants Muxxus sont responsive par défaut :
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Breakpoints personnalisés (sm, md, lg, xl, 2xl)</li>
                        <li>Grilles flexibles qui s&apos;adaptent à la taille d&apos;écran</li>
                        <li>Espacement adaptatif (py-[80px] xl:py-[160px])</li>
                        <li>Typographie responsive (text-[80px] xl:text-[110px] 2xl:text-[190px])</li>
                        <li>Layouts qui se réorganisent selon l&apos;espace disponible</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="animations">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Animations et GSAP
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-4">
                      <p>
                        Les composants Muxxus incluent des animations GSAP :
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Animations de fade (has_fade_anim)</li>
                        <li>Animations de texte (has_text_mov_anim)</li>
                        <li>Animations déclenchées au scroll</li>
                        <li>Transitions fluides entre états</li>
                        <li>Performance optimisée avec useGSAP</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Section Conseils Rapides */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Conseils Rapides Muxxus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Utilisez les composants Muxxus avec leurs props spécifiques pour une meilleure performance.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Design System</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Respectez le design system Muxxus pour maintenir la cohérence visuelle.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Animations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Les animations GSAP sont intégrées par défaut, utilisez-les pour l&apos;engagement.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Responsive</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Testez sur tous les breakpoints Muxxus (sm, md, lg, xl, 2xl).
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Démonstrations des Composants UI de Base */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Démonstrations des Composants UI de Base</h3>
                
                {/* Composants de Formulaires */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4">Composants de Formulaires</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h5 className="font-medium">Input</h5>
                      <Input placeholder="Tapez votre texte ici..." />
                    </div>
                    <div className="space-y-4">
                      <h5 className="font-medium">Select</h5>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Composants d'Action */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4">Composants d&apos;Action</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default">Bouton Principal</Button>
                    <Button variant="secondary">Bouton Secondaire</Button>
                    <Button variant="outline">Bouton Contour</Button>
                    <Button variant="ghost">Bouton Fantôme</Button>
                    <Button variant="destructive">Bouton Destructeur</Button>
                  </div>
                </div>

                {/* Composants de Navigation */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4">Composants de Navigation</h4>
                  <Tabs defaultValue="tab1" className="w-full">
                    <TabsList>
                      <TabsTrigger value="tab1">Onglet 1</TabsTrigger>
                      <TabsTrigger value="tab2">Onglet 2</TabsTrigger>
                      <TabsTrigger value="tab3">Onglet 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1" className="mt-4">
                      <p>Contenu de l&apos;onglet 1 - Exemple de rendu des composants Tabs.</p>
                    </TabsContent>
                    <TabsContent value="tab2" className="mt-4">
                      <p>Contenu de l&apos;onglet 2 - Les composants Tabs permettent d&apos;organiser le contenu.</p>
                    </TabsContent>
                    <TabsContent value="tab3" className="mt-4">
                      <p>Contenu de l&apos;onglet 3 - Interface claire et intuitive pour la navigation.</p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>
              Cette documentation couvre tous les composants de votre template Muxxus. 
              Pour des questions spécifiques, consultez les composants directement dans le code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
