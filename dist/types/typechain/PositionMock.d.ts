import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedFunctionDescription } from ".";
interface PositionMockInterface extends Interface {
    functions: {
        initialize: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        testAddExternalPosition: TypedFunctionDescription<{
            encode([_setToken, _component, _module, _newUnit, _data]: [string, string, string, BigNumberish, Arrayish]): string;
        }>;
        testCalculateAndEditDefaultPosition: TypedFunctionDescription<{
            encode([_setToken, _component, _setTotalSupply, _componentPreviousBalance]: [string, string, BigNumberish, BigNumberish]): string;
        }>;
        testCalculateDefaultEditPositionUnit: TypedFunctionDescription<{
            encode([_setTokenSupply, _preTotalNotional, _postTotalNotional, _prePositionUnit]: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
        }>;
        testEditDefaultPosition: TypedFunctionDescription<{
            encode([_setToken, _component, _newUnit]: [string, string, BigNumberish]): string;
        }>;
        testEditExternalPosition: TypedFunctionDescription<{
            encode([_setToken, _component, _module, _newUnit, _data]: [string, string, string, BigNumberish, Arrayish]): string;
        }>;
        testGetDefaultPositionUnit: TypedFunctionDescription<{
            encode([_setTokenSupply, _totalNotional]: [BigNumberish, BigNumberish]): string;
        }>;
        testGetDefaultTotalNotional: TypedFunctionDescription<{
            encode([_setTokenSupply, _positionUnit]: [BigNumberish, BigNumberish]): string;
        }>;
        testGetDefaultTrackedBalance: TypedFunctionDescription<{
            encode([_setToken, _component]: [string, string]): string;
        }>;
        testHasDefaultPosition: TypedFunctionDescription<{
            encode([_setToken, _component]: [string, string]): string;
        }>;
        testHasExternalPosition: TypedFunctionDescription<{
            encode([_setToken, _component]: [string, string]): string;
        }>;
        testHasSufficientDefaultUnits: TypedFunctionDescription<{
            encode([_setToken, _component, _unit]: [string, string, BigNumberish]): string;
        }>;
        testHasSufficientExternalUnits: TypedFunctionDescription<{
            encode([_setToken, _component, _module, _unit]: [string, string, string, BigNumberish]): string;
        }>;
    };
    events: {};
}
export declare class PositionMock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): PositionMock;
    attach(addressOrName: string): PositionMock;
    deployed(): Promise<PositionMock>;
    on(event: EventFilter | string, listener: Listener): PositionMock;
    once(event: EventFilter | string, listener: Listener): PositionMock;
    addListener(eventName: EventFilter | string, listener: Listener): PositionMock;
    removeAllListeners(eventName: EventFilter | string): PositionMock;
    removeListener(eventName: any, listener: Listener): PositionMock;
    interface: PositionMockInterface;
    functions: {
        initialize(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testAddExternalPosition(_setToken: string, _component: string, _module: string, _newUnit: BigNumberish, _data: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testCalculateAndEditDefaultPosition(_setToken: string, _component: string, _setTotalSupply: BigNumberish, _componentPreviousBalance: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testCalculateDefaultEditPositionUnit(_setTokenSupply: BigNumberish, _preTotalNotional: BigNumberish, _postTotalNotional: BigNumberish, _prePositionUnit: BigNumberish): Promise<BigNumber>;
        testEditDefaultPosition(_setToken: string, _component: string, _newUnit: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testEditExternalPosition(_setToken: string, _component: string, _module: string, _newUnit: BigNumberish, _data: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testGetDefaultPositionUnit(_setTokenSupply: BigNumberish, _totalNotional: BigNumberish): Promise<BigNumber>;
        testGetDefaultTotalNotional(_setTokenSupply: BigNumberish, _positionUnit: BigNumberish): Promise<BigNumber>;
        testGetDefaultTrackedBalance(_setToken: string, _component: string): Promise<BigNumber>;
        testHasDefaultPosition(_setToken: string, _component: string): Promise<boolean>;
        testHasExternalPosition(_setToken: string, _component: string): Promise<boolean>;
        testHasSufficientDefaultUnits(_setToken: string, _component: string, _unit: BigNumberish): Promise<boolean>;
        testHasSufficientExternalUnits(_setToken: string, _component: string, _module: string, _unit: BigNumberish): Promise<boolean>;
    };
    initialize(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testAddExternalPosition(_setToken: string, _component: string, _module: string, _newUnit: BigNumberish, _data: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testCalculateAndEditDefaultPosition(_setToken: string, _component: string, _setTotalSupply: BigNumberish, _componentPreviousBalance: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testCalculateDefaultEditPositionUnit(_setTokenSupply: BigNumberish, _preTotalNotional: BigNumberish, _postTotalNotional: BigNumberish, _prePositionUnit: BigNumberish): Promise<BigNumber>;
    testEditDefaultPosition(_setToken: string, _component: string, _newUnit: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testEditExternalPosition(_setToken: string, _component: string, _module: string, _newUnit: BigNumberish, _data: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testGetDefaultPositionUnit(_setTokenSupply: BigNumberish, _totalNotional: BigNumberish): Promise<BigNumber>;
    testGetDefaultTotalNotional(_setTokenSupply: BigNumberish, _positionUnit: BigNumberish): Promise<BigNumber>;
    testGetDefaultTrackedBalance(_setToken: string, _component: string): Promise<BigNumber>;
    testHasDefaultPosition(_setToken: string, _component: string): Promise<boolean>;
    testHasExternalPosition(_setToken: string, _component: string): Promise<boolean>;
    testHasSufficientDefaultUnits(_setToken: string, _component: string, _unit: BigNumberish): Promise<boolean>;
    testHasSufficientExternalUnits(_setToken: string, _component: string, _module: string, _unit: BigNumberish): Promise<boolean>;
    filters: {};
    estimate: {
        initialize(_setToken: string): Promise<BigNumber>;
        testAddExternalPosition(_setToken: string, _component: string, _module: string, _newUnit: BigNumberish, _data: Arrayish): Promise<BigNumber>;
        testCalculateAndEditDefaultPosition(_setToken: string, _component: string, _setTotalSupply: BigNumberish, _componentPreviousBalance: BigNumberish): Promise<BigNumber>;
        testCalculateDefaultEditPositionUnit(_setTokenSupply: BigNumberish, _preTotalNotional: BigNumberish, _postTotalNotional: BigNumberish, _prePositionUnit: BigNumberish): Promise<BigNumber>;
        testEditDefaultPosition(_setToken: string, _component: string, _newUnit: BigNumberish): Promise<BigNumber>;
        testEditExternalPosition(_setToken: string, _component: string, _module: string, _newUnit: BigNumberish, _data: Arrayish): Promise<BigNumber>;
        testGetDefaultPositionUnit(_setTokenSupply: BigNumberish, _totalNotional: BigNumberish): Promise<BigNumber>;
        testGetDefaultTotalNotional(_setTokenSupply: BigNumberish, _positionUnit: BigNumberish): Promise<BigNumber>;
        testGetDefaultTrackedBalance(_setToken: string, _component: string): Promise<BigNumber>;
        testHasDefaultPosition(_setToken: string, _component: string): Promise<BigNumber>;
        testHasExternalPosition(_setToken: string, _component: string): Promise<BigNumber>;
        testHasSufficientDefaultUnits(_setToken: string, _component: string, _unit: BigNumberish): Promise<BigNumber>;
        testHasSufficientExternalUnits(_setToken: string, _component: string, _module: string, _unit: BigNumberish): Promise<BigNumber>;
    };
}
export {};