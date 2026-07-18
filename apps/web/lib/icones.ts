import {
  FileCheck,
  FileText,
  Recycle,
  Briefcase,
  Droplets,
  Search,
  Leaf,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';

const icones: Record<string, LucideIcon> = {
  FileCheck,
  FileText,
  Recycle,
  Briefcase,
  Droplets,
  Search,
  Leaf,
  GraduationCap,
};

export function tipoLucide(nome: string): LucideIcon {
  return icones[nome] ?? Leaf;
}
