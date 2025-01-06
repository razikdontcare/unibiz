import Navbar from "@/components/navbar";
import Billing from "@/components/Settings/Billing";
import SettingContainer from "@/components/Settings/Container";

export default async function BillingPage() {
  return (
    <>
      <Navbar />
      <SettingContainer>
        <Billing />
      </SettingContainer>
    </>
  );
}
