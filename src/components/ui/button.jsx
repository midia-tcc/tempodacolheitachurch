export function Button({ children, size, variant, className = '', onClick }) {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded ${className}`}>
      {children}
    </button>
  )
}
export default Button
