import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul style={{ padding: "40px", marginLeft: "100px", color: "blue" }}>
                <li style={{ display: "inline", marginLeft: "100px", margin: "10px" }}>
                    <Link href="/">Home</Link>
                </li>
                <li style={{ display: "inline", margin: "10px" }}>
                    <Link href="/rubrica">Rubrica</Link>
                </li>
                <li style={{ display: "inline", margin: "10px" }}>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}