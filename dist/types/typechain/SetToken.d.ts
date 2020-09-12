import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface SetTokenInterface extends Interface {
    functions: {
        addComponent: TypedFunctionDescription<{
            encode([_component]: [string]): string;
        }>;
        addExternalPositionModule: TypedFunctionDescription<{
            encode([_component, _positionModule]: [string, string]): string;
        }>;
        addModule: TypedFunctionDescription<{
            encode([_module]: [string]): string;
        }>;
        allowance: TypedFunctionDescription<{
            encode([owner, spender]: [string, string]): string;
        }>;
        approve: TypedFunctionDescription<{
            encode([spender, amount]: [string, BigNumberish]): string;
        }>;
        balanceOf: TypedFunctionDescription<{
            encode([account]: [string]): string;
        }>;
        burn: TypedFunctionDescription<{
            encode([_account, _quantity]: [string, BigNumberish]): string;
        }>;
        components: TypedFunctionDescription<{
            encode([]: [BigNumberish]): string;
        }>;
        controller: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        decimals: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        decreaseAllowance: TypedFunctionDescription<{
            encode([spender, subtractedValue]: [string, BigNumberish]): string;
        }>;
        editDefaultPositionUnit: TypedFunctionDescription<{
            encode([_component, _realUnit]: [string, BigNumberish]): string;
        }>;
        editExternalPositionData: TypedFunctionDescription<{
            encode([_component, _positionModule, _data]: [string, string, Arrayish]): string;
        }>;
        editExternalPositionUnit: TypedFunctionDescription<{
            encode([_component, _positionModule, _realUnit]: [string, string, BigNumberish]): string;
        }>;
        editPositionMultiplier: TypedFunctionDescription<{
            encode([_newMultiplier]: [BigNumberish]): string;
        }>;
        getComponents: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        getDefaultPositionRealUnit: TypedFunctionDescription<{
            encode([_component]: [string]): string;
        }>;
        getExternalPositionData: TypedFunctionDescription<{
            encode([_component, _positionModule]: [string, string]): string;
        }>;
        getExternalPositionModules: TypedFunctionDescription<{
            encode([_component]: [string]): string;
        }>;
        getExternalPositionRealUnit: TypedFunctionDescription<{
            encode([_component, _positionModule]: [string, string]): string;
        }>;
        getModules: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        getPositions: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        getTotalComponentRealUnits: TypedFunctionDescription<{
            encode([_component]: [string]): string;
        }>;
        increaseAllowance: TypedFunctionDescription<{
            encode([spender, addedValue]: [string, BigNumberish]): string;
        }>;
        initializeModule: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        invoke: TypedFunctionDescription<{
            encode([_target, _value, _data]: [string, BigNumberish, Arrayish]): string;
        }>;
        isComponent: TypedFunctionDescription<{
            encode([_component]: [string]): string;
        }>;
        isExternalPositionModule: TypedFunctionDescription<{
            encode([_component, _module]: [string, string]): string;
        }>;
        isInitializedModule: TypedFunctionDescription<{
            encode([_module]: [string]): string;
        }>;
        isLocked: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        isPendingModule: TypedFunctionDescription<{
            encode([_module]: [string]): string;
        }>;
        lock: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        locker: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        manager: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        mint: TypedFunctionDescription<{
            encode([_account, _quantity]: [string, BigNumberish]): string;
        }>;
        moduleStates: TypedFunctionDescription<{
            encode([]: [string]): string;
        }>;
        modules: TypedFunctionDescription<{
            encode([]: [BigNumberish]): string;
        }>;
        name: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        positionMultiplier: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        removeComponent: TypedFunctionDescription<{
            encode([_component]: [string]): string;
        }>;
        removeExternalPositionModule: TypedFunctionDescription<{
            encode([_component, _positionModule]: [string, string]): string;
        }>;
        removeModule: TypedFunctionDescription<{
            encode([_module]: [string]): string;
        }>;
        removePendingModule: TypedFunctionDescription<{
            encode([_module]: [string]): string;
        }>;
        setManager: TypedFunctionDescription<{
            encode([_manager]: [string]): string;
        }>;
        symbol: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        totalSupply: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        transfer: TypedFunctionDescription<{
            encode([recipient, amount]: [string, BigNumberish]): string;
        }>;
        transferFrom: TypedFunctionDescription<{
            encode([sender, recipient, amount]: [string, string, BigNumberish]): string;
        }>;
        unlock: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
    };
    events: {
        Approval: TypedEventDescription<{
            encodeTopics([owner, spender, value]: [string | null, string | null, null]): string[];
        }>;
        ComponentAdded: TypedEventDescription<{
            encodeTopics([_component]: [string | null]): string[];
        }>;
        ComponentRemoved: TypedEventDescription<{
            encodeTopics([_component]: [string | null]): string[];
        }>;
        DefaultPositionUnitEdited: TypedEventDescription<{
            encodeTopics([_component, _realUnit]: [string | null, null]): string[];
        }>;
        ExternalPositionDataEdited: TypedEventDescription<{
            encodeTopics([_component, _positionModule, _data]: [string | null, string | null, null]): string[];
        }>;
        ExternalPositionUnitEdited: TypedEventDescription<{
            encodeTopics([_component, _positionModule, _realUnit]: [string | null, string | null, null]): string[];
        }>;
        Invoked: TypedEventDescription<{
            encodeTopics([_target, _value, _data, _returnValue]: [string | null, BigNumberish | null, null, null]): string[];
        }>;
        ManagerEdited: TypedEventDescription<{
            encodeTopics([_newManager, _oldManager]: [null, null]): string[];
        }>;
        ModuleAdded: TypedEventDescription<{
            encodeTopics([_module]: [string | null]): string[];
        }>;
        ModuleInitialized: TypedEventDescription<{
            encodeTopics([_module]: [string | null]): string[];
        }>;
        ModuleRemoved: TypedEventDescription<{
            encodeTopics([_module]: [string | null]): string[];
        }>;
        PendingModuleRemoved: TypedEventDescription<{
            encodeTopics([_module]: [string | null]): string[];
        }>;
        PositionModuleAdded: TypedEventDescription<{
            encodeTopics([_component, _positionModule]: [string | null, string | null]): string[];
        }>;
        PositionModuleRemoved: TypedEventDescription<{
            encodeTopics([_component, _positionModule]: [string | null, string | null]): string[];
        }>;
        PositionMultiplierEdited: TypedEventDescription<{
            encodeTopics([_newMultiplier]: [null]): string[];
        }>;
        Transfer: TypedEventDescription<{
            encodeTopics([from, to, value]: [string | null, string | null, null]): string[];
        }>;
    };
}
export declare class SetToken extends Contract {
    connect(signerOrProvider: Signer | Provider | string): SetToken;
    attach(addressOrName: string): SetToken;
    deployed(): Promise<SetToken>;
    on(event: EventFilter | string, listener: Listener): SetToken;
    once(event: EventFilter | string, listener: Listener): SetToken;
    addListener(eventName: EventFilter | string, listener: Listener): SetToken;
    removeAllListeners(eventName: EventFilter | string): SetToken;
    removeListener(eventName: any, listener: Listener): SetToken;
    interface: SetTokenInterface;
    functions: {
        addComponent(_component: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        addExternalPositionModule(_component: string, _positionModule: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        addModule(_module: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        allowance(owner: string, spender: string): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        balanceOf(account: string): Promise<BigNumber>;
        burn(_account: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        components(arg0: BigNumberish): Promise<string>;
        controller(): Promise<string>;
        decimals(): Promise<number>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        editDefaultPositionUnit(_component: string, _realUnit: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        editExternalPositionData(_component: string, _positionModule: string, _data: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        editExternalPositionUnit(_component: string, _positionModule: string, _realUnit: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        editPositionMultiplier(_newMultiplier: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        getComponents(): Promise<string[]>;
        getDefaultPositionRealUnit(_component: string): Promise<BigNumber>;
        getExternalPositionData(_component: string, _positionModule: string): Promise<string>;
        getExternalPositionModules(_component: string): Promise<string[]>;
        getExternalPositionRealUnit(_component: string, _positionModule: string): Promise<BigNumber>;
        getModules(): Promise<string[]>;
        getPositions(): Promise<{
            component: string;
            module: string;
            unit: BigNumber;
            positionState: number;
            data: string;
            0: string;
            1: string;
            2: BigNumber;
            3: number;
            4: string;
        }[]>;
        getTotalComponentRealUnits(_component: string): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        initializeModule(overrides?: TransactionOverrides): Promise<ContractTransaction>;
        invoke(_target: string, _value: BigNumberish, _data: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        isComponent(_component: string): Promise<boolean>;
        isExternalPositionModule(_component: string, _module: string): Promise<boolean>;
        isInitializedModule(_module: string): Promise<boolean>;
        isLocked(): Promise<boolean>;
        isPendingModule(_module: string): Promise<boolean>;
        lock(overrides?: TransactionOverrides): Promise<ContractTransaction>;
        locker(): Promise<string>;
        manager(): Promise<string>;
        mint(_account: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        moduleStates(arg0: string): Promise<number>;
        modules(arg0: BigNumberish): Promise<string>;
        name(): Promise<string>;
        positionMultiplier(): Promise<BigNumber>;
        removeComponent(_component: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removeExternalPositionModule(_component: string, _positionModule: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removeModule(_module: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removePendingModule(_module: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        setManager(_manager: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        symbol(): Promise<string>;
        totalSupply(): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        unlock(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    addComponent(_component: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    addExternalPositionModule(_component: string, _positionModule: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    addModule(_module: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    allowance(owner: string, spender: string): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    balanceOf(account: string): Promise<BigNumber>;
    burn(_account: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    components(arg0: BigNumberish): Promise<string>;
    controller(): Promise<string>;
    decimals(): Promise<number>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    editDefaultPositionUnit(_component: string, _realUnit: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    editExternalPositionData(_component: string, _positionModule: string, _data: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    editExternalPositionUnit(_component: string, _positionModule: string, _realUnit: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    editPositionMultiplier(_newMultiplier: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    getComponents(): Promise<string[]>;
    getDefaultPositionRealUnit(_component: string): Promise<BigNumber>;
    getExternalPositionData(_component: string, _positionModule: string): Promise<string>;
    getExternalPositionModules(_component: string): Promise<string[]>;
    getExternalPositionRealUnit(_component: string, _positionModule: string): Promise<BigNumber>;
    getModules(): Promise<string[]>;
    getPositions(): Promise<{
        component: string;
        module: string;
        unit: BigNumber;
        positionState: number;
        data: string;
        0: string;
        1: string;
        2: BigNumber;
        3: number;
        4: string;
    }[]>;
    getTotalComponentRealUnits(_component: string): Promise<BigNumber>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    initializeModule(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    invoke(_target: string, _value: BigNumberish, _data: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    isComponent(_component: string): Promise<boolean>;
    isExternalPositionModule(_component: string, _module: string): Promise<boolean>;
    isInitializedModule(_module: string): Promise<boolean>;
    isLocked(): Promise<boolean>;
    isPendingModule(_module: string): Promise<boolean>;
    lock(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    locker(): Promise<string>;
    manager(): Promise<string>;
    mint(_account: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    moduleStates(arg0: string): Promise<number>;
    modules(arg0: BigNumberish): Promise<string>;
    name(): Promise<string>;
    positionMultiplier(): Promise<BigNumber>;
    removeComponent(_component: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removeExternalPositionModule(_component: string, _positionModule: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removeModule(_module: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removePendingModule(_module: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    setManager(_manager: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    symbol(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transfer(recipient: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    unlock(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        Approval(owner: string | null, spender: string | null, value: null): EventFilter;
        ComponentAdded(_component: string | null): EventFilter;
        ComponentRemoved(_component: string | null): EventFilter;
        DefaultPositionUnitEdited(_component: string | null, _realUnit: null): EventFilter;
        ExternalPositionDataEdited(_component: string | null, _positionModule: string | null, _data: null): EventFilter;
        ExternalPositionUnitEdited(_component: string | null, _positionModule: string | null, _realUnit: null): EventFilter;
        Invoked(_target: string | null, _value: BigNumberish | null, _data: null, _returnValue: null): EventFilter;
        ManagerEdited(_newManager: null, _oldManager: null): EventFilter;
        ModuleAdded(_module: string | null): EventFilter;
        ModuleInitialized(_module: string | null): EventFilter;
        ModuleRemoved(_module: string | null): EventFilter;
        PendingModuleRemoved(_module: string | null): EventFilter;
        PositionModuleAdded(_component: string | null, _positionModule: string | null): EventFilter;
        PositionModuleRemoved(_component: string | null, _positionModule: string | null): EventFilter;
        PositionMultiplierEdited(_newMultiplier: null): EventFilter;
        Transfer(from: string | null, to: string | null, value: null): EventFilter;
    };
    estimate: {
        addComponent(_component: string): Promise<BigNumber>;
        addExternalPositionModule(_component: string, _positionModule: string): Promise<BigNumber>;
        addModule(_module: string): Promise<BigNumber>;
        allowance(owner: string, spender: string): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish): Promise<BigNumber>;
        balanceOf(account: string): Promise<BigNumber>;
        burn(_account: string, _quantity: BigNumberish): Promise<BigNumber>;
        components(arg0: BigNumberish): Promise<BigNumber>;
        controller(): Promise<BigNumber>;
        decimals(): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish): Promise<BigNumber>;
        editDefaultPositionUnit(_component: string, _realUnit: BigNumberish): Promise<BigNumber>;
        editExternalPositionData(_component: string, _positionModule: string, _data: Arrayish): Promise<BigNumber>;
        editExternalPositionUnit(_component: string, _positionModule: string, _realUnit: BigNumberish): Promise<BigNumber>;
        editPositionMultiplier(_newMultiplier: BigNumberish): Promise<BigNumber>;
        getComponents(): Promise<BigNumber>;
        getDefaultPositionRealUnit(_component: string): Promise<BigNumber>;
        getExternalPositionData(_component: string, _positionModule: string): Promise<BigNumber>;
        getExternalPositionModules(_component: string): Promise<BigNumber>;
        getExternalPositionRealUnit(_component: string, _positionModule: string): Promise<BigNumber>;
        getModules(): Promise<BigNumber>;
        getPositions(): Promise<BigNumber>;
        getTotalComponentRealUnits(_component: string): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish): Promise<BigNumber>;
        initializeModule(): Promise<BigNumber>;
        invoke(_target: string, _value: BigNumberish, _data: Arrayish): Promise<BigNumber>;
        isComponent(_component: string): Promise<BigNumber>;
        isExternalPositionModule(_component: string, _module: string): Promise<BigNumber>;
        isInitializedModule(_module: string): Promise<BigNumber>;
        isLocked(): Promise<BigNumber>;
        isPendingModule(_module: string): Promise<BigNumber>;
        lock(): Promise<BigNumber>;
        locker(): Promise<BigNumber>;
        manager(): Promise<BigNumber>;
        mint(_account: string, _quantity: BigNumberish): Promise<BigNumber>;
        moduleStates(arg0: string): Promise<BigNumber>;
        modules(arg0: BigNumberish): Promise<BigNumber>;
        name(): Promise<BigNumber>;
        positionMultiplier(): Promise<BigNumber>;
        removeComponent(_component: string): Promise<BigNumber>;
        removeExternalPositionModule(_component: string, _positionModule: string): Promise<BigNumber>;
        removeModule(_module: string): Promise<BigNumber>;
        removePendingModule(_module: string): Promise<BigNumber>;
        setManager(_manager: string): Promise<BigNumber>;
        symbol(): Promise<BigNumber>;
        totalSupply(): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish): Promise<BigNumber>;
        unlock(): Promise<BigNumber>;
    };
}
export {};
