import Navbar from "@/components/navbar";
import SettingContainer from "@/components/Settings/Container";
import Notification from "@/components/Settings/Notification";

export default async function NotificationPage() {
  return (
    <>
      <Navbar />
      <SettingContainer>
        <Notification />
      </SettingContainer>
    </>
  );
}
