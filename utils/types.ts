import { BigNumber } from "ethers/utils";
import {
  ContractTransaction as ContractTransactionType,
  Wallet as WalletType
} from "ethers";

export type Account = {
  address: Address;
  wallet: Wallet;
};

export type Address = string;
export type Bytes = string;

export type Position = {
  component: Address;
  module: Address;
  unit: BigNumber;
  positionState: number;
  data: string;
};

export type ContractTransaction = ContractTransactionType;
export type Wallet = WalletType;

export interface StreamingFeeState {
  feeRecipient: Address;
  streamingFeePercentage: BigNumber;
  maxStreamingFeePercentage: BigNumber;
  lastStreamingFeeTimestamp: BigNumber;
}
