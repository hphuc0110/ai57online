const badges = [
  {
    label: '420H đào tạo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </svg>
    ),
  },
  // {
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
  //       <circle cx="12" cy="12" r="9" />
  //       <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" strokeLinecap="round" />
  //     </svg>
  //   ),
  // },
  {
    label: 'Mentor 1:5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function FeatureBadges() {
  return (
    <div className="mt-8 flex flex-col gap-2 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-3">
      {badges.map((badge) => (
        <span
          key={badge.label}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-hero-navy px-4 py-2.5 text-xs font-semibold text-white shadow-md sm:w-auto sm:justify-start"
        >
          {badge.icon}
          {badge.label}
        </span>
      ))}
    </div>
  )
}
