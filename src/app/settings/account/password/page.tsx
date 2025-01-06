import Navbar from "@/components/navbar";
import SettingContainer from "@/components/Settings/Container";
import Password from "@/components/Settings/Password";

export default async function PasswordPage() {
  return (
    <>
      <Navbar />
      <SettingContainer>
        <Password />
      </SettingContainer>
    </>
  );
}
