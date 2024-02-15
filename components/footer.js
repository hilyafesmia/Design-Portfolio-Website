import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <h4>Made with love 💖, blood 🩸, and tears 💦</h4>
      {/* <h4>© Hilya Auli Fesmia 2022</h4> */}
      <div className="footer-link">
        <Link
          href="/Resume-Hilya-Auli-Fesmia-2023.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume 2023
        </Link>
        <Link
          href="mailto:hilyafesmia@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          hilyafesmia@gmail.com
        </Link>
        <Link
          href="https://www.linkedin.com/in/hilyafesmia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/hilyafesmia
        </Link>
      </div>
    </div>
  );
}
