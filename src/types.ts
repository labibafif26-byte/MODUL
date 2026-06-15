/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SubSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface Chapter {
  id: string;
  title: string;
  badge: string;
  readTime: string;
  subsections: SubSection[];
}

export interface CompareAspect {
  aspect: string;
  traditional: string;
  modern: string;
  icon: string;
}

export interface TeacherRole {
  role: string;
  desc: string;
  icon: string;
  color: string;
}

export interface StudentChar {
  id: number;
  characteristic: string;
  desc: string;
  implication: string;
  icon: string;
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
}

export interface EducationLevel {
  id: string;
  level: string;
  title: string;
  characteristics: string;
  challenges: string;
  fourC: {
    critical: string;
    creative: string;
    comm: string;
    collab: string;
  };
  suitableTech: string;
}

export interface TeamMember {
  name: string;
  nim: string;
  role: string;
  avatarSeed: string; // seed for elegant initial display or consistent avatar
  gradient: string;
}

export interface ReferenceItem {
  citation: string;
  year: string;
  author: string;
  title: string;
  publisher: string;
}

export interface NotificationState {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  type: 'info' | 'success' | 'alert';
}
