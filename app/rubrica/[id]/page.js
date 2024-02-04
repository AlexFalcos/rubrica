import Link from "next/link";
import styles from "../../page.module.css";

export async function getPersona(id) {
    const res = await fetch('https://www.jsonkeeper.com/b/DSB8');
    const persone = await res.json();
    const persona = persone.filter(p => p.id == id)

    return (persona);
}

export default async function Persona({ params: { id } }) {
    const persona = await getPersona(id);

    return (
        <main className={styles.main}>
            <h1>Dati della {id}° persona</h1>
            <div className={styles.card} style={{ marginTop: "50px" }}>
                <h2>Nome: {`${persona[0].name}`}</h2>
            </div>
            <Link href={`/rubrica`} style={{ marginTop: "30px", color: "blue" }}>Back to Rubrica</Link>
        </main >
    );
}