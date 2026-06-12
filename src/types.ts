export type LinkIconType =
  | 'instagram'
  | 'whatsapp'
  | 'tiktok'
  | 'linkedin'
  | 'github'
  | 'youtube'
  | 'spotify'
  | 'website'
  | 'phone'
  | 'email';

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: LinkIconType;
  isActive: boolean;
}

export type CardMaterial =
  | 'matte-black'
  | 'cosmic-purple'
  | 'carbon-fiber'
  | 'brushed-gold'
  | 'minimal-white';

export type CardLogoType =
  | 'wireless'
  | 'bolt'
  | 'circle'
  | 'crown'
  | 'sparkle'
  | 'hex';

export interface DigitalProfile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  avatarType: 'emoji' | 'upload';
  avatarEmoji: string;
  themePreset: string;
  bgColorStart: string;
  bgColorEnd: string;
  textColor: string;
  btnStyle: string; // 'pill' | 'rounded' | 'sharp' | 'glow'
  btnBg: string;
  btnTextColor: string;
  socials: SocialLink[];
}

export interface CardCustomization {
  material: CardMaterial;
  logo: CardLogoType;
  holderName: string;
  customLogoText: string;
  highlightColor: string;
}

export interface ProfileThemePreset {
  id: string;
  name: string;
  bgColorStart: string;
  bgColorEnd: string;
  textColor: string;
  btnBg: string;
  btnTextColor: string;
  btnStyle: string;
}
