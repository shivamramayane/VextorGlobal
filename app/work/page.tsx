import InteriorPage from "../../src/components/InteriorPage"
import { pageMetadata } from "../../src/metadata"
export const metadata = pageMetadata("Work", "Explore clearly labeled fictional project concepts showing how digital products and software can address business challenges.", "/work")
export default function Page() { return <InteriorPage type="work" /> }
