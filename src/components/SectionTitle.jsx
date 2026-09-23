function SectionTitle({ id, children, kicker }) {
  return (
    <header className="section-title">
      {kicker ? <p className="section-title__kicker">{kicker}</p> : null}
      <h2 id={id} className="section-title__heading">
        {children}
      </h2>
    </header>
  )
}

export default SectionTitle
