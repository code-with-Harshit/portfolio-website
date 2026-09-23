function MinecraftCard({ title, children, className = '' }) {
  const classes = ['mc-card', className].filter(Boolean).join(' ')

  return (
    <article className={classes}>
      {title ? <h3 className="mc-card__title">{title}</h3> : null}
      {children}
    </article>
  )
}

export default MinecraftCard
