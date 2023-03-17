import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import { MainLayout } from "../libs/layout/main";
import { trpc } from '../libs/util/trpc';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="h-screen overflow-auto bg-slate-50" data-theme="cupcake">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
