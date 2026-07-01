type SectionHeaderProps = {
  id?: string
  title: string
  description?: string
}

export function SectionHeader({ id, title, description }: SectionHeaderProps) {
  return (
    <div>
      <h2 id={id} className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      ) : null}
    </div>
  )
}
