import './card.css'

export const Card = ({children, className, onClick}) => {
    return (
    <article className={`card ${className}`} onClick={onClick}>
        {children}
    </article>
  )
}
