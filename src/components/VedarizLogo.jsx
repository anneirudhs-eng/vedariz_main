const LOGO = 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/258651ba8_ChatGPTImageMay22202602_04_32PM.png';

const heights = { sm: 'h-12', md: 'h-16', lg: 'h-24' };

export default function VedarizLogo({ size = 'md' }) {
  return (
    <img
      src={LOGO}
      alt="VEDARIZ DeepTech Advisors"
      className={`${heights[size] || heights.md} w-auto object-contain`}
      style={{ filter: 'url(#remove-white-logo)' }}
    />
  );
}