/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TaskTreasuryFantomInterface extends ethers.utils.Interface {
  functions: {
    "addWhitelistedService(address)": FunctionFragment;
    "depositFunds(address,address,uint256)": FunctionFragment;
    "gelato()": FunctionFragment;
    "getCreditTokensByUser(address)": FunctionFragment;
    "getWhitelistedServices()": FunctionFragment;
    "maxFee()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeWhitelistedService(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setMaxFee(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "useFunds(address,uint256,address)": FunctionFragment;
    "userTokenBalance(address,address)": FunctionFragment;
    "withdrawFunds(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addWhitelistedService",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFunds",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "gelato", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCreditTokensByUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistedServices",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "maxFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeWhitelistedService",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "useFunds",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "userTokenBalance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addWhitelistedService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gelato", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCreditTokensByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistedServices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeWhitelistedService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMaxFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "useFunds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;

  events: {
    "FundsDeposited(address,address,uint256)": EventFragment;
    "FundsWithdrawn(address,address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FundsDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundsWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class TaskTreasuryFantom extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TaskTreasuryFantomInterface;

  functions: {
    addWhitelistedService(
      _service: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositFunds(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gelato(overrides?: CallOverrides): Promise<[string]>;

    getCreditTokensByUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getWhitelistedServices(overrides?: CallOverrides): Promise<[string[]]>;

    maxFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeWhitelistedService(
      _service: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxFee(
      _newMaxFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    useFunds(
      _token: string,
      _amount: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userTokenBalance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdrawFunds(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addWhitelistedService(
    _service: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositFunds(
    _receiver: string,
    _token: string,
    _amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gelato(overrides?: CallOverrides): Promise<string>;

  getCreditTokensByUser(
    _user: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getWhitelistedServices(overrides?: CallOverrides): Promise<string[]>;

  maxFee(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeWhitelistedService(
    _service: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxFee(
    _newMaxFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  useFunds(
    _token: string,
    _amount: BigNumberish,
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userTokenBalance(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdrawFunds(
    _receiver: string,
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addWhitelistedService(
      _service: string,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFunds(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    gelato(overrides?: CallOverrides): Promise<string>;

    getCreditTokensByUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getWhitelistedServices(overrides?: CallOverrides): Promise<string[]>;

    maxFee(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeWhitelistedService(
      _service: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setMaxFee(
      _newMaxFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    useFunds(
      _token: string,
      _amount: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userTokenBalance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawFunds(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    FundsDeposited(
      sender?: string | null,
      token?: string | null,
      amount?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; token: string; amount: BigNumber }
    >;

    FundsWithdrawn(
      receiver?: string | null,
      initiator?: string | null,
      token?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { receiver: string; initiator: string; token: string; amount: BigNumber }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addWhitelistedService(
      _service: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositFunds(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gelato(overrides?: CallOverrides): Promise<BigNumber>;

    getCreditTokensByUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelistedServices(overrides?: CallOverrides): Promise<BigNumber>;

    maxFee(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeWhitelistedService(
      _service: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxFee(
      _newMaxFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    useFunds(
      _token: string,
      _amount: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userTokenBalance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawFunds(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addWhitelistedService(
      _service: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositFunds(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gelato(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCreditTokensByUser(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWhitelistedServices(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeWhitelistedService(
      _service: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxFee(
      _newMaxFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    useFunds(
      _token: string,
      _amount: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userTokenBalance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawFunds(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}