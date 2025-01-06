import Navbar from "@/components/navbar";
import SettingContainer from "@/components/Settings/Container";
import Privacy from "@/components/Settings/Privacy";

export default async function PrivacyPage() {
  return (
    <>
      <Navbar />
      <SettingContainer>
        <Privacy />
      </SettingContainer>
    </>
  );
}
