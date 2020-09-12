import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface StreamingFeeModuleInterface extends Interface {
    functions: {
        accrueFee: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        controller: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        feeStates: TypedFunctionDescription<{
            encode([]: [string]): string;
        }>;
        getFee: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        initialize: TypedFunctionDescription<{
            encode([_setToken, _settings]: [string, {
                feeRecipient: string;
                maxStreamingFeePercentage: BigNumberish;
                streamingFeePercentage: BigNumberish;
                lastStreamingFeeTimestamp: BigNumberish;
            }]): string;
        }>;
        removeModule: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        updateFeeRecipient: TypedFunctionDescription<{
            encode([_setToken, _newFeeRecipient]: [string, string]): string;
        }>;
        updateStreamingFee: TypedFunctionDescription<{
            encode([_setToken, _newFee]: [string, BigNumberish]): string;
        }>;
    };
    events: {
        FeeActualized: TypedEventDescription<{
            encodeTopics([_setToken, _managerFee, _protocolFee]: [string | null, null, null]): string[];
        }>;
        FeeRecipientUpdated: TypedEventDescription<{
            encodeTopics([_setToken, _newFeeRecipient]: [string | null, null]): string[];
        }>;
        StreamingFeeUpdated: TypedEventDescription<{
            encodeTopics([_setToken, _newStreamingFee]: [string | null, null]): string[];
        }>;
    };
}
export declare class StreamingFeeModule extends Contract {
    connect(signerOrProvider: Signer | Provider | string): StreamingFeeModule;
    attach(addressOrName: string): StreamingFeeModule;
    deployed(): Promise<StreamingFeeModule>;
    on(event: EventFilter | string, listener: Listener): StreamingFeeModule;
    once(event: EventFilter | string, listener: Listener): StreamingFeeModule;
    addListener(eventName: EventFilter | string, listener: Listener): StreamingFeeModule;
    removeAllListeners(eventName: EventFilter | string): StreamingFeeModule;
    removeListener(eventName: any, listener: Listener): StreamingFeeModule;
    interface: StreamingFeeModuleInterface;
    functions: {
        accrueFee(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        controller(): Promise<string>;
        feeStates(arg0: string): Promise<{
            feeRecipient: string;
            maxStreamingFeePercentage: BigNumber;
            streamingFeePercentage: BigNumber;
            lastStreamingFeeTimestamp: BigNumber;
            0: string;
            1: BigNumber;
            2: BigNumber;
            3: BigNumber;
        }>;
        getFee(_setToken: string): Promise<BigNumber>;
        initialize(_setToken: string, _settings: {
            feeRecipient: string;
            maxStreamingFeePercentage: BigNumberish;
            streamingFeePercentage: BigNumberish;
            lastStreamingFeeTimestamp: BigNumberish;
        }, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removeModule(overrides?: TransactionOverrides): Promise<ContractTransaction>;
        updateFeeRecipient(_setToken: string, _newFeeRecipient: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        updateStreamingFee(_setToken: string, _newFee: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    accrueFee(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    controller(): Promise<string>;
    feeStates(arg0: string): Promise<{
        feeRecipient: string;
        maxStreamingFeePercentage: BigNumber;
        streamingFeePercentage: BigNumber;
        lastStreamingFeeTimestamp: BigNumber;
        0: string;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
    }>;
    getFee(_setToken: string): Promise<BigNumber>;
    initialize(_setToken: string, _settings: {
        feeRecipient: string;
        maxStreamingFeePercentage: BigNumberish;
        streamingFeePercentage: BigNumberish;
        lastStreamingFeeTimestamp: BigNumberish;
    }, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removeModule(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    updateFeeRecipient(_setToken: string, _newFeeRecipient: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    updateStreamingFee(_setToken: string, _newFee: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        FeeActualized(_setToken: string | null, _managerFee: null, _protocolFee: null): EventFilter;
        FeeRecipientUpdated(_setToken: string | null, _newFeeRecipient: null): EventFilter;
        StreamingFeeUpdated(_setToken: string | null, _newStreamingFee: null): EventFilter;
    };
    estimate: {
        accrueFee(_setToken: string): Promise<BigNumber>;
        controller(): Promise<BigNumber>;
        feeStates(arg0: string): Promise<BigNumber>;
        getFee(_setToken: string): Promise<BigNumber>;
        initialize(_setToken: string, _settings: {
            feeRecipient: string;
            maxStreamingFeePercentage: BigNumberish;
            streamingFeePercentage: BigNumberish;
            lastStreamingFeeTimestamp: BigNumberish;
        }): Promise<BigNumber>;
        removeModule(): Promise<BigNumber>;
        updateFeeRecipient(_setToken: string, _newFeeRecipient: string): Promise<BigNumber>;
        updateStreamingFee(_setToken: string, _newFee: BigNumberish): Promise<BigNumber>;
    };
}
export {};
