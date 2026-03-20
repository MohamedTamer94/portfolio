export default function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`relative pb-3 text-center text-black text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05]
        after:absolute after:bottom-0 after:h-1 after:w-16 after:left-1/2 after:-translate-x-1/2 after:bg-blue-600 after:content-['']
        ${className}`}
    >
      {children}
    </h2>
  );
}