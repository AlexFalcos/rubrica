export async function generateStaticParams() {
    const res = await fetch('https://www.jsonkeeper.com/b/DSB8');
    const persone = await res.json();

    return (persone);
}

export default function RubricaIdLayout({ children }) {
    return (
        <section>{children}</section>
    )
}