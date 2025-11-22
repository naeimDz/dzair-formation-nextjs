import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface Stat {
  id: number;
  value: string;
  label: string;
  suffix?: string;
}

export interface Machine {
  id: string;
  name: string;                          // Excavator - Bulldozer...
  highlight: string;                          // /machines/excavator
  shortDescription: string;              // يظهر في homepage
  longDescription?: string;              // يظهر في صفحة الآلة
  simulatorType: 'Backhoe' | 'FrontShovel' | 'Dumper' | 'Other';
  audience: 'Beginner' | 'Intermediate' | 'Professional';
  imageUrl: string;                      // الصورة الرئيسية
  gallery?: string[];                    // صور متعددة
  videoUrl?: string;                     // فيديو إن وجد (optional)
  parallaxAsset?: string;                // صورة عالية الجودة لسكشن parallax

  showInHomepage?: boolean;              // التحكم في الظهور في الصفحة الرئيسية
  featured?: boolean;                    // يظهر كبطاقة خاصة أو "الأكثر طلباً"

  // عناصر تخص مدرسة التكوين (مهمة)
  durationDays?: number;                 // مدة التكوين (مثلاً 10 أيام)
  difficultyLevel?: "beginner" | "intermediate" | "pro";
  skills?: string[];                     // ماذا يتعلم الطالب؟ مهارات مفصلة
  certificate?: boolean;                 // هل فيها شهادة دولة؟
  simulationType?: "cockpit" | "desktop" | "hybrid";

  // شركات – إن استهدفت B2B
  suitableForCompanies?: boolean;

  // SEO (في حالة نوية تعمل public pages)
  seoTitle?: string;
  seoDescription?: string;
}


export interface Sector {
  id: string;
  title: string;
  description: string;
  extra_description: string;
  icon: LucideIcon;
  machines: Machine[];
  color: string;
  backgroundImage: string;
}

export interface ProgramPoint {
  text: string;
}

export interface HSEPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Benefits {
  title: string;
  items: {
    value: number;
    suffix?: string;
    prefix?: string;
    title: string;
    description: string;
  }[];
}


export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ContactNumber {
  id: string;
  label: string;
  number: string;
  icon: React.ReactNode;
  color: string;
}

export interface RevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'scale-in' | 'slide-right';
  delay?: number;
  className?: string;
}

export interface JourneyStep {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

export interface Course {
  id: string;
  title: string;
  startDate: string;
  wilaya: string; // State/Province
  academyName: string;
  duration: string;
  status: 'open' | 'full' | 'closing_soon';
}