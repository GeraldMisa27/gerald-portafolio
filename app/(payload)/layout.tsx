import React from "react";
import configPromise from "@payload-config";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import type { ServerFunctionArgs } from "payload";
import "@payloadcms/next/css";
import { importMap } from "./importMap";

type Args = {
  children: React.ReactNode;
};

const serverFunction = async (args: ServerFunctionArgs) => {
  "use server";
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  });
};

export default async function Layout({ children }: Args) {
  return (
    <RootLayout
      config={configPromise}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}