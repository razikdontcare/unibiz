import {
  getLoginToken,
  getUserProfile,
  refreshCreds,
  setUserClaims,
  updateUserProfile,
} from "@/app/actions";
import Navbar from "@/components/navbar";
import SettingContainer from "@/components/Settings/Container";
import Profile from "@/components/Settings/Profile";
import formatPhone from "@/utils/formatPhone";
import { redirect } from "next/navigation";

// interface UserRecord {
//   uid: string;
//   email?: string;
//   emailVerified: boolean;
//   displayName?: string;
//   photoURL?: string;
//   phoneNumber?: string;
//   disabled: boolean;
//   customClaims?: {
//     username?: string;
//     sex?: number;
//   };
// }

export default async function ProfilePage() {
  const token = await getLoginToken();

  if (!token) redirect("/login");

  const user = await getUserProfile(token.decodedToken.uid);

  const handleSave = async (
    name: string,
    phone: string,
    username: string | null,
    sex: number
  ) => {
    "use server";
    let userProfileUpdate;

    if (phone !== "-") {
      userProfileUpdate = {
        displayName: name,
        phoneNumber: "+" + formatPhone(phone),
      };
    } else {
      userProfileUpdate = {
        displayName: name,
      };
    }

    console.log("Updating user profile...:");
    console.log(userProfileUpdate);

    await updateUserProfile(token.decodedToken.uid, userProfileUpdate);

    let userClaimsUpdate;
    if (username) {
      userClaimsUpdate = {
        ...user?.customClaims,
        username: username,
        sex: sex,
      };
    } else {
      userClaimsUpdate = {
        ...user?.customClaims,
        sex: sex,
      };
    }

    console.log("Updating user claims...:");
    console.log(userClaimsUpdate);

    await setUserClaims(token.decodedToken.uid, userClaimsUpdate);

    await refreshCreds();
  };

  const serializedUser = {
    uid: user?.uid,
    email: user?.email,
    emailVerified: user?.emailVerified,
    displayName: user?.displayName,
    photoURL: user?.photoURL,
    phoneNumber: user?.phoneNumber,
    disabled: user?.disabled,
    customClaims: user?.customClaims,
  };

  return (
    <>
      <Navbar />
      <SettingContainer>
        <Profile user={serializedUser} save={handleSave} />
      </SettingContainer>
    </>
  );
}
