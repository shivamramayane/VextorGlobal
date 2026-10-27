import { CustomersPage } from "../../src/components/AdditionalPages"
import { pageMetadata } from "../../src/metadata"

export const metadata = pageMetadata("Customers", "Client stories, references, and perspectives from VextorGlobal engagements. Client details are marked TODO until approved.", "/customers")

export default function Page() { return <CustomersPage /> }
