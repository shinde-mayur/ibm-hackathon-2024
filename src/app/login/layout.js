export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className="h-full bg-white">
        {children}
      </section>
    )
  }