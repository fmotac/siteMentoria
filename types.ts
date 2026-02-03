import { LucideIcon } from 'lucide-react';

export interface ModuleItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon?: LucideIcon;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}