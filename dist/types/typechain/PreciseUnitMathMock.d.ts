import { Contract, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TypedFunctionDescription } from ".";
interface PreciseUnitMathMockInterface extends Interface {
    functions: {
        conservativePreciseDiv: TypedFunctionDescription<{
            encode([a, b]: [BigNumberish, BigNumberish]): string;
        }>;
        conservativePreciseMul: TypedFunctionDescription<{
            encode([a, b]: [BigNumberish, BigNumberish]): string;
        }>;
        divDown: TypedFunctionDescription<{
            encode([a, b]: [BigNumberish, BigNumberish]): string;
        }>;
        maxInt256: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        minInt256: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        preciseDiv: TypedFunctionDescription<{
            encode([a, b]: [BigNumberish, BigNumberish]): string;
        }>;
        preciseDivCeil: TypedFunctionDescription<{
            encode([a, b]: [BigNumberish, BigNumberish]): string;
        }>;
        preciseMul: TypedFunctionDescription<{
            encode([a, b]: [BigNumberish, BigNumberish]): string;
        }>;
        preciseMulCeil: TypedFunctionDescription<{
            encode([a, b]: [BigNumberish, BigNumberish]): string;
        }>;
        preciseMulInt: TypedFunctionDescription<{
            encode([a, b]: [BigNumberish, BigNumberish]): string;
        }>;
        preciseUnit: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        preciseUnitInt: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
    };
    events: {};
}
export declare class PreciseUnitMathMock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): PreciseUnitMathMock;
    attach(addressOrName: string): PreciseUnitMathMock;
    deployed(): Promise<PreciseUnitMathMock>;
    on(event: EventFilter | string, listener: Listener): PreciseUnitMathMock;
    once(event: EventFilter | string, listener: Listener): PreciseUnitMathMock;
    addListener(eventName: EventFilter | string, listener: Listener): PreciseUnitMathMock;
    removeAllListeners(eventName: EventFilter | string): PreciseUnitMathMock;
    removeListener(eventName: any, listener: Listener): PreciseUnitMathMock;
    interface: PreciseUnitMathMockInterface;
    functions: {
        conservativePreciseDiv(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        conservativePreciseMul(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        divDown(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        maxInt256(): Promise<BigNumber>;
        minInt256(): Promise<BigNumber>;
        "preciseDiv(int256,int256)"(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        "preciseDiv(uint256,uint256)"(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        preciseDivCeil(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        preciseMul(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        preciseMulCeil(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        preciseMulInt(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        preciseUnit(): Promise<BigNumber>;
        preciseUnitInt(): Promise<BigNumber>;
    };
    conservativePreciseDiv(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    conservativePreciseMul(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    divDown(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    maxInt256(): Promise<BigNumber>;
    minInt256(): Promise<BigNumber>;
    "preciseDiv(int256,int256)"(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    "preciseDiv(uint256,uint256)"(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    preciseDivCeil(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    preciseMul(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    preciseMulCeil(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    preciseMulInt(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    preciseUnit(): Promise<BigNumber>;
    preciseUnitInt(): Promise<BigNumber>;
    filters: {};
    estimate: {
        conservativePreciseDiv(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        conservativePreciseMul(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        divDown(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        maxInt256(): Promise<BigNumber>;
        minInt256(): Promise<BigNumber>;
        preciseDiv(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        preciseDivCeil(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        preciseMul(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        preciseMulCeil(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        preciseMulInt(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
        preciseUnit(): Promise<BigNumber>;
        preciseUnitInt(): Promise<BigNumber>;
    };
}
export {};
