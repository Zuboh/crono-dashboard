interface AvatarProps {
  src?: string
  name: string
  size?: string
  className?: string
}

export function Avatar({
  src,
  name,
  size = 'h-8 w-8',
  className = '',
}: AvatarProps) {
  return (
    <span
      className={`flex items-center justify-center overflow-hidden rounded-2xl border border-surface-avatar bg-white ${size} ${className}`}
    >
      {src ? (
        <img src={src} alt="" className="h-full w-full object-cover" />
      ) : (
        <span className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-800 text-[10px] font-semibold text-white">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  )
}
