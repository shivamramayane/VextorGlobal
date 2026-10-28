import InteriorPage from "../../src/components/InteriorPage"
import { pageMetadata } from "../../src/metadata"
export const metadata = pageMetadata("Contact", "Book a free AI consultation with VextorGlobal to discuss AI agents, automation or a digital product.", "/contact")
export default function Page() { return <InteriorPage type="contact" /> }
