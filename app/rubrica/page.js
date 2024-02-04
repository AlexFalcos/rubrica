import Link from "next/link";
import styles from "../page.module.css";

export async function getPersone() {
    const res = await fetch('https://www.jsonkeeper.com/b/DSB8');
    const persone = await res.json();

    return (persone);
}

export default async function Rubrica() {
    const persone = await getPersone();

    return (
        <main className={styles.main}>
            <h1>Lista della Rubrica</h1>
            <ul style={{ marginTop: "30px", color: "aqua" }}>
                {persone.map((persona) => (
                    <li key={persona.id} style={{ margin: "10px" }}>
                        <Link href={`/rubrica/${persona.id}`}>{persona.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}