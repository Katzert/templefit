import { NextResponse } from 'next/server';
import { siteConfig, features, testimonials, products, alliances } from '@/data/content';

export async function GET() {
  return NextResponse.json({
    siteConfig,
    features,
    testimonials,
    products,
    alliances
  });
}
