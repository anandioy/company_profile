export default function dashboardLayout( { children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <h1>Hello</h1>
            {children}
        </div>
    )
}