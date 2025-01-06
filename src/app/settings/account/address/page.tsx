import Navbar from "@/components/navbar";
import Address from "@/components/Settings/Address";
import SettingContainer from "@/components/Settings/Container";

export default async function AddressPage() {
  return (
    <>
      <Navbar />
      <SettingContainer>
        <Address />
      </SettingContainer>
    </>
  );
}
