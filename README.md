# Airwallex Landing Page

Une application web moderne reproduisant le design et la structure du site Airwallex, transformée à partir d'un template existant.

## 🚀 Fonctionnalités

### Navigation

- **Menu principal** avec dropdown plein écran reproduisant exactement le design d'Airwallex
- **4 sections principales** : Products, Solutions, Developers, Company
- **Navigation mobile** avec menu latéral responsive
- **Tous les liens** sont fonctionnels et connectés à des pages dédiées

### Design

- **Header moderne** avec logo, navigation et boutons "Log in" / "See a demo"
- **Dropdown menus** qui prennent toute la largeur de l'écran
- **Sections du bas** reproduisant les cartes Wallet, Corporate Cards et Integrations
- **Design responsive** optimisé pour tous les appareils

### Pages créées

- **50+ pages** générées automatiquement pour couvrir tous les éléments du menu
- **Pages principales** : Business Accounts, Spend, Payments, Solutions, Developers, Company
- **Pages spécialisées** : API documentation, case studies, support, etc.
- **Structure cohérente** avec header, contenu et footer sur toutes les pages

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js (50+ pages)
│   ├── business-accounts/  # Comptes business
│   ├── spend/             # Gestion des dépenses
│   ├── payments/          # Solutions de paiement
│   ├── solutions/         # Solutions par industrie
│   ├── developers/        # Documentation développeur
│   ├── company/           # Pages entreprise
│   └── ...
├── components/
│   ├── headers/           # Header principal
│   ├── menu/              # Navigation et dropdown
│   ├── elements/          # Composants réutilisables
│   └── ...
└── config/
    ├── navigation.json    # Structure de navigation
    └── pages-config.json  # Configuration des pages
```

## 🛠️ Technologies utilisées

- **Next.js 14** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **React Icons** pour les icônes
- **Radix UI** pour les composants d'interface

## 🎨 Composants principaux

### Menu et Navigation

- `DesignStudioHeader.tsx` - Header principal avec navigation
- `Menu.tsx` - Menu dropdown plein écran
- `SideNavModal.tsx` - Menu mobile
- `LeftSubmenu.tsx` - Sous-menus latéraux

### Sections spéciales

- `BottomSection.tsx` - Section du bas avec Wallet, Cards, Integrations
- `WalletSection.tsx` - Affichage du portefeuille multi-devises
- `CorporateCardsSection.tsx` - Cartes d'entreprise
- `IntegrationsSection.tsx` - Intégrations tierces

### Pages générées

- Toutes les pages utilisent un template cohérent
- Hero sections avec gradients
- Sections de fonctionnalités
- Design responsive

## 🚀 Installation et démarrage

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 📝 Génération automatique des pages

Le projet inclut un script pour générer automatiquement toutes les pages :

```bash
# Générer toutes les pages manquantes
node scripts/generate-pages.js
```

## 🎯 Fonctionnalités reproduites

### Menu Products

- Business Accounts (Global Accounts, FX & Transfers)
- Spend (Corporate Cards, Expense Management, Bill Pay)
- Payments (Checkout, Plugins, Links)
- Platform APIs (Connected Accounts, Accounts, Payments, etc.)
- Use Cases (Banking as a Service, Global Treasury, etc.)

### Menu Solutions

- Solutions par industrie (Travel, eCommerce, Software, etc.)
- Solutions spécialisées (SaaS, Fintech, Professional Services, etc.)

### Menu Developers

- Documentation produit
- Référence API
- Liens rapides vers toutes les APIs

### Menu Company

- À propos d'Airwallex
- Carrières
- Ressources (Blog, Newsroom, FAQ, Support)
- Études de cas

## 🔧 Personnalisation

### Modifier la navigation

Éditez `src/config/navigation.json` pour modifier la structure du menu.

### Ajouter de nouvelles pages

1. Ajoutez la configuration dans `src/config/pages-config.json`
2. Exécutez `node scripts/generate-pages.js`

### Modifier le design

- Les styles sont dans les composants avec Tailwind CSS
- Les couleurs principales : purple-600, gray-900, etc.
- Design system cohérent avec Airwallex

## 📱 Responsive Design

- **Desktop** : Menu dropdown plein écran
- **Tablet** : Adaptation automatique
- **Mobile** : Menu latéral avec accordéon

## 🎨 Design System

- **Couleurs** : Purple (#9333ea), Gray (#111827), White
- **Typographie** : Inter, hiérarchie claire
- **Espacement** : Système cohérent avec Tailwind
- **Animations** : Transitions fluides

## 📄 Licence

Ce projet est créé à des fins éducatives et de démonstration.

{
"email": "brokertestuser@mechanicspedia.com",
"password": "Je suis dev2022@"
}
