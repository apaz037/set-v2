import { BigNumber } from "ethers/utils";
import { Address } from "../types";
import { StreamingFeeModule } from "../contracts";
export declare const getStreamingFee: (feeModule: StreamingFeeModule, setToken: Address, previousAccrueTimestamp: BigNumber, recentAccrueTimestamp: BigNumber, streamingFee?: BigNumber | undefined) => Promise<BigNumber>;
export declare const getStreamingFeeInflationAmount: (inflationPercent: BigNumber, totalSupply: BigNumber) => BigNumber;
export declare const getPostFeePositionUnits: (preFeeUnits: BigNumber[], inflationPercent: BigNumber) => BigNumber[];
