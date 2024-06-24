
import { signOut } from "next-auth/react";

export default function useLogout() {
  const handleLogout = async function () {
    const logoutCognitoUrl = `${process.env.NEXT_PUBLIC_AWS_COGNITO_DOMAIN}/logout?client_id=${process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID}&logout_uri=${process.env.NEXT_PUBLIC_APP_URL}/login&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/login&response_type=code`;
    return signOut({
      callbackUrl: logoutCognitoUrl,
    });
  };

  return {
    handleLogout,
  };
}