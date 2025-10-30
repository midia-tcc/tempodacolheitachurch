export function Card({ children, className = '', onClick }) {
  return <div className={className} onClick={onClick}>{children}</div>
}
export function CardHeader({ children, className = '' }) { return <div className={className}>{children}</div> }
export function CardContent({ children, className = '' }) { return <div className={className}>{children}</div> }
export function CardTitle({ children, className = '' }) { return <h4 className={className}>{children}</h4> }
export function CardDescription({ children, className = '' }) { return <p className={className}>{children}</p> }
