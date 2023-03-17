import { createTRPCProxyClient } from "@trpc/client";
import { httpLink } from "@trpc/client/links/httpLink";
import { z } from "zod";

export const trpcClient = createTRPCProxyClient({
  links: [httpLink({ url: "/api/trpc" })],
  transformer: {
    async serialize(data) {
      return JSON.stringify(data);
    },
    async deserialize(data) {
      return JSON.parse(data);
    },
  },
});
