#!/bin/bash

echo "🧹 Suppression des imports non utilisés..."

# Liste des fichiers avec des warnings d'imports non utilisés
files=(
  "src/app/career-muxxus/page.tsx"
  "src/app/case-studies/page.tsx"
  "src/app/company/page.tsx"
  "src/app/contact/page.tsx"
  "src/app/developers/page.tsx"
  "src/app/downloads/page.tsx"
  "src/app/events/page.tsx"
  "src/app/integrations/page.tsx"
  "src/app/muxxus-blog/page.tsx"
  "src/app/muxxus-faq/page.tsx"
  "src/app/news/page.tsx"
  "src/app/partners/page.tsx"
  "src/app/payments/checkout/page.tsx"
  "src/app/pricing/page.tsx"
  "src/app/privacy/page.tsx"
  "src/app/product-tour/page.tsx"
  "src/app/security/page.tsx"
  "src/app/portfolio/page.tsx"
)

# Supprimer les imports spécifiques non utilisés
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Nettoyage de $file..."
    
    # Supprimer les imports Image non utilisés
    sed -i '' '/^import Image from "next\/image";$/d' "$file"
    
    # Supprimer les imports Link non utilisés
    sed -i '' '/^import Link from "next\/link";$/d' "$file"
    
    # Supprimer les imports d'icônes non utilisés (exemples)
    sed -i '' '/^import { FaUsers } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaGlobe } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaCreditCard } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaClock } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaTicketAlt } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaSearch } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaTag } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaQuestionCircle } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaBook } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaCalendar } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaUser } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaFilter } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaHandshake } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaExternalLinkAlt } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaStar } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaRocket } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaBuilding } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaIndustry } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaChartLine } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaDownload } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaFilePdf } from "react-icons\/fa";$/d' "$file"
    sed -i '' '/^import { FaShieldAlt } from "react-icons\/fa";$/d' "$file"
    
    echo "✅ $file nettoyé"
  fi
done

echo "✨ Nettoyage terminé !"
