"use server";

import { clientConfig, serverConfig } from "@/config";
import { UpdateRequest } from "firebase-admin/auth";
import { getFirebaseAuth, getTokens } from "next-firebase-auth-edge";
import { refreshServerCookies } from "next-firebase-auth-edge/next/cookies";
import { cookies, headers } from "next/headers";

export async function refreshCreds() {
  const token = await getTokens(await cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!token) throw new Error("Unauthorized");

  await refreshServerCookies(await cookies(), new Headers(await headers()), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    cookieSerializeOptions: serverConfig.cookieSerializeOptions,
    serviceAccount: serverConfig.serviceAccount,
  });
}

export async function getLoginToken() {
  const token = await getTokens(await cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!token) return null;

  return token;
}

export async function setUserClaims(uid: string, claims: object | null) {
  const { setCustomUserClaims } = getFirebaseAuth({
    apiKey: clientConfig.apiKey,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!uid) return false;

  await setCustomUserClaims(uid, claims);
  return true;
}

export async function updateUserProfile(uid: string, data: UpdateRequest) {
  const { updateUser } = getFirebaseAuth({
    apiKey: clientConfig.apiKey,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!uid) return null;

  const user = await updateUser(uid, data);
  return user;
}

export async function getUserProfile(uid: string) {
  const { getUser } = getFirebaseAuth({
    apiKey: clientConfig.apiKey,
    serviceAccount: serverConfig.serviceAccount,
  });

  const user = await getUser(uid);
  return user;
}
