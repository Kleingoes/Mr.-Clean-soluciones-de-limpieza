const GRADIENTS = {
  'navy-to-white': 'from-brand-navy to-white',
  'white-to-navy': 'from-white to-brand-navy',
  'gray-to-navy': 'from-gray-50 to-brand-navy',
}

export default function SectionDivider({ variant = 'navy-to-white' }) {
  return (
    <div className={`h-16 md:h-20 bg-gradient-to-b ${GRADIENTS[variant]}`} />
  )
}
