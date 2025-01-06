import Navbar from "@/components/navbar";
import SettingContainer from "@/components/Settings/Container";
import Orders from "@/components/Settings/Orders";

export default async function OrdersPage() {
  return (
    <>
      <Navbar />
      <SettingContainer className="flex flex-col w-full px-3">
        <Orders />
      </SettingContainer>
    </>
  );
}
