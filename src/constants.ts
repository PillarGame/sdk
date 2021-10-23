import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56, // BTC mainNet
  BSCTESTNET = 97,
  HECOMAINNET = 128,
  HECOTESTNET = 256,
  MATICMAINNET = 137,
  MATICTESTNET = 80001,
  ETHEREUMMAINNET = 1,
  ETHEREUMTESTNET = 4,
  FANTOMOPERAMAINNET = 250,
  AVALANCHEMAINNET = 43114,
  //AVALANCHETESTNET = ''
  // FANTOMTESTNET = '' ,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export interface FactoryProps {
  56: string;
  97: string;
  128: string;
  256: string;
  137: string;
  80001: string;
  1?: string;
  4?: string;
  250: string;
}

export const FACTORY_ADDRESS : FactoryProps = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.BSCTESTNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.HECOMAINNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.HECOTESTNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.MATICMAINNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.MATICTESTNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.ETHEREUMMAINNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.ETHEREUMTESTNET]: '0x0000000000000000000000000000000000001010'
}

export const INIT_CODE_HASH : FactoryProps = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.BSCTESTNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.HECOMAINNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.HECOTESTNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.MATICMAINNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.MATICTESTNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.ETHEREUMMAINNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.ETHEREUMTESTNET]: '0x0000000000000000000000000000000000001010'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
