interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md';
}

export default function Badge({ children, variant = 'primary', size = 'md' }: BadgeProps) {
  const variants = {
    primary: 'bg-violet-100 text-violet-700',
    secondary: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-amber-100 text-amber-700',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-4 py-2',
  };

  return (
    <span
      className={`${variants[variant]} ${sizes[size]} font-semibold rounded-full inline-block`}
    >
      {children}
    </span>
  );
}
