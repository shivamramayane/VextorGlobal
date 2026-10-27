import { InsightsPage } from "../../src/components/AdditionalPages"
import { pageMetadata } from "../../src/metadata"

export const metadata = pageMetadata("Insights", "Field notes and practical thinking on product, software engineering, cloud, and technology decisions.", "/insights")

export default function Page() { return <InsightsPage /> }
