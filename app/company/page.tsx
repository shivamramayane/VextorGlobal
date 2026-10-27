import InteriorPage from "../../src/components/InteriorPage"
import { pageMetadata } from "../../src/metadata"
export const metadata = pageMetadata("Company", "Learn about VextorGlobal’s technology partnership, delivery principles, and industry experience.", "/company")
export default function Page() { return <InteriorPage type="company" /> }
