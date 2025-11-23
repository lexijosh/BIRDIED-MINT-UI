import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.MainnetBeta) as WalletAdapterNetwork;

export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

// Fail loudly if CM ID is missing instead of falling back to demo
const cmIdStr = process.env.NEXT_PUBLIC_CANDY_MACHINE_ID;
if (!cmIdStr) {
  throw new Error("Missing NEXT_PUBLIC_CANDY_MACHINE_ID in .env.local");
}
export const candyMachineId = new PublicKey(cmIdStr);

export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default

// Not used for our setup; keep empty to avoid confusion
export const whitelistedWallets: string[] = [];
