/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'about' | 'programmes' | 'admissions' | 'contact';

export interface College {
  id: string;
  name: string;
  description: string;
  iconName: string;
  programmes: string[];
  imageUrl: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
