import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'أكاديمية الجزائر لتكوين سائقي الآلات الثقيلة',
  description: 'تكوين معتمد على أحدث المحاكيات الافتراضية والآلات الحقيقية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}