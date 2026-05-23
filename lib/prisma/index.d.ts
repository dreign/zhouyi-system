
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TokenBalance
 * 
 */
export type TokenBalance = $Result.DefaultSelection<Prisma.$TokenBalancePayload>
/**
 * Model TokenUsage
 * 
 */
export type TokenUsage = $Result.DefaultSelection<Prisma.$TokenUsagePayload>
/**
 * Model DivinationRecord
 * 
 */
export type DivinationRecord = $Result.DefaultSelection<Prisma.$DivinationRecordPayload>
/**
 * Model GuaData
 * 
 */
export type GuaData = $Result.DefaultSelection<Prisma.$GuaDataPayload>
/**
 * Model CharacterData
 * 
 */
export type CharacterData = $Result.DefaultSelection<Prisma.$CharacterDataPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.tokenBalance`: Exposes CRUD operations for the **TokenBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenBalances
    * const tokenBalances = await prisma.tokenBalance.findMany()
    * ```
    */
  get tokenBalance(): Prisma.TokenBalanceDelegate<ExtArgs>;

  /**
   * `prisma.tokenUsage`: Exposes CRUD operations for the **TokenUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenUsages
    * const tokenUsages = await prisma.tokenUsage.findMany()
    * ```
    */
  get tokenUsage(): Prisma.TokenUsageDelegate<ExtArgs>;

  /**
   * `prisma.divinationRecord`: Exposes CRUD operations for the **DivinationRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DivinationRecords
    * const divinationRecords = await prisma.divinationRecord.findMany()
    * ```
    */
  get divinationRecord(): Prisma.DivinationRecordDelegate<ExtArgs>;

  /**
   * `prisma.guaData`: Exposes CRUD operations for the **GuaData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuaData
    * const guaData = await prisma.guaData.findMany()
    * ```
    */
  get guaData(): Prisma.GuaDataDelegate<ExtArgs>;

  /**
   * `prisma.characterData`: Exposes CRUD operations for the **CharacterData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterData
    * const characterData = await prisma.characterData.findMany()
    * ```
    */
  get characterData(): Prisma.CharacterDataDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TokenBalance: 'TokenBalance',
    TokenUsage: 'TokenUsage',
    DivinationRecord: 'DivinationRecord',
    GuaData: 'GuaData',
    CharacterData: 'CharacterData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "tokenBalance" | "tokenUsage" | "divinationRecord" | "guaData" | "characterData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TokenBalance: {
        payload: Prisma.$TokenBalancePayload<ExtArgs>
        fields: Prisma.TokenBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBalancePayload>
          }
          findFirst: {
            args: Prisma.TokenBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBalancePayload>
          }
          findMany: {
            args: Prisma.TokenBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBalancePayload>[]
          }
          create: {
            args: Prisma.TokenBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBalancePayload>
          }
          createMany: {
            args: Prisma.TokenBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBalancePayload>[]
          }
          delete: {
            args: Prisma.TokenBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBalancePayload>
          }
          update: {
            args: Prisma.TokenBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBalancePayload>
          }
          deleteMany: {
            args: Prisma.TokenBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBalancePayload>
          }
          aggregate: {
            args: Prisma.TokenBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenBalance>
          }
          groupBy: {
            args: Prisma.TokenBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<TokenBalanceCountAggregateOutputType> | number
          }
        }
      }
      TokenUsage: {
        payload: Prisma.$TokenUsagePayload<ExtArgs>
        fields: Prisma.TokenUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          findFirst: {
            args: Prisma.TokenUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          findMany: {
            args: Prisma.TokenUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>[]
          }
          create: {
            args: Prisma.TokenUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          createMany: {
            args: Prisma.TokenUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>[]
          }
          delete: {
            args: Prisma.TokenUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          update: {
            args: Prisma.TokenUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          deleteMany: {
            args: Prisma.TokenUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          aggregate: {
            args: Prisma.TokenUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenUsage>
          }
          groupBy: {
            args: Prisma.TokenUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenUsageCountArgs<ExtArgs>
            result: $Utils.Optional<TokenUsageCountAggregateOutputType> | number
          }
        }
      }
      DivinationRecord: {
        payload: Prisma.$DivinationRecordPayload<ExtArgs>
        fields: Prisma.DivinationRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivinationRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivinationRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivinationRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivinationRecordPayload>
          }
          findFirst: {
            args: Prisma.DivinationRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivinationRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivinationRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivinationRecordPayload>
          }
          findMany: {
            args: Prisma.DivinationRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivinationRecordPayload>[]
          }
          create: {
            args: Prisma.DivinationRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivinationRecordPayload>
          }
          createMany: {
            args: Prisma.DivinationRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DivinationRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivinationRecordPayload>[]
          }
          delete: {
            args: Prisma.DivinationRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivinationRecordPayload>
          }
          update: {
            args: Prisma.DivinationRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivinationRecordPayload>
          }
          deleteMany: {
            args: Prisma.DivinationRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DivinationRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DivinationRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivinationRecordPayload>
          }
          aggregate: {
            args: Prisma.DivinationRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDivinationRecord>
          }
          groupBy: {
            args: Prisma.DivinationRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<DivinationRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivinationRecordCountArgs<ExtArgs>
            result: $Utils.Optional<DivinationRecordCountAggregateOutputType> | number
          }
        }
      }
      GuaData: {
        payload: Prisma.$GuaDataPayload<ExtArgs>
        fields: Prisma.GuaDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuaDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuaDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuaDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuaDataPayload>
          }
          findFirst: {
            args: Prisma.GuaDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuaDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuaDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuaDataPayload>
          }
          findMany: {
            args: Prisma.GuaDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuaDataPayload>[]
          }
          create: {
            args: Prisma.GuaDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuaDataPayload>
          }
          createMany: {
            args: Prisma.GuaDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuaDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuaDataPayload>[]
          }
          delete: {
            args: Prisma.GuaDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuaDataPayload>
          }
          update: {
            args: Prisma.GuaDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuaDataPayload>
          }
          deleteMany: {
            args: Prisma.GuaDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuaDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuaDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuaDataPayload>
          }
          aggregate: {
            args: Prisma.GuaDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuaData>
          }
          groupBy: {
            args: Prisma.GuaDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuaDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuaDataCountArgs<ExtArgs>
            result: $Utils.Optional<GuaDataCountAggregateOutputType> | number
          }
        }
      }
      CharacterData: {
        payload: Prisma.$CharacterDataPayload<ExtArgs>
        fields: Prisma.CharacterDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterDataPayload>
          }
          findFirst: {
            args: Prisma.CharacterDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterDataPayload>
          }
          findMany: {
            args: Prisma.CharacterDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterDataPayload>[]
          }
          create: {
            args: Prisma.CharacterDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterDataPayload>
          }
          createMany: {
            args: Prisma.CharacterDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterDataPayload>[]
          }
          delete: {
            args: Prisma.CharacterDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterDataPayload>
          }
          update: {
            args: Prisma.CharacterDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterDataPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CharacterDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterDataPayload>
          }
          aggregate: {
            args: Prisma.CharacterDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterData>
          }
          groupBy: {
            args: Prisma.CharacterDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterDataCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    divinationRecords: number
    tokenUsage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    divinationRecords?: boolean | UserCountOutputTypeCountDivinationRecordsArgs
    tokenUsage?: boolean | UserCountOutputTypeCountTokenUsageArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDivinationRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivinationRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenUsageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    avatar: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    avatar: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    avatar: number
    language: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    avatar?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    avatar?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    avatar?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string | null
    phone: string | null
    password: string | null
    avatar: string | null
    language: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    avatar?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    divinationRecords?: boolean | User$divinationRecordsArgs<ExtArgs>
    tokenBalance?: boolean | User$tokenBalanceArgs<ExtArgs>
    tokenUsage?: boolean | User$tokenUsageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    avatar?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    avatar?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    divinationRecords?: boolean | User$divinationRecordsArgs<ExtArgs>
    tokenBalance?: boolean | User$tokenBalanceArgs<ExtArgs>
    tokenUsage?: boolean | User$tokenUsageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      divinationRecords: Prisma.$DivinationRecordPayload<ExtArgs>[]
      tokenBalance: Prisma.$TokenBalancePayload<ExtArgs> | null
      tokenUsage: Prisma.$TokenUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      phone: string | null
      password: string | null
      avatar: string | null
      language: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    divinationRecords<T extends User$divinationRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$divinationRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "findMany"> | Null>
    tokenBalance<T extends User$tokenBalanceArgs<ExtArgs> = {}>(args?: Subset<T, User$tokenBalanceArgs<ExtArgs>>): Prisma__TokenBalanceClient<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    tokenUsage<T extends User$tokenUsageArgs<ExtArgs> = {}>(args?: Subset<T, User$tokenUsageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly language: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.divinationRecords
   */
  export type User$divinationRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
    where?: DivinationRecordWhereInput
    orderBy?: DivinationRecordOrderByWithRelationInput | DivinationRecordOrderByWithRelationInput[]
    cursor?: DivinationRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DivinationRecordScalarFieldEnum | DivinationRecordScalarFieldEnum[]
  }

  /**
   * User.tokenBalance
   */
  export type User$tokenBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
    where?: TokenBalanceWhereInput
  }

  /**
   * User.tokenUsage
   */
  export type User$tokenUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    where?: TokenUsageWhereInput
    orderBy?: TokenUsageOrderByWithRelationInput | TokenUsageOrderByWithRelationInput[]
    cursor?: TokenUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenUsageScalarFieldEnum | TokenUsageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TokenBalance
   */

  export type AggregateTokenBalance = {
    _count: TokenBalanceCountAggregateOutputType | null
    _avg: TokenBalanceAvgAggregateOutputType | null
    _sum: TokenBalanceSumAggregateOutputType | null
    _min: TokenBalanceMinAggregateOutputType | null
    _max: TokenBalanceMaxAggregateOutputType | null
  }

  export type TokenBalanceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: number | null
    totalPurchased: number | null
  }

  export type TokenBalanceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: number | null
    totalPurchased: number | null
  }

  export type TokenBalanceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: number | null
    totalPurchased: number | null
    updatedAt: Date | null
  }

  export type TokenBalanceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: number | null
    totalPurchased: number | null
    updatedAt: Date | null
  }

  export type TokenBalanceCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    totalPurchased: number
    updatedAt: number
    _all: number
  }


  export type TokenBalanceAvgAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    totalPurchased?: true
  }

  export type TokenBalanceSumAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    totalPurchased?: true
  }

  export type TokenBalanceMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    totalPurchased?: true
    updatedAt?: true
  }

  export type TokenBalanceMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    totalPurchased?: true
    updatedAt?: true
  }

  export type TokenBalanceCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    totalPurchased?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenBalance to aggregate.
     */
    where?: TokenBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenBalances to fetch.
     */
    orderBy?: TokenBalanceOrderByWithRelationInput | TokenBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenBalances
    **/
    _count?: true | TokenBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenBalanceMaxAggregateInputType
  }

  export type GetTokenBalanceAggregateType<T extends TokenBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenBalance[P]>
      : GetScalarType<T[P], AggregateTokenBalance[P]>
  }




  export type TokenBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenBalanceWhereInput
    orderBy?: TokenBalanceOrderByWithAggregationInput | TokenBalanceOrderByWithAggregationInput[]
    by: TokenBalanceScalarFieldEnum[] | TokenBalanceScalarFieldEnum
    having?: TokenBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenBalanceCountAggregateInputType | true
    _avg?: TokenBalanceAvgAggregateInputType
    _sum?: TokenBalanceSumAggregateInputType
    _min?: TokenBalanceMinAggregateInputType
    _max?: TokenBalanceMaxAggregateInputType
  }

  export type TokenBalanceGroupByOutputType = {
    id: number
    userId: number
    balance: number
    totalPurchased: number
    updatedAt: Date
    _count: TokenBalanceCountAggregateOutputType | null
    _avg: TokenBalanceAvgAggregateOutputType | null
    _sum: TokenBalanceSumAggregateOutputType | null
    _min: TokenBalanceMinAggregateOutputType | null
    _max: TokenBalanceMaxAggregateOutputType | null
  }

  type GetTokenBalanceGroupByPayload<T extends TokenBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], TokenBalanceGroupByOutputType[P]>
        }
      >
    >


  export type TokenBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    totalPurchased?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenBalance"]>

  export type TokenBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    totalPurchased?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenBalance"]>

  export type TokenBalanceSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
    totalPurchased?: boolean
    updatedAt?: boolean
  }

  export type TokenBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenBalance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      balance: number
      totalPurchased: number
      updatedAt: Date
    }, ExtArgs["result"]["tokenBalance"]>
    composites: {}
  }

  type TokenBalanceGetPayload<S extends boolean | null | undefined | TokenBalanceDefaultArgs> = $Result.GetResult<Prisma.$TokenBalancePayload, S>

  type TokenBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenBalanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenBalanceCountAggregateInputType | true
    }

  export interface TokenBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenBalance'], meta: { name: 'TokenBalance' } }
    /**
     * Find zero or one TokenBalance that matches the filter.
     * @param {TokenBalanceFindUniqueArgs} args - Arguments to find a TokenBalance
     * @example
     * // Get one TokenBalance
     * const tokenBalance = await prisma.tokenBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenBalanceFindUniqueArgs>(args: SelectSubset<T, TokenBalanceFindUniqueArgs<ExtArgs>>): Prisma__TokenBalanceClient<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TokenBalance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenBalanceFindUniqueOrThrowArgs} args - Arguments to find a TokenBalance
     * @example
     * // Get one TokenBalance
     * const tokenBalance = await prisma.tokenBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenBalanceClient<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TokenBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBalanceFindFirstArgs} args - Arguments to find a TokenBalance
     * @example
     * // Get one TokenBalance
     * const tokenBalance = await prisma.tokenBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenBalanceFindFirstArgs>(args?: SelectSubset<T, TokenBalanceFindFirstArgs<ExtArgs>>): Prisma__TokenBalanceClient<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TokenBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBalanceFindFirstOrThrowArgs} args - Arguments to find a TokenBalance
     * @example
     * // Get one TokenBalance
     * const tokenBalance = await prisma.tokenBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenBalanceClient<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TokenBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenBalances
     * const tokenBalances = await prisma.tokenBalance.findMany()
     * 
     * // Get first 10 TokenBalances
     * const tokenBalances = await prisma.tokenBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenBalanceWithIdOnly = await prisma.tokenBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenBalanceFindManyArgs>(args?: SelectSubset<T, TokenBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TokenBalance.
     * @param {TokenBalanceCreateArgs} args - Arguments to create a TokenBalance.
     * @example
     * // Create one TokenBalance
     * const TokenBalance = await prisma.tokenBalance.create({
     *   data: {
     *     // ... data to create a TokenBalance
     *   }
     * })
     * 
     */
    create<T extends TokenBalanceCreateArgs>(args: SelectSubset<T, TokenBalanceCreateArgs<ExtArgs>>): Prisma__TokenBalanceClient<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TokenBalances.
     * @param {TokenBalanceCreateManyArgs} args - Arguments to create many TokenBalances.
     * @example
     * // Create many TokenBalances
     * const tokenBalance = await prisma.tokenBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenBalanceCreateManyArgs>(args?: SelectSubset<T, TokenBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenBalances and returns the data saved in the database.
     * @param {TokenBalanceCreateManyAndReturnArgs} args - Arguments to create many TokenBalances.
     * @example
     * // Create many TokenBalances
     * const tokenBalance = await prisma.tokenBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenBalances and only return the `id`
     * const tokenBalanceWithIdOnly = await prisma.tokenBalance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TokenBalance.
     * @param {TokenBalanceDeleteArgs} args - Arguments to delete one TokenBalance.
     * @example
     * // Delete one TokenBalance
     * const TokenBalance = await prisma.tokenBalance.delete({
     *   where: {
     *     // ... filter to delete one TokenBalance
     *   }
     * })
     * 
     */
    delete<T extends TokenBalanceDeleteArgs>(args: SelectSubset<T, TokenBalanceDeleteArgs<ExtArgs>>): Prisma__TokenBalanceClient<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TokenBalance.
     * @param {TokenBalanceUpdateArgs} args - Arguments to update one TokenBalance.
     * @example
     * // Update one TokenBalance
     * const tokenBalance = await prisma.tokenBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenBalanceUpdateArgs>(args: SelectSubset<T, TokenBalanceUpdateArgs<ExtArgs>>): Prisma__TokenBalanceClient<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TokenBalances.
     * @param {TokenBalanceDeleteManyArgs} args - Arguments to filter TokenBalances to delete.
     * @example
     * // Delete a few TokenBalances
     * const { count } = await prisma.tokenBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenBalanceDeleteManyArgs>(args?: SelectSubset<T, TokenBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenBalances
     * const tokenBalance = await prisma.tokenBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenBalanceUpdateManyArgs>(args: SelectSubset<T, TokenBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenBalance.
     * @param {TokenBalanceUpsertArgs} args - Arguments to update or create a TokenBalance.
     * @example
     * // Update or create a TokenBalance
     * const tokenBalance = await prisma.tokenBalance.upsert({
     *   create: {
     *     // ... data to create a TokenBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenBalance we want to update
     *   }
     * })
     */
    upsert<T extends TokenBalanceUpsertArgs>(args: SelectSubset<T, TokenBalanceUpsertArgs<ExtArgs>>): Prisma__TokenBalanceClient<$Result.GetResult<Prisma.$TokenBalancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TokenBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBalanceCountArgs} args - Arguments to filter TokenBalances to count.
     * @example
     * // Count the number of TokenBalances
     * const count = await prisma.tokenBalance.count({
     *   where: {
     *     // ... the filter for the TokenBalances we want to count
     *   }
     * })
    **/
    count<T extends TokenBalanceCountArgs>(
      args?: Subset<T, TokenBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenBalanceAggregateArgs>(args: Subset<T, TokenBalanceAggregateArgs>): Prisma.PrismaPromise<GetTokenBalanceAggregateType<T>>

    /**
     * Group by TokenBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBalanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenBalanceGroupByArgs['orderBy'] }
        : { orderBy?: TokenBalanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenBalance model
   */
  readonly fields: TokenBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenBalance model
   */ 
  interface TokenBalanceFieldRefs {
    readonly id: FieldRef<"TokenBalance", 'Int'>
    readonly userId: FieldRef<"TokenBalance", 'Int'>
    readonly balance: FieldRef<"TokenBalance", 'Int'>
    readonly totalPurchased: FieldRef<"TokenBalance", 'Int'>
    readonly updatedAt: FieldRef<"TokenBalance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenBalance findUnique
   */
  export type TokenBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
    /**
     * Filter, which TokenBalance to fetch.
     */
    where: TokenBalanceWhereUniqueInput
  }

  /**
   * TokenBalance findUniqueOrThrow
   */
  export type TokenBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
    /**
     * Filter, which TokenBalance to fetch.
     */
    where: TokenBalanceWhereUniqueInput
  }

  /**
   * TokenBalance findFirst
   */
  export type TokenBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
    /**
     * Filter, which TokenBalance to fetch.
     */
    where?: TokenBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenBalances to fetch.
     */
    orderBy?: TokenBalanceOrderByWithRelationInput | TokenBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenBalances.
     */
    cursor?: TokenBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenBalances.
     */
    distinct?: TokenBalanceScalarFieldEnum | TokenBalanceScalarFieldEnum[]
  }

  /**
   * TokenBalance findFirstOrThrow
   */
  export type TokenBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
    /**
     * Filter, which TokenBalance to fetch.
     */
    where?: TokenBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenBalances to fetch.
     */
    orderBy?: TokenBalanceOrderByWithRelationInput | TokenBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenBalances.
     */
    cursor?: TokenBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenBalances.
     */
    distinct?: TokenBalanceScalarFieldEnum | TokenBalanceScalarFieldEnum[]
  }

  /**
   * TokenBalance findMany
   */
  export type TokenBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
    /**
     * Filter, which TokenBalances to fetch.
     */
    where?: TokenBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenBalances to fetch.
     */
    orderBy?: TokenBalanceOrderByWithRelationInput | TokenBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenBalances.
     */
    cursor?: TokenBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenBalances.
     */
    skip?: number
    distinct?: TokenBalanceScalarFieldEnum | TokenBalanceScalarFieldEnum[]
  }

  /**
   * TokenBalance create
   */
  export type TokenBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenBalance.
     */
    data: XOR<TokenBalanceCreateInput, TokenBalanceUncheckedCreateInput>
  }

  /**
   * TokenBalance createMany
   */
  export type TokenBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenBalances.
     */
    data: TokenBalanceCreateManyInput | TokenBalanceCreateManyInput[]
  }

  /**
   * TokenBalance createManyAndReturn
   */
  export type TokenBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TokenBalances.
     */
    data: TokenBalanceCreateManyInput | TokenBalanceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenBalance update
   */
  export type TokenBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenBalance.
     */
    data: XOR<TokenBalanceUpdateInput, TokenBalanceUncheckedUpdateInput>
    /**
     * Choose, which TokenBalance to update.
     */
    where: TokenBalanceWhereUniqueInput
  }

  /**
   * TokenBalance updateMany
   */
  export type TokenBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenBalances.
     */
    data: XOR<TokenBalanceUpdateManyMutationInput, TokenBalanceUncheckedUpdateManyInput>
    /**
     * Filter which TokenBalances to update
     */
    where?: TokenBalanceWhereInput
  }

  /**
   * TokenBalance upsert
   */
  export type TokenBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenBalance to update in case it exists.
     */
    where: TokenBalanceWhereUniqueInput
    /**
     * In case the TokenBalance found by the `where` argument doesn't exist, create a new TokenBalance with this data.
     */
    create: XOR<TokenBalanceCreateInput, TokenBalanceUncheckedCreateInput>
    /**
     * In case the TokenBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenBalanceUpdateInput, TokenBalanceUncheckedUpdateInput>
  }

  /**
   * TokenBalance delete
   */
  export type TokenBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
    /**
     * Filter which TokenBalance to delete.
     */
    where: TokenBalanceWhereUniqueInput
  }

  /**
   * TokenBalance deleteMany
   */
  export type TokenBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenBalances to delete
     */
    where?: TokenBalanceWhereInput
  }

  /**
   * TokenBalance without action
   */
  export type TokenBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBalance
     */
    select?: TokenBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenBalanceInclude<ExtArgs> | null
  }


  /**
   * Model TokenUsage
   */

  export type AggregateTokenUsage = {
    _count: TokenUsageCountAggregateOutputType | null
    _avg: TokenUsageAvgAggregateOutputType | null
    _sum: TokenUsageSumAggregateOutputType | null
    _min: TokenUsageMinAggregateOutputType | null
    _max: TokenUsageMaxAggregateOutputType | null
  }

  export type TokenUsageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    tokens: number | null
    cost: number | null
  }

  export type TokenUsageSumAggregateOutputType = {
    id: number | null
    userId: number | null
    tokens: number | null
    cost: number | null
  }

  export type TokenUsageMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    tokens: number | null
    cost: number | null
    isPaid: boolean | null
    createdAt: Date | null
  }

  export type TokenUsageMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    tokens: number | null
    cost: number | null
    isPaid: boolean | null
    createdAt: Date | null
  }

  export type TokenUsageCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    tokens: number
    cost: number
    isPaid: number
    createdAt: number
    _all: number
  }


  export type TokenUsageAvgAggregateInputType = {
    id?: true
    userId?: true
    tokens?: true
    cost?: true
  }

  export type TokenUsageSumAggregateInputType = {
    id?: true
    userId?: true
    tokens?: true
    cost?: true
  }

  export type TokenUsageMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    tokens?: true
    cost?: true
    isPaid?: true
    createdAt?: true
  }

  export type TokenUsageMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    tokens?: true
    cost?: true
    isPaid?: true
    createdAt?: true
  }

  export type TokenUsageCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    tokens?: true
    cost?: true
    isPaid?: true
    createdAt?: true
    _all?: true
  }

  export type TokenUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenUsage to aggregate.
     */
    where?: TokenUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenUsages to fetch.
     */
    orderBy?: TokenUsageOrderByWithRelationInput | TokenUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenUsages
    **/
    _count?: true | TokenUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenUsageMaxAggregateInputType
  }

  export type GetTokenUsageAggregateType<T extends TokenUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenUsage[P]>
      : GetScalarType<T[P], AggregateTokenUsage[P]>
  }




  export type TokenUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenUsageWhereInput
    orderBy?: TokenUsageOrderByWithAggregationInput | TokenUsageOrderByWithAggregationInput[]
    by: TokenUsageScalarFieldEnum[] | TokenUsageScalarFieldEnum
    having?: TokenUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenUsageCountAggregateInputType | true
    _avg?: TokenUsageAvgAggregateInputType
    _sum?: TokenUsageSumAggregateInputType
    _min?: TokenUsageMinAggregateInputType
    _max?: TokenUsageMaxAggregateInputType
  }

  export type TokenUsageGroupByOutputType = {
    id: number
    userId: number
    type: string
    tokens: number
    cost: number
    isPaid: boolean
    createdAt: Date
    _count: TokenUsageCountAggregateOutputType | null
    _avg: TokenUsageAvgAggregateOutputType | null
    _sum: TokenUsageSumAggregateOutputType | null
    _min: TokenUsageMinAggregateOutputType | null
    _max: TokenUsageMaxAggregateOutputType | null
  }

  type GetTokenUsageGroupByPayload<T extends TokenUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenUsageGroupByOutputType[P]>
            : GetScalarType<T[P], TokenUsageGroupByOutputType[P]>
        }
      >
    >


  export type TokenUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    tokens?: boolean
    cost?: boolean
    isPaid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenUsage"]>

  export type TokenUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    tokens?: boolean
    cost?: boolean
    isPaid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenUsage"]>

  export type TokenUsageSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    tokens?: boolean
    cost?: boolean
    isPaid?: boolean
    createdAt?: boolean
  }

  export type TokenUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenUsage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: string
      tokens: number
      cost: number
      isPaid: boolean
      createdAt: Date
    }, ExtArgs["result"]["tokenUsage"]>
    composites: {}
  }

  type TokenUsageGetPayload<S extends boolean | null | undefined | TokenUsageDefaultArgs> = $Result.GetResult<Prisma.$TokenUsagePayload, S>

  type TokenUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenUsageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenUsageCountAggregateInputType | true
    }

  export interface TokenUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenUsage'], meta: { name: 'TokenUsage' } }
    /**
     * Find zero or one TokenUsage that matches the filter.
     * @param {TokenUsageFindUniqueArgs} args - Arguments to find a TokenUsage
     * @example
     * // Get one TokenUsage
     * const tokenUsage = await prisma.tokenUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenUsageFindUniqueArgs>(args: SelectSubset<T, TokenUsageFindUniqueArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TokenUsage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenUsageFindUniqueOrThrowArgs} args - Arguments to find a TokenUsage
     * @example
     * // Get one TokenUsage
     * const tokenUsage = await prisma.tokenUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TokenUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageFindFirstArgs} args - Arguments to find a TokenUsage
     * @example
     * // Get one TokenUsage
     * const tokenUsage = await prisma.tokenUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenUsageFindFirstArgs>(args?: SelectSubset<T, TokenUsageFindFirstArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TokenUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageFindFirstOrThrowArgs} args - Arguments to find a TokenUsage
     * @example
     * // Get one TokenUsage
     * const tokenUsage = await prisma.tokenUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TokenUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenUsages
     * const tokenUsages = await prisma.tokenUsage.findMany()
     * 
     * // Get first 10 TokenUsages
     * const tokenUsages = await prisma.tokenUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenUsageWithIdOnly = await prisma.tokenUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenUsageFindManyArgs>(args?: SelectSubset<T, TokenUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TokenUsage.
     * @param {TokenUsageCreateArgs} args - Arguments to create a TokenUsage.
     * @example
     * // Create one TokenUsage
     * const TokenUsage = await prisma.tokenUsage.create({
     *   data: {
     *     // ... data to create a TokenUsage
     *   }
     * })
     * 
     */
    create<T extends TokenUsageCreateArgs>(args: SelectSubset<T, TokenUsageCreateArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TokenUsages.
     * @param {TokenUsageCreateManyArgs} args - Arguments to create many TokenUsages.
     * @example
     * // Create many TokenUsages
     * const tokenUsage = await prisma.tokenUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenUsageCreateManyArgs>(args?: SelectSubset<T, TokenUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenUsages and returns the data saved in the database.
     * @param {TokenUsageCreateManyAndReturnArgs} args - Arguments to create many TokenUsages.
     * @example
     * // Create many TokenUsages
     * const tokenUsage = await prisma.tokenUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenUsages and only return the `id`
     * const tokenUsageWithIdOnly = await prisma.tokenUsage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TokenUsage.
     * @param {TokenUsageDeleteArgs} args - Arguments to delete one TokenUsage.
     * @example
     * // Delete one TokenUsage
     * const TokenUsage = await prisma.tokenUsage.delete({
     *   where: {
     *     // ... filter to delete one TokenUsage
     *   }
     * })
     * 
     */
    delete<T extends TokenUsageDeleteArgs>(args: SelectSubset<T, TokenUsageDeleteArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TokenUsage.
     * @param {TokenUsageUpdateArgs} args - Arguments to update one TokenUsage.
     * @example
     * // Update one TokenUsage
     * const tokenUsage = await prisma.tokenUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUsageUpdateArgs>(args: SelectSubset<T, TokenUsageUpdateArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TokenUsages.
     * @param {TokenUsageDeleteManyArgs} args - Arguments to filter TokenUsages to delete.
     * @example
     * // Delete a few TokenUsages
     * const { count } = await prisma.tokenUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenUsageDeleteManyArgs>(args?: SelectSubset<T, TokenUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenUsages
     * const tokenUsage = await prisma.tokenUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUsageUpdateManyArgs>(args: SelectSubset<T, TokenUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenUsage.
     * @param {TokenUsageUpsertArgs} args - Arguments to update or create a TokenUsage.
     * @example
     * // Update or create a TokenUsage
     * const tokenUsage = await prisma.tokenUsage.upsert({
     *   create: {
     *     // ... data to create a TokenUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenUsage we want to update
     *   }
     * })
     */
    upsert<T extends TokenUsageUpsertArgs>(args: SelectSubset<T, TokenUsageUpsertArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TokenUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageCountArgs} args - Arguments to filter TokenUsages to count.
     * @example
     * // Count the number of TokenUsages
     * const count = await prisma.tokenUsage.count({
     *   where: {
     *     // ... the filter for the TokenUsages we want to count
     *   }
     * })
    **/
    count<T extends TokenUsageCountArgs>(
      args?: Subset<T, TokenUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenUsageAggregateArgs>(args: Subset<T, TokenUsageAggregateArgs>): Prisma.PrismaPromise<GetTokenUsageAggregateType<T>>

    /**
     * Group by TokenUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenUsageGroupByArgs['orderBy'] }
        : { orderBy?: TokenUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenUsage model
   */
  readonly fields: TokenUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenUsage model
   */ 
  interface TokenUsageFieldRefs {
    readonly id: FieldRef<"TokenUsage", 'Int'>
    readonly userId: FieldRef<"TokenUsage", 'Int'>
    readonly type: FieldRef<"TokenUsage", 'String'>
    readonly tokens: FieldRef<"TokenUsage", 'Int'>
    readonly cost: FieldRef<"TokenUsage", 'Int'>
    readonly isPaid: FieldRef<"TokenUsage", 'Boolean'>
    readonly createdAt: FieldRef<"TokenUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenUsage findUnique
   */
  export type TokenUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter, which TokenUsage to fetch.
     */
    where: TokenUsageWhereUniqueInput
  }

  /**
   * TokenUsage findUniqueOrThrow
   */
  export type TokenUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter, which TokenUsage to fetch.
     */
    where: TokenUsageWhereUniqueInput
  }

  /**
   * TokenUsage findFirst
   */
  export type TokenUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter, which TokenUsage to fetch.
     */
    where?: TokenUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenUsages to fetch.
     */
    orderBy?: TokenUsageOrderByWithRelationInput | TokenUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenUsages.
     */
    cursor?: TokenUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenUsages.
     */
    distinct?: TokenUsageScalarFieldEnum | TokenUsageScalarFieldEnum[]
  }

  /**
   * TokenUsage findFirstOrThrow
   */
  export type TokenUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter, which TokenUsage to fetch.
     */
    where?: TokenUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenUsages to fetch.
     */
    orderBy?: TokenUsageOrderByWithRelationInput | TokenUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenUsages.
     */
    cursor?: TokenUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenUsages.
     */
    distinct?: TokenUsageScalarFieldEnum | TokenUsageScalarFieldEnum[]
  }

  /**
   * TokenUsage findMany
   */
  export type TokenUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter, which TokenUsages to fetch.
     */
    where?: TokenUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenUsages to fetch.
     */
    orderBy?: TokenUsageOrderByWithRelationInput | TokenUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenUsages.
     */
    cursor?: TokenUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenUsages.
     */
    skip?: number
    distinct?: TokenUsageScalarFieldEnum | TokenUsageScalarFieldEnum[]
  }

  /**
   * TokenUsage create
   */
  export type TokenUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenUsage.
     */
    data: XOR<TokenUsageCreateInput, TokenUsageUncheckedCreateInput>
  }

  /**
   * TokenUsage createMany
   */
  export type TokenUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenUsages.
     */
    data: TokenUsageCreateManyInput | TokenUsageCreateManyInput[]
  }

  /**
   * TokenUsage createManyAndReturn
   */
  export type TokenUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TokenUsages.
     */
    data: TokenUsageCreateManyInput | TokenUsageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenUsage update
   */
  export type TokenUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenUsage.
     */
    data: XOR<TokenUsageUpdateInput, TokenUsageUncheckedUpdateInput>
    /**
     * Choose, which TokenUsage to update.
     */
    where: TokenUsageWhereUniqueInput
  }

  /**
   * TokenUsage updateMany
   */
  export type TokenUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenUsages.
     */
    data: XOR<TokenUsageUpdateManyMutationInput, TokenUsageUncheckedUpdateManyInput>
    /**
     * Filter which TokenUsages to update
     */
    where?: TokenUsageWhereInput
  }

  /**
   * TokenUsage upsert
   */
  export type TokenUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenUsage to update in case it exists.
     */
    where: TokenUsageWhereUniqueInput
    /**
     * In case the TokenUsage found by the `where` argument doesn't exist, create a new TokenUsage with this data.
     */
    create: XOR<TokenUsageCreateInput, TokenUsageUncheckedCreateInput>
    /**
     * In case the TokenUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUsageUpdateInput, TokenUsageUncheckedUpdateInput>
  }

  /**
   * TokenUsage delete
   */
  export type TokenUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter which TokenUsage to delete.
     */
    where: TokenUsageWhereUniqueInput
  }

  /**
   * TokenUsage deleteMany
   */
  export type TokenUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenUsages to delete
     */
    where?: TokenUsageWhereInput
  }

  /**
   * TokenUsage without action
   */
  export type TokenUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
  }


  /**
   * Model DivinationRecord
   */

  export type AggregateDivinationRecord = {
    _count: DivinationRecordCountAggregateOutputType | null
    _avg: DivinationRecordAvgAggregateOutputType | null
    _sum: DivinationRecordSumAggregateOutputType | null
    _min: DivinationRecordMinAggregateOutputType | null
    _max: DivinationRecordMaxAggregateOutputType | null
  }

  export type DivinationRecordAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    cost: number | null
  }

  export type DivinationRecordSumAggregateOutputType = {
    id: number | null
    userId: number | null
    cost: number | null
  }

  export type DivinationRecordMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    inputData: string | null
    result: string | null
    detailResult: string | null
    isPaid: boolean | null
    cost: number | null
    createdAt: Date | null
  }

  export type DivinationRecordMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    inputData: string | null
    result: string | null
    detailResult: string | null
    isPaid: boolean | null
    cost: number | null
    createdAt: Date | null
  }

  export type DivinationRecordCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    inputData: number
    result: number
    detailResult: number
    isPaid: number
    cost: number
    createdAt: number
    _all: number
  }


  export type DivinationRecordAvgAggregateInputType = {
    id?: true
    userId?: true
    cost?: true
  }

  export type DivinationRecordSumAggregateInputType = {
    id?: true
    userId?: true
    cost?: true
  }

  export type DivinationRecordMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    inputData?: true
    result?: true
    detailResult?: true
    isPaid?: true
    cost?: true
    createdAt?: true
  }

  export type DivinationRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    inputData?: true
    result?: true
    detailResult?: true
    isPaid?: true
    cost?: true
    createdAt?: true
  }

  export type DivinationRecordCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    inputData?: true
    result?: true
    detailResult?: true
    isPaid?: true
    cost?: true
    createdAt?: true
    _all?: true
  }

  export type DivinationRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DivinationRecord to aggregate.
     */
    where?: DivinationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivinationRecords to fetch.
     */
    orderBy?: DivinationRecordOrderByWithRelationInput | DivinationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivinationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivinationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivinationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DivinationRecords
    **/
    _count?: true | DivinationRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivinationRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivinationRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivinationRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivinationRecordMaxAggregateInputType
  }

  export type GetDivinationRecordAggregateType<T extends DivinationRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateDivinationRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivinationRecord[P]>
      : GetScalarType<T[P], AggregateDivinationRecord[P]>
  }




  export type DivinationRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivinationRecordWhereInput
    orderBy?: DivinationRecordOrderByWithAggregationInput | DivinationRecordOrderByWithAggregationInput[]
    by: DivinationRecordScalarFieldEnum[] | DivinationRecordScalarFieldEnum
    having?: DivinationRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivinationRecordCountAggregateInputType | true
    _avg?: DivinationRecordAvgAggregateInputType
    _sum?: DivinationRecordSumAggregateInputType
    _min?: DivinationRecordMinAggregateInputType
    _max?: DivinationRecordMaxAggregateInputType
  }

  export type DivinationRecordGroupByOutputType = {
    id: number
    userId: number
    type: string
    inputData: string
    result: string
    detailResult: string | null
    isPaid: boolean
    cost: number
    createdAt: Date
    _count: DivinationRecordCountAggregateOutputType | null
    _avg: DivinationRecordAvgAggregateOutputType | null
    _sum: DivinationRecordSumAggregateOutputType | null
    _min: DivinationRecordMinAggregateOutputType | null
    _max: DivinationRecordMaxAggregateOutputType | null
  }

  type GetDivinationRecordGroupByPayload<T extends DivinationRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivinationRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivinationRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivinationRecordGroupByOutputType[P]>
            : GetScalarType<T[P], DivinationRecordGroupByOutputType[P]>
        }
      >
    >


  export type DivinationRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    inputData?: boolean
    result?: boolean
    detailResult?: boolean
    isPaid?: boolean
    cost?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divinationRecord"]>

  export type DivinationRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    inputData?: boolean
    result?: boolean
    detailResult?: boolean
    isPaid?: boolean
    cost?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divinationRecord"]>

  export type DivinationRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    inputData?: boolean
    result?: boolean
    detailResult?: boolean
    isPaid?: boolean
    cost?: boolean
    createdAt?: boolean
  }

  export type DivinationRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DivinationRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DivinationRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DivinationRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: string
      inputData: string
      result: string
      detailResult: string | null
      isPaid: boolean
      cost: number
      createdAt: Date
    }, ExtArgs["result"]["divinationRecord"]>
    composites: {}
  }

  type DivinationRecordGetPayload<S extends boolean | null | undefined | DivinationRecordDefaultArgs> = $Result.GetResult<Prisma.$DivinationRecordPayload, S>

  type DivinationRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DivinationRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DivinationRecordCountAggregateInputType | true
    }

  export interface DivinationRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DivinationRecord'], meta: { name: 'DivinationRecord' } }
    /**
     * Find zero or one DivinationRecord that matches the filter.
     * @param {DivinationRecordFindUniqueArgs} args - Arguments to find a DivinationRecord
     * @example
     * // Get one DivinationRecord
     * const divinationRecord = await prisma.divinationRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DivinationRecordFindUniqueArgs>(args: SelectSubset<T, DivinationRecordFindUniqueArgs<ExtArgs>>): Prisma__DivinationRecordClient<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DivinationRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DivinationRecordFindUniqueOrThrowArgs} args - Arguments to find a DivinationRecord
     * @example
     * // Get one DivinationRecord
     * const divinationRecord = await prisma.divinationRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DivinationRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, DivinationRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DivinationRecordClient<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DivinationRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivinationRecordFindFirstArgs} args - Arguments to find a DivinationRecord
     * @example
     * // Get one DivinationRecord
     * const divinationRecord = await prisma.divinationRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DivinationRecordFindFirstArgs>(args?: SelectSubset<T, DivinationRecordFindFirstArgs<ExtArgs>>): Prisma__DivinationRecordClient<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DivinationRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivinationRecordFindFirstOrThrowArgs} args - Arguments to find a DivinationRecord
     * @example
     * // Get one DivinationRecord
     * const divinationRecord = await prisma.divinationRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DivinationRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, DivinationRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__DivinationRecordClient<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DivinationRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivinationRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DivinationRecords
     * const divinationRecords = await prisma.divinationRecord.findMany()
     * 
     * // Get first 10 DivinationRecords
     * const divinationRecords = await prisma.divinationRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divinationRecordWithIdOnly = await prisma.divinationRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DivinationRecordFindManyArgs>(args?: SelectSubset<T, DivinationRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DivinationRecord.
     * @param {DivinationRecordCreateArgs} args - Arguments to create a DivinationRecord.
     * @example
     * // Create one DivinationRecord
     * const DivinationRecord = await prisma.divinationRecord.create({
     *   data: {
     *     // ... data to create a DivinationRecord
     *   }
     * })
     * 
     */
    create<T extends DivinationRecordCreateArgs>(args: SelectSubset<T, DivinationRecordCreateArgs<ExtArgs>>): Prisma__DivinationRecordClient<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DivinationRecords.
     * @param {DivinationRecordCreateManyArgs} args - Arguments to create many DivinationRecords.
     * @example
     * // Create many DivinationRecords
     * const divinationRecord = await prisma.divinationRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DivinationRecordCreateManyArgs>(args?: SelectSubset<T, DivinationRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DivinationRecords and returns the data saved in the database.
     * @param {DivinationRecordCreateManyAndReturnArgs} args - Arguments to create many DivinationRecords.
     * @example
     * // Create many DivinationRecords
     * const divinationRecord = await prisma.divinationRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DivinationRecords and only return the `id`
     * const divinationRecordWithIdOnly = await prisma.divinationRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DivinationRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, DivinationRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DivinationRecord.
     * @param {DivinationRecordDeleteArgs} args - Arguments to delete one DivinationRecord.
     * @example
     * // Delete one DivinationRecord
     * const DivinationRecord = await prisma.divinationRecord.delete({
     *   where: {
     *     // ... filter to delete one DivinationRecord
     *   }
     * })
     * 
     */
    delete<T extends DivinationRecordDeleteArgs>(args: SelectSubset<T, DivinationRecordDeleteArgs<ExtArgs>>): Prisma__DivinationRecordClient<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DivinationRecord.
     * @param {DivinationRecordUpdateArgs} args - Arguments to update one DivinationRecord.
     * @example
     * // Update one DivinationRecord
     * const divinationRecord = await prisma.divinationRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DivinationRecordUpdateArgs>(args: SelectSubset<T, DivinationRecordUpdateArgs<ExtArgs>>): Prisma__DivinationRecordClient<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DivinationRecords.
     * @param {DivinationRecordDeleteManyArgs} args - Arguments to filter DivinationRecords to delete.
     * @example
     * // Delete a few DivinationRecords
     * const { count } = await prisma.divinationRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DivinationRecordDeleteManyArgs>(args?: SelectSubset<T, DivinationRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DivinationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivinationRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DivinationRecords
     * const divinationRecord = await prisma.divinationRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DivinationRecordUpdateManyArgs>(args: SelectSubset<T, DivinationRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DivinationRecord.
     * @param {DivinationRecordUpsertArgs} args - Arguments to update or create a DivinationRecord.
     * @example
     * // Update or create a DivinationRecord
     * const divinationRecord = await prisma.divinationRecord.upsert({
     *   create: {
     *     // ... data to create a DivinationRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DivinationRecord we want to update
     *   }
     * })
     */
    upsert<T extends DivinationRecordUpsertArgs>(args: SelectSubset<T, DivinationRecordUpsertArgs<ExtArgs>>): Prisma__DivinationRecordClient<$Result.GetResult<Prisma.$DivinationRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DivinationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivinationRecordCountArgs} args - Arguments to filter DivinationRecords to count.
     * @example
     * // Count the number of DivinationRecords
     * const count = await prisma.divinationRecord.count({
     *   where: {
     *     // ... the filter for the DivinationRecords we want to count
     *   }
     * })
    **/
    count<T extends DivinationRecordCountArgs>(
      args?: Subset<T, DivinationRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivinationRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DivinationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivinationRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DivinationRecordAggregateArgs>(args: Subset<T, DivinationRecordAggregateArgs>): Prisma.PrismaPromise<GetDivinationRecordAggregateType<T>>

    /**
     * Group by DivinationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivinationRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DivinationRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivinationRecordGroupByArgs['orderBy'] }
        : { orderBy?: DivinationRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DivinationRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivinationRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DivinationRecord model
   */
  readonly fields: DivinationRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DivinationRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivinationRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DivinationRecord model
   */ 
  interface DivinationRecordFieldRefs {
    readonly id: FieldRef<"DivinationRecord", 'Int'>
    readonly userId: FieldRef<"DivinationRecord", 'Int'>
    readonly type: FieldRef<"DivinationRecord", 'String'>
    readonly inputData: FieldRef<"DivinationRecord", 'String'>
    readonly result: FieldRef<"DivinationRecord", 'String'>
    readonly detailResult: FieldRef<"DivinationRecord", 'String'>
    readonly isPaid: FieldRef<"DivinationRecord", 'Boolean'>
    readonly cost: FieldRef<"DivinationRecord", 'Int'>
    readonly createdAt: FieldRef<"DivinationRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DivinationRecord findUnique
   */
  export type DivinationRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
    /**
     * Filter, which DivinationRecord to fetch.
     */
    where: DivinationRecordWhereUniqueInput
  }

  /**
   * DivinationRecord findUniqueOrThrow
   */
  export type DivinationRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
    /**
     * Filter, which DivinationRecord to fetch.
     */
    where: DivinationRecordWhereUniqueInput
  }

  /**
   * DivinationRecord findFirst
   */
  export type DivinationRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
    /**
     * Filter, which DivinationRecord to fetch.
     */
    where?: DivinationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivinationRecords to fetch.
     */
    orderBy?: DivinationRecordOrderByWithRelationInput | DivinationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DivinationRecords.
     */
    cursor?: DivinationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivinationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivinationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DivinationRecords.
     */
    distinct?: DivinationRecordScalarFieldEnum | DivinationRecordScalarFieldEnum[]
  }

  /**
   * DivinationRecord findFirstOrThrow
   */
  export type DivinationRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
    /**
     * Filter, which DivinationRecord to fetch.
     */
    where?: DivinationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivinationRecords to fetch.
     */
    orderBy?: DivinationRecordOrderByWithRelationInput | DivinationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DivinationRecords.
     */
    cursor?: DivinationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivinationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivinationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DivinationRecords.
     */
    distinct?: DivinationRecordScalarFieldEnum | DivinationRecordScalarFieldEnum[]
  }

  /**
   * DivinationRecord findMany
   */
  export type DivinationRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
    /**
     * Filter, which DivinationRecords to fetch.
     */
    where?: DivinationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivinationRecords to fetch.
     */
    orderBy?: DivinationRecordOrderByWithRelationInput | DivinationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DivinationRecords.
     */
    cursor?: DivinationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivinationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivinationRecords.
     */
    skip?: number
    distinct?: DivinationRecordScalarFieldEnum | DivinationRecordScalarFieldEnum[]
  }

  /**
   * DivinationRecord create
   */
  export type DivinationRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a DivinationRecord.
     */
    data: XOR<DivinationRecordCreateInput, DivinationRecordUncheckedCreateInput>
  }

  /**
   * DivinationRecord createMany
   */
  export type DivinationRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DivinationRecords.
     */
    data: DivinationRecordCreateManyInput | DivinationRecordCreateManyInput[]
  }

  /**
   * DivinationRecord createManyAndReturn
   */
  export type DivinationRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DivinationRecords.
     */
    data: DivinationRecordCreateManyInput | DivinationRecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DivinationRecord update
   */
  export type DivinationRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a DivinationRecord.
     */
    data: XOR<DivinationRecordUpdateInput, DivinationRecordUncheckedUpdateInput>
    /**
     * Choose, which DivinationRecord to update.
     */
    where: DivinationRecordWhereUniqueInput
  }

  /**
   * DivinationRecord updateMany
   */
  export type DivinationRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DivinationRecords.
     */
    data: XOR<DivinationRecordUpdateManyMutationInput, DivinationRecordUncheckedUpdateManyInput>
    /**
     * Filter which DivinationRecords to update
     */
    where?: DivinationRecordWhereInput
  }

  /**
   * DivinationRecord upsert
   */
  export type DivinationRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the DivinationRecord to update in case it exists.
     */
    where: DivinationRecordWhereUniqueInput
    /**
     * In case the DivinationRecord found by the `where` argument doesn't exist, create a new DivinationRecord with this data.
     */
    create: XOR<DivinationRecordCreateInput, DivinationRecordUncheckedCreateInput>
    /**
     * In case the DivinationRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivinationRecordUpdateInput, DivinationRecordUncheckedUpdateInput>
  }

  /**
   * DivinationRecord delete
   */
  export type DivinationRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
    /**
     * Filter which DivinationRecord to delete.
     */
    where: DivinationRecordWhereUniqueInput
  }

  /**
   * DivinationRecord deleteMany
   */
  export type DivinationRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DivinationRecords to delete
     */
    where?: DivinationRecordWhereInput
  }

  /**
   * DivinationRecord without action
   */
  export type DivinationRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivinationRecord
     */
    select?: DivinationRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivinationRecordInclude<ExtArgs> | null
  }


  /**
   * Model GuaData
   */

  export type AggregateGuaData = {
    _count: GuaDataCountAggregateOutputType | null
    _avg: GuaDataAvgAggregateOutputType | null
    _sum: GuaDataSumAggregateOutputType | null
    _min: GuaDataMinAggregateOutputType | null
    _max: GuaDataMaxAggregateOutputType | null
  }

  export type GuaDataAvgAggregateOutputType = {
    id: number | null
  }

  export type GuaDataSumAggregateOutputType = {
    id: number | null
  }

  export type GuaDataMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    fullName: string | null
    summary: string | null
    guaci: string | null
    yaoci: string | null
    interpretation: string | null
  }

  export type GuaDataMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    fullName: string | null
    summary: string | null
    guaci: string | null
    yaoci: string | null
    interpretation: string | null
  }

  export type GuaDataCountAggregateOutputType = {
    id: number
    code: number
    name: number
    fullName: number
    summary: number
    guaci: number
    yaoci: number
    interpretation: number
    _all: number
  }


  export type GuaDataAvgAggregateInputType = {
    id?: true
  }

  export type GuaDataSumAggregateInputType = {
    id?: true
  }

  export type GuaDataMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    fullName?: true
    summary?: true
    guaci?: true
    yaoci?: true
    interpretation?: true
  }

  export type GuaDataMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    fullName?: true
    summary?: true
    guaci?: true
    yaoci?: true
    interpretation?: true
  }

  export type GuaDataCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    fullName?: true
    summary?: true
    guaci?: true
    yaoci?: true
    interpretation?: true
    _all?: true
  }

  export type GuaDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuaData to aggregate.
     */
    where?: GuaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuaData to fetch.
     */
    orderBy?: GuaDataOrderByWithRelationInput | GuaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuaData
    **/
    _count?: true | GuaDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuaDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuaDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuaDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuaDataMaxAggregateInputType
  }

  export type GetGuaDataAggregateType<T extends GuaDataAggregateArgs> = {
        [P in keyof T & keyof AggregateGuaData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuaData[P]>
      : GetScalarType<T[P], AggregateGuaData[P]>
  }




  export type GuaDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuaDataWhereInput
    orderBy?: GuaDataOrderByWithAggregationInput | GuaDataOrderByWithAggregationInput[]
    by: GuaDataScalarFieldEnum[] | GuaDataScalarFieldEnum
    having?: GuaDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuaDataCountAggregateInputType | true
    _avg?: GuaDataAvgAggregateInputType
    _sum?: GuaDataSumAggregateInputType
    _min?: GuaDataMinAggregateInputType
    _max?: GuaDataMaxAggregateInputType
  }

  export type GuaDataGroupByOutputType = {
    id: number
    code: string
    name: string
    fullName: string
    summary: string | null
    guaci: string | null
    yaoci: string | null
    interpretation: string | null
    _count: GuaDataCountAggregateOutputType | null
    _avg: GuaDataAvgAggregateOutputType | null
    _sum: GuaDataSumAggregateOutputType | null
    _min: GuaDataMinAggregateOutputType | null
    _max: GuaDataMaxAggregateOutputType | null
  }

  type GetGuaDataGroupByPayload<T extends GuaDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuaDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuaDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuaDataGroupByOutputType[P]>
            : GetScalarType<T[P], GuaDataGroupByOutputType[P]>
        }
      >
    >


  export type GuaDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    fullName?: boolean
    summary?: boolean
    guaci?: boolean
    yaoci?: boolean
    interpretation?: boolean
  }, ExtArgs["result"]["guaData"]>

  export type GuaDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    fullName?: boolean
    summary?: boolean
    guaci?: boolean
    yaoci?: boolean
    interpretation?: boolean
  }, ExtArgs["result"]["guaData"]>

  export type GuaDataSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    fullName?: boolean
    summary?: boolean
    guaci?: boolean
    yaoci?: boolean
    interpretation?: boolean
  }


  export type $GuaDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuaData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      fullName: string
      summary: string | null
      guaci: string | null
      yaoci: string | null
      interpretation: string | null
    }, ExtArgs["result"]["guaData"]>
    composites: {}
  }

  type GuaDataGetPayload<S extends boolean | null | undefined | GuaDataDefaultArgs> = $Result.GetResult<Prisma.$GuaDataPayload, S>

  type GuaDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GuaDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GuaDataCountAggregateInputType | true
    }

  export interface GuaDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuaData'], meta: { name: 'GuaData' } }
    /**
     * Find zero or one GuaData that matches the filter.
     * @param {GuaDataFindUniqueArgs} args - Arguments to find a GuaData
     * @example
     * // Get one GuaData
     * const guaData = await prisma.guaData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuaDataFindUniqueArgs>(args: SelectSubset<T, GuaDataFindUniqueArgs<ExtArgs>>): Prisma__GuaDataClient<$Result.GetResult<Prisma.$GuaDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GuaData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GuaDataFindUniqueOrThrowArgs} args - Arguments to find a GuaData
     * @example
     * // Get one GuaData
     * const guaData = await prisma.guaData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuaDataFindUniqueOrThrowArgs>(args: SelectSubset<T, GuaDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuaDataClient<$Result.GetResult<Prisma.$GuaDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GuaData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuaDataFindFirstArgs} args - Arguments to find a GuaData
     * @example
     * // Get one GuaData
     * const guaData = await prisma.guaData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuaDataFindFirstArgs>(args?: SelectSubset<T, GuaDataFindFirstArgs<ExtArgs>>): Prisma__GuaDataClient<$Result.GetResult<Prisma.$GuaDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GuaData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuaDataFindFirstOrThrowArgs} args - Arguments to find a GuaData
     * @example
     * // Get one GuaData
     * const guaData = await prisma.guaData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuaDataFindFirstOrThrowArgs>(args?: SelectSubset<T, GuaDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuaDataClient<$Result.GetResult<Prisma.$GuaDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GuaData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuaDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuaData
     * const guaData = await prisma.guaData.findMany()
     * 
     * // Get first 10 GuaData
     * const guaData = await prisma.guaData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guaDataWithIdOnly = await prisma.guaData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuaDataFindManyArgs>(args?: SelectSubset<T, GuaDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuaDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GuaData.
     * @param {GuaDataCreateArgs} args - Arguments to create a GuaData.
     * @example
     * // Create one GuaData
     * const GuaData = await prisma.guaData.create({
     *   data: {
     *     // ... data to create a GuaData
     *   }
     * })
     * 
     */
    create<T extends GuaDataCreateArgs>(args: SelectSubset<T, GuaDataCreateArgs<ExtArgs>>): Prisma__GuaDataClient<$Result.GetResult<Prisma.$GuaDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GuaData.
     * @param {GuaDataCreateManyArgs} args - Arguments to create many GuaData.
     * @example
     * // Create many GuaData
     * const guaData = await prisma.guaData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuaDataCreateManyArgs>(args?: SelectSubset<T, GuaDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuaData and returns the data saved in the database.
     * @param {GuaDataCreateManyAndReturnArgs} args - Arguments to create many GuaData.
     * @example
     * // Create many GuaData
     * const guaData = await prisma.guaData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuaData and only return the `id`
     * const guaDataWithIdOnly = await prisma.guaData.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuaDataCreateManyAndReturnArgs>(args?: SelectSubset<T, GuaDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuaDataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GuaData.
     * @param {GuaDataDeleteArgs} args - Arguments to delete one GuaData.
     * @example
     * // Delete one GuaData
     * const GuaData = await prisma.guaData.delete({
     *   where: {
     *     // ... filter to delete one GuaData
     *   }
     * })
     * 
     */
    delete<T extends GuaDataDeleteArgs>(args: SelectSubset<T, GuaDataDeleteArgs<ExtArgs>>): Prisma__GuaDataClient<$Result.GetResult<Prisma.$GuaDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GuaData.
     * @param {GuaDataUpdateArgs} args - Arguments to update one GuaData.
     * @example
     * // Update one GuaData
     * const guaData = await prisma.guaData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuaDataUpdateArgs>(args: SelectSubset<T, GuaDataUpdateArgs<ExtArgs>>): Prisma__GuaDataClient<$Result.GetResult<Prisma.$GuaDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GuaData.
     * @param {GuaDataDeleteManyArgs} args - Arguments to filter GuaData to delete.
     * @example
     * // Delete a few GuaData
     * const { count } = await prisma.guaData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuaDataDeleteManyArgs>(args?: SelectSubset<T, GuaDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuaDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuaData
     * const guaData = await prisma.guaData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuaDataUpdateManyArgs>(args: SelectSubset<T, GuaDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GuaData.
     * @param {GuaDataUpsertArgs} args - Arguments to update or create a GuaData.
     * @example
     * // Update or create a GuaData
     * const guaData = await prisma.guaData.upsert({
     *   create: {
     *     // ... data to create a GuaData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuaData we want to update
     *   }
     * })
     */
    upsert<T extends GuaDataUpsertArgs>(args: SelectSubset<T, GuaDataUpsertArgs<ExtArgs>>): Prisma__GuaDataClient<$Result.GetResult<Prisma.$GuaDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GuaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuaDataCountArgs} args - Arguments to filter GuaData to count.
     * @example
     * // Count the number of GuaData
     * const count = await prisma.guaData.count({
     *   where: {
     *     // ... the filter for the GuaData we want to count
     *   }
     * })
    **/
    count<T extends GuaDataCountArgs>(
      args?: Subset<T, GuaDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuaDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuaDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuaDataAggregateArgs>(args: Subset<T, GuaDataAggregateArgs>): Prisma.PrismaPromise<GetGuaDataAggregateType<T>>

    /**
     * Group by GuaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuaDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuaDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuaDataGroupByArgs['orderBy'] }
        : { orderBy?: GuaDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuaDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuaDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuaData model
   */
  readonly fields: GuaDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuaData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuaDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuaData model
   */ 
  interface GuaDataFieldRefs {
    readonly id: FieldRef<"GuaData", 'Int'>
    readonly code: FieldRef<"GuaData", 'String'>
    readonly name: FieldRef<"GuaData", 'String'>
    readonly fullName: FieldRef<"GuaData", 'String'>
    readonly summary: FieldRef<"GuaData", 'String'>
    readonly guaci: FieldRef<"GuaData", 'String'>
    readonly yaoci: FieldRef<"GuaData", 'String'>
    readonly interpretation: FieldRef<"GuaData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuaData findUnique
   */
  export type GuaDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelect<ExtArgs> | null
    /**
     * Filter, which GuaData to fetch.
     */
    where: GuaDataWhereUniqueInput
  }

  /**
   * GuaData findUniqueOrThrow
   */
  export type GuaDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelect<ExtArgs> | null
    /**
     * Filter, which GuaData to fetch.
     */
    where: GuaDataWhereUniqueInput
  }

  /**
   * GuaData findFirst
   */
  export type GuaDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelect<ExtArgs> | null
    /**
     * Filter, which GuaData to fetch.
     */
    where?: GuaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuaData to fetch.
     */
    orderBy?: GuaDataOrderByWithRelationInput | GuaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuaData.
     */
    cursor?: GuaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuaData.
     */
    distinct?: GuaDataScalarFieldEnum | GuaDataScalarFieldEnum[]
  }

  /**
   * GuaData findFirstOrThrow
   */
  export type GuaDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelect<ExtArgs> | null
    /**
     * Filter, which GuaData to fetch.
     */
    where?: GuaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuaData to fetch.
     */
    orderBy?: GuaDataOrderByWithRelationInput | GuaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuaData.
     */
    cursor?: GuaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuaData.
     */
    distinct?: GuaDataScalarFieldEnum | GuaDataScalarFieldEnum[]
  }

  /**
   * GuaData findMany
   */
  export type GuaDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelect<ExtArgs> | null
    /**
     * Filter, which GuaData to fetch.
     */
    where?: GuaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuaData to fetch.
     */
    orderBy?: GuaDataOrderByWithRelationInput | GuaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuaData.
     */
    cursor?: GuaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuaData.
     */
    skip?: number
    distinct?: GuaDataScalarFieldEnum | GuaDataScalarFieldEnum[]
  }

  /**
   * GuaData create
   */
  export type GuaDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelect<ExtArgs> | null
    /**
     * The data needed to create a GuaData.
     */
    data: XOR<GuaDataCreateInput, GuaDataUncheckedCreateInput>
  }

  /**
   * GuaData createMany
   */
  export type GuaDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuaData.
     */
    data: GuaDataCreateManyInput | GuaDataCreateManyInput[]
  }

  /**
   * GuaData createManyAndReturn
   */
  export type GuaDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GuaData.
     */
    data: GuaDataCreateManyInput | GuaDataCreateManyInput[]
  }

  /**
   * GuaData update
   */
  export type GuaDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelect<ExtArgs> | null
    /**
     * The data needed to update a GuaData.
     */
    data: XOR<GuaDataUpdateInput, GuaDataUncheckedUpdateInput>
    /**
     * Choose, which GuaData to update.
     */
    where: GuaDataWhereUniqueInput
  }

  /**
   * GuaData updateMany
   */
  export type GuaDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuaData.
     */
    data: XOR<GuaDataUpdateManyMutationInput, GuaDataUncheckedUpdateManyInput>
    /**
     * Filter which GuaData to update
     */
    where?: GuaDataWhereInput
  }

  /**
   * GuaData upsert
   */
  export type GuaDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelect<ExtArgs> | null
    /**
     * The filter to search for the GuaData to update in case it exists.
     */
    where: GuaDataWhereUniqueInput
    /**
     * In case the GuaData found by the `where` argument doesn't exist, create a new GuaData with this data.
     */
    create: XOR<GuaDataCreateInput, GuaDataUncheckedCreateInput>
    /**
     * In case the GuaData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuaDataUpdateInput, GuaDataUncheckedUpdateInput>
  }

  /**
   * GuaData delete
   */
  export type GuaDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelect<ExtArgs> | null
    /**
     * Filter which GuaData to delete.
     */
    where: GuaDataWhereUniqueInput
  }

  /**
   * GuaData deleteMany
   */
  export type GuaDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuaData to delete
     */
    where?: GuaDataWhereInput
  }

  /**
   * GuaData without action
   */
  export type GuaDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuaData
     */
    select?: GuaDataSelect<ExtArgs> | null
  }


  /**
   * Model CharacterData
   */

  export type AggregateCharacterData = {
    _count: CharacterDataCountAggregateOutputType | null
    _avg: CharacterDataAvgAggregateOutputType | null
    _sum: CharacterDataSumAggregateOutputType | null
    _min: CharacterDataMinAggregateOutputType | null
    _max: CharacterDataMaxAggregateOutputType | null
  }

  export type CharacterDataAvgAggregateOutputType = {
    id: number | null
    stroke: number | null
    kangxiStroke: number | null
  }

  export type CharacterDataSumAggregateOutputType = {
    id: number | null
    stroke: number | null
    kangxiStroke: number | null
  }

  export type CharacterDataMinAggregateOutputType = {
    id: number | null
    char: string | null
    stroke: number | null
    pinyin: string | null
    wuxing: string | null
    kangxiStroke: number | null
  }

  export type CharacterDataMaxAggregateOutputType = {
    id: number | null
    char: string | null
    stroke: number | null
    pinyin: string | null
    wuxing: string | null
    kangxiStroke: number | null
  }

  export type CharacterDataCountAggregateOutputType = {
    id: number
    char: number
    stroke: number
    pinyin: number
    wuxing: number
    kangxiStroke: number
    _all: number
  }


  export type CharacterDataAvgAggregateInputType = {
    id?: true
    stroke?: true
    kangxiStroke?: true
  }

  export type CharacterDataSumAggregateInputType = {
    id?: true
    stroke?: true
    kangxiStroke?: true
  }

  export type CharacterDataMinAggregateInputType = {
    id?: true
    char?: true
    stroke?: true
    pinyin?: true
    wuxing?: true
    kangxiStroke?: true
  }

  export type CharacterDataMaxAggregateInputType = {
    id?: true
    char?: true
    stroke?: true
    pinyin?: true
    wuxing?: true
    kangxiStroke?: true
  }

  export type CharacterDataCountAggregateInputType = {
    id?: true
    char?: true
    stroke?: true
    pinyin?: true
    wuxing?: true
    kangxiStroke?: true
    _all?: true
  }

  export type CharacterDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterData to aggregate.
     */
    where?: CharacterDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterData to fetch.
     */
    orderBy?: CharacterDataOrderByWithRelationInput | CharacterDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterData
    **/
    _count?: true | CharacterDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterDataMaxAggregateInputType
  }

  export type GetCharacterDataAggregateType<T extends CharacterDataAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterData[P]>
      : GetScalarType<T[P], AggregateCharacterData[P]>
  }




  export type CharacterDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterDataWhereInput
    orderBy?: CharacterDataOrderByWithAggregationInput | CharacterDataOrderByWithAggregationInput[]
    by: CharacterDataScalarFieldEnum[] | CharacterDataScalarFieldEnum
    having?: CharacterDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterDataCountAggregateInputType | true
    _avg?: CharacterDataAvgAggregateInputType
    _sum?: CharacterDataSumAggregateInputType
    _min?: CharacterDataMinAggregateInputType
    _max?: CharacterDataMaxAggregateInputType
  }

  export type CharacterDataGroupByOutputType = {
    id: number
    char: string
    stroke: number
    pinyin: string | null
    wuxing: string | null
    kangxiStroke: number | null
    _count: CharacterDataCountAggregateOutputType | null
    _avg: CharacterDataAvgAggregateOutputType | null
    _sum: CharacterDataSumAggregateOutputType | null
    _min: CharacterDataMinAggregateOutputType | null
    _max: CharacterDataMaxAggregateOutputType | null
  }

  type GetCharacterDataGroupByPayload<T extends CharacterDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterDataGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterDataGroupByOutputType[P]>
        }
      >
    >


  export type CharacterDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    char?: boolean
    stroke?: boolean
    pinyin?: boolean
    wuxing?: boolean
    kangxiStroke?: boolean
  }, ExtArgs["result"]["characterData"]>

  export type CharacterDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    char?: boolean
    stroke?: boolean
    pinyin?: boolean
    wuxing?: boolean
    kangxiStroke?: boolean
  }, ExtArgs["result"]["characterData"]>

  export type CharacterDataSelectScalar = {
    id?: boolean
    char?: boolean
    stroke?: boolean
    pinyin?: boolean
    wuxing?: boolean
    kangxiStroke?: boolean
  }


  export type $CharacterDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      char: string
      stroke: number
      pinyin: string | null
      wuxing: string | null
      kangxiStroke: number | null
    }, ExtArgs["result"]["characterData"]>
    composites: {}
  }

  type CharacterDataGetPayload<S extends boolean | null | undefined | CharacterDataDefaultArgs> = $Result.GetResult<Prisma.$CharacterDataPayload, S>

  type CharacterDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterDataCountAggregateInputType | true
    }

  export interface CharacterDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterData'], meta: { name: 'CharacterData' } }
    /**
     * Find zero or one CharacterData that matches the filter.
     * @param {CharacterDataFindUniqueArgs} args - Arguments to find a CharacterData
     * @example
     * // Get one CharacterData
     * const characterData = await prisma.characterData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterDataFindUniqueArgs>(args: SelectSubset<T, CharacterDataFindUniqueArgs<ExtArgs>>): Prisma__CharacterDataClient<$Result.GetResult<Prisma.$CharacterDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CharacterData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterDataFindUniqueOrThrowArgs} args - Arguments to find a CharacterData
     * @example
     * // Get one CharacterData
     * const characterData = await prisma.characterData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterDataFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterDataClient<$Result.GetResult<Prisma.$CharacterDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CharacterData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterDataFindFirstArgs} args - Arguments to find a CharacterData
     * @example
     * // Get one CharacterData
     * const characterData = await prisma.characterData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterDataFindFirstArgs>(args?: SelectSubset<T, CharacterDataFindFirstArgs<ExtArgs>>): Prisma__CharacterDataClient<$Result.GetResult<Prisma.$CharacterDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CharacterData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterDataFindFirstOrThrowArgs} args - Arguments to find a CharacterData
     * @example
     * // Get one CharacterData
     * const characterData = await prisma.characterData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterDataFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterDataClient<$Result.GetResult<Prisma.$CharacterDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CharacterData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterData
     * const characterData = await prisma.characterData.findMany()
     * 
     * // Get first 10 CharacterData
     * const characterData = await prisma.characterData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterDataWithIdOnly = await prisma.characterData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterDataFindManyArgs>(args?: SelectSubset<T, CharacterDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CharacterData.
     * @param {CharacterDataCreateArgs} args - Arguments to create a CharacterData.
     * @example
     * // Create one CharacterData
     * const CharacterData = await prisma.characterData.create({
     *   data: {
     *     // ... data to create a CharacterData
     *   }
     * })
     * 
     */
    create<T extends CharacterDataCreateArgs>(args: SelectSubset<T, CharacterDataCreateArgs<ExtArgs>>): Prisma__CharacterDataClient<$Result.GetResult<Prisma.$CharacterDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CharacterData.
     * @param {CharacterDataCreateManyArgs} args - Arguments to create many CharacterData.
     * @example
     * // Create many CharacterData
     * const characterData = await prisma.characterData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterDataCreateManyArgs>(args?: SelectSubset<T, CharacterDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CharacterData and returns the data saved in the database.
     * @param {CharacterDataCreateManyAndReturnArgs} args - Arguments to create many CharacterData.
     * @example
     * // Create many CharacterData
     * const characterData = await prisma.characterData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CharacterData and only return the `id`
     * const characterDataWithIdOnly = await prisma.characterData.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterDataCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterDataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CharacterData.
     * @param {CharacterDataDeleteArgs} args - Arguments to delete one CharacterData.
     * @example
     * // Delete one CharacterData
     * const CharacterData = await prisma.characterData.delete({
     *   where: {
     *     // ... filter to delete one CharacterData
     *   }
     * })
     * 
     */
    delete<T extends CharacterDataDeleteArgs>(args: SelectSubset<T, CharacterDataDeleteArgs<ExtArgs>>): Prisma__CharacterDataClient<$Result.GetResult<Prisma.$CharacterDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CharacterData.
     * @param {CharacterDataUpdateArgs} args - Arguments to update one CharacterData.
     * @example
     * // Update one CharacterData
     * const characterData = await prisma.characterData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterDataUpdateArgs>(args: SelectSubset<T, CharacterDataUpdateArgs<ExtArgs>>): Prisma__CharacterDataClient<$Result.GetResult<Prisma.$CharacterDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CharacterData.
     * @param {CharacterDataDeleteManyArgs} args - Arguments to filter CharacterData to delete.
     * @example
     * // Delete a few CharacterData
     * const { count } = await prisma.characterData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDataDeleteManyArgs>(args?: SelectSubset<T, CharacterDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterData
     * const characterData = await prisma.characterData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterDataUpdateManyArgs>(args: SelectSubset<T, CharacterDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharacterData.
     * @param {CharacterDataUpsertArgs} args - Arguments to update or create a CharacterData.
     * @example
     * // Update or create a CharacterData
     * const characterData = await prisma.characterData.upsert({
     *   create: {
     *     // ... data to create a CharacterData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterData we want to update
     *   }
     * })
     */
    upsert<T extends CharacterDataUpsertArgs>(args: SelectSubset<T, CharacterDataUpsertArgs<ExtArgs>>): Prisma__CharacterDataClient<$Result.GetResult<Prisma.$CharacterDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CharacterData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterDataCountArgs} args - Arguments to filter CharacterData to count.
     * @example
     * // Count the number of CharacterData
     * const count = await prisma.characterData.count({
     *   where: {
     *     // ... the filter for the CharacterData we want to count
     *   }
     * })
    **/
    count<T extends CharacterDataCountArgs>(
      args?: Subset<T, CharacterDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterDataAggregateArgs>(args: Subset<T, CharacterDataAggregateArgs>): Prisma.PrismaPromise<GetCharacterDataAggregateType<T>>

    /**
     * Group by CharacterData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterDataGroupByArgs['orderBy'] }
        : { orderBy?: CharacterDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterData model
   */
  readonly fields: CharacterDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CharacterData model
   */ 
  interface CharacterDataFieldRefs {
    readonly id: FieldRef<"CharacterData", 'Int'>
    readonly char: FieldRef<"CharacterData", 'String'>
    readonly stroke: FieldRef<"CharacterData", 'Int'>
    readonly pinyin: FieldRef<"CharacterData", 'String'>
    readonly wuxing: FieldRef<"CharacterData", 'String'>
    readonly kangxiStroke: FieldRef<"CharacterData", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CharacterData findUnique
   */
  export type CharacterDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelect<ExtArgs> | null
    /**
     * Filter, which CharacterData to fetch.
     */
    where: CharacterDataWhereUniqueInput
  }

  /**
   * CharacterData findUniqueOrThrow
   */
  export type CharacterDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelect<ExtArgs> | null
    /**
     * Filter, which CharacterData to fetch.
     */
    where: CharacterDataWhereUniqueInput
  }

  /**
   * CharacterData findFirst
   */
  export type CharacterDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelect<ExtArgs> | null
    /**
     * Filter, which CharacterData to fetch.
     */
    where?: CharacterDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterData to fetch.
     */
    orderBy?: CharacterDataOrderByWithRelationInput | CharacterDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterData.
     */
    cursor?: CharacterDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterData.
     */
    distinct?: CharacterDataScalarFieldEnum | CharacterDataScalarFieldEnum[]
  }

  /**
   * CharacterData findFirstOrThrow
   */
  export type CharacterDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelect<ExtArgs> | null
    /**
     * Filter, which CharacterData to fetch.
     */
    where?: CharacterDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterData to fetch.
     */
    orderBy?: CharacterDataOrderByWithRelationInput | CharacterDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterData.
     */
    cursor?: CharacterDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterData.
     */
    distinct?: CharacterDataScalarFieldEnum | CharacterDataScalarFieldEnum[]
  }

  /**
   * CharacterData findMany
   */
  export type CharacterDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelect<ExtArgs> | null
    /**
     * Filter, which CharacterData to fetch.
     */
    where?: CharacterDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterData to fetch.
     */
    orderBy?: CharacterDataOrderByWithRelationInput | CharacterDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterData.
     */
    cursor?: CharacterDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterData.
     */
    skip?: number
    distinct?: CharacterDataScalarFieldEnum | CharacterDataScalarFieldEnum[]
  }

  /**
   * CharacterData create
   */
  export type CharacterDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelect<ExtArgs> | null
    /**
     * The data needed to create a CharacterData.
     */
    data: XOR<CharacterDataCreateInput, CharacterDataUncheckedCreateInput>
  }

  /**
   * CharacterData createMany
   */
  export type CharacterDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterData.
     */
    data: CharacterDataCreateManyInput | CharacterDataCreateManyInput[]
  }

  /**
   * CharacterData createManyAndReturn
   */
  export type CharacterDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CharacterData.
     */
    data: CharacterDataCreateManyInput | CharacterDataCreateManyInput[]
  }

  /**
   * CharacterData update
   */
  export type CharacterDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelect<ExtArgs> | null
    /**
     * The data needed to update a CharacterData.
     */
    data: XOR<CharacterDataUpdateInput, CharacterDataUncheckedUpdateInput>
    /**
     * Choose, which CharacterData to update.
     */
    where: CharacterDataWhereUniqueInput
  }

  /**
   * CharacterData updateMany
   */
  export type CharacterDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterData.
     */
    data: XOR<CharacterDataUpdateManyMutationInput, CharacterDataUncheckedUpdateManyInput>
    /**
     * Filter which CharacterData to update
     */
    where?: CharacterDataWhereInput
  }

  /**
   * CharacterData upsert
   */
  export type CharacterDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelect<ExtArgs> | null
    /**
     * The filter to search for the CharacterData to update in case it exists.
     */
    where: CharacterDataWhereUniqueInput
    /**
     * In case the CharacterData found by the `where` argument doesn't exist, create a new CharacterData with this data.
     */
    create: XOR<CharacterDataCreateInput, CharacterDataUncheckedCreateInput>
    /**
     * In case the CharacterData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterDataUpdateInput, CharacterDataUncheckedUpdateInput>
  }

  /**
   * CharacterData delete
   */
  export type CharacterDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelect<ExtArgs> | null
    /**
     * Filter which CharacterData to delete.
     */
    where: CharacterDataWhereUniqueInput
  }

  /**
   * CharacterData deleteMany
   */
  export type CharacterDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterData to delete
     */
    where?: CharacterDataWhereInput
  }

  /**
   * CharacterData without action
   */
  export type CharacterDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterData
     */
    select?: CharacterDataSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    avatar: 'avatar',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenBalanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balance: 'balance',
    totalPurchased: 'totalPurchased',
    updatedAt: 'updatedAt'
  };

  export type TokenBalanceScalarFieldEnum = (typeof TokenBalanceScalarFieldEnum)[keyof typeof TokenBalanceScalarFieldEnum]


  export const TokenUsageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    tokens: 'tokens',
    cost: 'cost',
    isPaid: 'isPaid',
    createdAt: 'createdAt'
  };

  export type TokenUsageScalarFieldEnum = (typeof TokenUsageScalarFieldEnum)[keyof typeof TokenUsageScalarFieldEnum]


  export const DivinationRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    inputData: 'inputData',
    result: 'result',
    detailResult: 'detailResult',
    isPaid: 'isPaid',
    cost: 'cost',
    createdAt: 'createdAt'
  };

  export type DivinationRecordScalarFieldEnum = (typeof DivinationRecordScalarFieldEnum)[keyof typeof DivinationRecordScalarFieldEnum]


  export const GuaDataScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    fullName: 'fullName',
    summary: 'summary',
    guaci: 'guaci',
    yaoci: 'yaoci',
    interpretation: 'interpretation'
  };

  export type GuaDataScalarFieldEnum = (typeof GuaDataScalarFieldEnum)[keyof typeof GuaDataScalarFieldEnum]


  export const CharacterDataScalarFieldEnum: {
    id: 'id',
    char: 'char',
    stroke: 'stroke',
    pinyin: 'pinyin',
    wuxing: 'wuxing',
    kangxiStroke: 'kangxiStroke'
  };

  export type CharacterDataScalarFieldEnum = (typeof CharacterDataScalarFieldEnum)[keyof typeof CharacterDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    language?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    divinationRecords?: DivinationRecordListRelationFilter
    tokenBalance?: XOR<TokenBalanceNullableRelationFilter, TokenBalanceWhereInput> | null
    tokenUsage?: TokenUsageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    divinationRecords?: DivinationRecordOrderByRelationAggregateInput
    tokenBalance?: TokenBalanceOrderByWithRelationInput
    tokenUsage?: TokenUsageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    language?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    divinationRecords?: DivinationRecordListRelationFilter
    tokenBalance?: XOR<TokenBalanceNullableRelationFilter, TokenBalanceWhereInput> | null
    tokenUsage?: TokenUsageListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    language?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TokenBalanceWhereInput = {
    AND?: TokenBalanceWhereInput | TokenBalanceWhereInput[]
    OR?: TokenBalanceWhereInput[]
    NOT?: TokenBalanceWhereInput | TokenBalanceWhereInput[]
    id?: IntFilter<"TokenBalance"> | number
    userId?: IntFilter<"TokenBalance"> | number
    balance?: IntFilter<"TokenBalance"> | number
    totalPurchased?: IntFilter<"TokenBalance"> | number
    updatedAt?: DateTimeFilter<"TokenBalance"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TokenBalanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalPurchased?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TokenBalanceWhereInput | TokenBalanceWhereInput[]
    OR?: TokenBalanceWhereInput[]
    NOT?: TokenBalanceWhereInput | TokenBalanceWhereInput[]
    balance?: IntFilter<"TokenBalance"> | number
    totalPurchased?: IntFilter<"TokenBalance"> | number
    updatedAt?: DateTimeFilter<"TokenBalance"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TokenBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalPurchased?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenBalanceCountOrderByAggregateInput
    _avg?: TokenBalanceAvgOrderByAggregateInput
    _max?: TokenBalanceMaxOrderByAggregateInput
    _min?: TokenBalanceMinOrderByAggregateInput
    _sum?: TokenBalanceSumOrderByAggregateInput
  }

  export type TokenBalanceScalarWhereWithAggregatesInput = {
    AND?: TokenBalanceScalarWhereWithAggregatesInput | TokenBalanceScalarWhereWithAggregatesInput[]
    OR?: TokenBalanceScalarWhereWithAggregatesInput[]
    NOT?: TokenBalanceScalarWhereWithAggregatesInput | TokenBalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TokenBalance"> | number
    userId?: IntWithAggregatesFilter<"TokenBalance"> | number
    balance?: IntWithAggregatesFilter<"TokenBalance"> | number
    totalPurchased?: IntWithAggregatesFilter<"TokenBalance"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"TokenBalance"> | Date | string
  }

  export type TokenUsageWhereInput = {
    AND?: TokenUsageWhereInput | TokenUsageWhereInput[]
    OR?: TokenUsageWhereInput[]
    NOT?: TokenUsageWhereInput | TokenUsageWhereInput[]
    id?: IntFilter<"TokenUsage"> | number
    userId?: IntFilter<"TokenUsage"> | number
    type?: StringFilter<"TokenUsage"> | string
    tokens?: IntFilter<"TokenUsage"> | number
    cost?: IntFilter<"TokenUsage"> | number
    isPaid?: BoolFilter<"TokenUsage"> | boolean
    createdAt?: DateTimeFilter<"TokenUsage"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TokenUsageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokenUsageWhereInput | TokenUsageWhereInput[]
    OR?: TokenUsageWhereInput[]
    NOT?: TokenUsageWhereInput | TokenUsageWhereInput[]
    userId?: IntFilter<"TokenUsage"> | number
    type?: StringFilter<"TokenUsage"> | string
    tokens?: IntFilter<"TokenUsage"> | number
    cost?: IntFilter<"TokenUsage"> | number
    isPaid?: BoolFilter<"TokenUsage"> | boolean
    createdAt?: DateTimeFilter<"TokenUsage"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TokenUsageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    _count?: TokenUsageCountOrderByAggregateInput
    _avg?: TokenUsageAvgOrderByAggregateInput
    _max?: TokenUsageMaxOrderByAggregateInput
    _min?: TokenUsageMinOrderByAggregateInput
    _sum?: TokenUsageSumOrderByAggregateInput
  }

  export type TokenUsageScalarWhereWithAggregatesInput = {
    AND?: TokenUsageScalarWhereWithAggregatesInput | TokenUsageScalarWhereWithAggregatesInput[]
    OR?: TokenUsageScalarWhereWithAggregatesInput[]
    NOT?: TokenUsageScalarWhereWithAggregatesInput | TokenUsageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TokenUsage"> | number
    userId?: IntWithAggregatesFilter<"TokenUsage"> | number
    type?: StringWithAggregatesFilter<"TokenUsage"> | string
    tokens?: IntWithAggregatesFilter<"TokenUsage"> | number
    cost?: IntWithAggregatesFilter<"TokenUsage"> | number
    isPaid?: BoolWithAggregatesFilter<"TokenUsage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TokenUsage"> | Date | string
  }

  export type DivinationRecordWhereInput = {
    AND?: DivinationRecordWhereInput | DivinationRecordWhereInput[]
    OR?: DivinationRecordWhereInput[]
    NOT?: DivinationRecordWhereInput | DivinationRecordWhereInput[]
    id?: IntFilter<"DivinationRecord"> | number
    userId?: IntFilter<"DivinationRecord"> | number
    type?: StringFilter<"DivinationRecord"> | string
    inputData?: StringFilter<"DivinationRecord"> | string
    result?: StringFilter<"DivinationRecord"> | string
    detailResult?: StringNullableFilter<"DivinationRecord"> | string | null
    isPaid?: BoolFilter<"DivinationRecord"> | boolean
    cost?: IntFilter<"DivinationRecord"> | number
    createdAt?: DateTimeFilter<"DivinationRecord"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DivinationRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    inputData?: SortOrder
    result?: SortOrder
    detailResult?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DivinationRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DivinationRecordWhereInput | DivinationRecordWhereInput[]
    OR?: DivinationRecordWhereInput[]
    NOT?: DivinationRecordWhereInput | DivinationRecordWhereInput[]
    userId?: IntFilter<"DivinationRecord"> | number
    type?: StringFilter<"DivinationRecord"> | string
    inputData?: StringFilter<"DivinationRecord"> | string
    result?: StringFilter<"DivinationRecord"> | string
    detailResult?: StringNullableFilter<"DivinationRecord"> | string | null
    isPaid?: BoolFilter<"DivinationRecord"> | boolean
    cost?: IntFilter<"DivinationRecord"> | number
    createdAt?: DateTimeFilter<"DivinationRecord"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DivinationRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    inputData?: SortOrder
    result?: SortOrder
    detailResult?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
    _count?: DivinationRecordCountOrderByAggregateInput
    _avg?: DivinationRecordAvgOrderByAggregateInput
    _max?: DivinationRecordMaxOrderByAggregateInput
    _min?: DivinationRecordMinOrderByAggregateInput
    _sum?: DivinationRecordSumOrderByAggregateInput
  }

  export type DivinationRecordScalarWhereWithAggregatesInput = {
    AND?: DivinationRecordScalarWhereWithAggregatesInput | DivinationRecordScalarWhereWithAggregatesInput[]
    OR?: DivinationRecordScalarWhereWithAggregatesInput[]
    NOT?: DivinationRecordScalarWhereWithAggregatesInput | DivinationRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DivinationRecord"> | number
    userId?: IntWithAggregatesFilter<"DivinationRecord"> | number
    type?: StringWithAggregatesFilter<"DivinationRecord"> | string
    inputData?: StringWithAggregatesFilter<"DivinationRecord"> | string
    result?: StringWithAggregatesFilter<"DivinationRecord"> | string
    detailResult?: StringNullableWithAggregatesFilter<"DivinationRecord"> | string | null
    isPaid?: BoolWithAggregatesFilter<"DivinationRecord"> | boolean
    cost?: IntWithAggregatesFilter<"DivinationRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DivinationRecord"> | Date | string
  }

  export type GuaDataWhereInput = {
    AND?: GuaDataWhereInput | GuaDataWhereInput[]
    OR?: GuaDataWhereInput[]
    NOT?: GuaDataWhereInput | GuaDataWhereInput[]
    id?: IntFilter<"GuaData"> | number
    code?: StringFilter<"GuaData"> | string
    name?: StringFilter<"GuaData"> | string
    fullName?: StringFilter<"GuaData"> | string
    summary?: StringNullableFilter<"GuaData"> | string | null
    guaci?: StringNullableFilter<"GuaData"> | string | null
    yaoci?: StringNullableFilter<"GuaData"> | string | null
    interpretation?: StringNullableFilter<"GuaData"> | string | null
  }

  export type GuaDataOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    summary?: SortOrderInput | SortOrder
    guaci?: SortOrderInput | SortOrder
    yaoci?: SortOrderInput | SortOrder
    interpretation?: SortOrderInput | SortOrder
  }

  export type GuaDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: GuaDataWhereInput | GuaDataWhereInput[]
    OR?: GuaDataWhereInput[]
    NOT?: GuaDataWhereInput | GuaDataWhereInput[]
    name?: StringFilter<"GuaData"> | string
    fullName?: StringFilter<"GuaData"> | string
    summary?: StringNullableFilter<"GuaData"> | string | null
    guaci?: StringNullableFilter<"GuaData"> | string | null
    yaoci?: StringNullableFilter<"GuaData"> | string | null
    interpretation?: StringNullableFilter<"GuaData"> | string | null
  }, "id" | "code">

  export type GuaDataOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    summary?: SortOrderInput | SortOrder
    guaci?: SortOrderInput | SortOrder
    yaoci?: SortOrderInput | SortOrder
    interpretation?: SortOrderInput | SortOrder
    _count?: GuaDataCountOrderByAggregateInput
    _avg?: GuaDataAvgOrderByAggregateInput
    _max?: GuaDataMaxOrderByAggregateInput
    _min?: GuaDataMinOrderByAggregateInput
    _sum?: GuaDataSumOrderByAggregateInput
  }

  export type GuaDataScalarWhereWithAggregatesInput = {
    AND?: GuaDataScalarWhereWithAggregatesInput | GuaDataScalarWhereWithAggregatesInput[]
    OR?: GuaDataScalarWhereWithAggregatesInput[]
    NOT?: GuaDataScalarWhereWithAggregatesInput | GuaDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GuaData"> | number
    code?: StringWithAggregatesFilter<"GuaData"> | string
    name?: StringWithAggregatesFilter<"GuaData"> | string
    fullName?: StringWithAggregatesFilter<"GuaData"> | string
    summary?: StringNullableWithAggregatesFilter<"GuaData"> | string | null
    guaci?: StringNullableWithAggregatesFilter<"GuaData"> | string | null
    yaoci?: StringNullableWithAggregatesFilter<"GuaData"> | string | null
    interpretation?: StringNullableWithAggregatesFilter<"GuaData"> | string | null
  }

  export type CharacterDataWhereInput = {
    AND?: CharacterDataWhereInput | CharacterDataWhereInput[]
    OR?: CharacterDataWhereInput[]
    NOT?: CharacterDataWhereInput | CharacterDataWhereInput[]
    id?: IntFilter<"CharacterData"> | number
    char?: StringFilter<"CharacterData"> | string
    stroke?: IntFilter<"CharacterData"> | number
    pinyin?: StringNullableFilter<"CharacterData"> | string | null
    wuxing?: StringNullableFilter<"CharacterData"> | string | null
    kangxiStroke?: IntNullableFilter<"CharacterData"> | number | null
  }

  export type CharacterDataOrderByWithRelationInput = {
    id?: SortOrder
    char?: SortOrder
    stroke?: SortOrder
    pinyin?: SortOrderInput | SortOrder
    wuxing?: SortOrderInput | SortOrder
    kangxiStroke?: SortOrderInput | SortOrder
  }

  export type CharacterDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    char?: string
    AND?: CharacterDataWhereInput | CharacterDataWhereInput[]
    OR?: CharacterDataWhereInput[]
    NOT?: CharacterDataWhereInput | CharacterDataWhereInput[]
    stroke?: IntFilter<"CharacterData"> | number
    pinyin?: StringNullableFilter<"CharacterData"> | string | null
    wuxing?: StringNullableFilter<"CharacterData"> | string | null
    kangxiStroke?: IntNullableFilter<"CharacterData"> | number | null
  }, "id" | "char">

  export type CharacterDataOrderByWithAggregationInput = {
    id?: SortOrder
    char?: SortOrder
    stroke?: SortOrder
    pinyin?: SortOrderInput | SortOrder
    wuxing?: SortOrderInput | SortOrder
    kangxiStroke?: SortOrderInput | SortOrder
    _count?: CharacterDataCountOrderByAggregateInput
    _avg?: CharacterDataAvgOrderByAggregateInput
    _max?: CharacterDataMaxOrderByAggregateInput
    _min?: CharacterDataMinOrderByAggregateInput
    _sum?: CharacterDataSumOrderByAggregateInput
  }

  export type CharacterDataScalarWhereWithAggregatesInput = {
    AND?: CharacterDataScalarWhereWithAggregatesInput | CharacterDataScalarWhereWithAggregatesInput[]
    OR?: CharacterDataScalarWhereWithAggregatesInput[]
    NOT?: CharacterDataScalarWhereWithAggregatesInput | CharacterDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CharacterData"> | number
    char?: StringWithAggregatesFilter<"CharacterData"> | string
    stroke?: IntWithAggregatesFilter<"CharacterData"> | number
    pinyin?: StringNullableWithAggregatesFilter<"CharacterData"> | string | null
    wuxing?: StringNullableWithAggregatesFilter<"CharacterData"> | string | null
    kangxiStroke?: IntNullableWithAggregatesFilter<"CharacterData"> | number | null
  }

  export type UserCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    password?: string | null
    avatar?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    divinationRecords?: DivinationRecordCreateNestedManyWithoutUserInput
    tokenBalance?: TokenBalanceCreateNestedOneWithoutUserInput
    tokenUsage?: TokenUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    password?: string | null
    avatar?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    divinationRecords?: DivinationRecordUncheckedCreateNestedManyWithoutUserInput
    tokenBalance?: TokenBalanceUncheckedCreateNestedOneWithoutUserInput
    tokenUsage?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    divinationRecords?: DivinationRecordUpdateManyWithoutUserNestedInput
    tokenBalance?: TokenBalanceUpdateOneWithoutUserNestedInput
    tokenUsage?: TokenUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    divinationRecords?: DivinationRecordUncheckedUpdateManyWithoutUserNestedInput
    tokenBalance?: TokenBalanceUncheckedUpdateOneWithoutUserNestedInput
    tokenUsage?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    password?: string | null
    avatar?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenBalanceCreateInput = {
    balance?: number
    totalPurchased?: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTokenBalanceInput
  }

  export type TokenBalanceUncheckedCreateInput = {
    id?: number
    userId: number
    balance?: number
    totalPurchased?: number
    updatedAt?: Date | string
  }

  export type TokenBalanceUpdateInput = {
    balance?: IntFieldUpdateOperationsInput | number
    totalPurchased?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenBalanceNestedInput
  }

  export type TokenBalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    totalPurchased?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenBalanceCreateManyInput = {
    id?: number
    userId: number
    balance?: number
    totalPurchased?: number
    updatedAt?: Date | string
  }

  export type TokenBalanceUpdateManyMutationInput = {
    balance?: IntFieldUpdateOperationsInput | number
    totalPurchased?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenBalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    totalPurchased?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageCreateInput = {
    type: string
    tokens: number
    cost: number
    isPaid?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenUsageInput
  }

  export type TokenUsageUncheckedCreateInput = {
    id?: number
    userId: number
    type: string
    tokens: number
    cost: number
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type TokenUsageUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenUsageNestedInput
  }

  export type TokenUsageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageCreateManyInput = {
    id?: number
    userId: number
    type: string
    tokens: number
    cost: number
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type TokenUsageUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivinationRecordCreateInput = {
    type: string
    inputData: string
    result: string
    detailResult?: string | null
    isPaid?: boolean
    cost?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDivinationRecordsInput
  }

  export type DivinationRecordUncheckedCreateInput = {
    id?: number
    userId: number
    type: string
    inputData: string
    result: string
    detailResult?: string | null
    isPaid?: boolean
    cost?: number
    createdAt?: Date | string
  }

  export type DivinationRecordUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    detailResult?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDivinationRecordsNestedInput
  }

  export type DivinationRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    detailResult?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivinationRecordCreateManyInput = {
    id?: number
    userId: number
    type: string
    inputData: string
    result: string
    detailResult?: string | null
    isPaid?: boolean
    cost?: number
    createdAt?: Date | string
  }

  export type DivinationRecordUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    detailResult?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivinationRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    detailResult?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuaDataCreateInput = {
    code: string
    name: string
    fullName: string
    summary?: string | null
    guaci?: string | null
    yaoci?: string | null
    interpretation?: string | null
  }

  export type GuaDataUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    fullName: string
    summary?: string | null
    guaci?: string | null
    yaoci?: string | null
    interpretation?: string | null
  }

  export type GuaDataUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    guaci?: NullableStringFieldUpdateOperationsInput | string | null
    yaoci?: NullableStringFieldUpdateOperationsInput | string | null
    interpretation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuaDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    guaci?: NullableStringFieldUpdateOperationsInput | string | null
    yaoci?: NullableStringFieldUpdateOperationsInput | string | null
    interpretation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuaDataCreateManyInput = {
    id?: number
    code: string
    name: string
    fullName: string
    summary?: string | null
    guaci?: string | null
    yaoci?: string | null
    interpretation?: string | null
  }

  export type GuaDataUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    guaci?: NullableStringFieldUpdateOperationsInput | string | null
    yaoci?: NullableStringFieldUpdateOperationsInput | string | null
    interpretation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuaDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    guaci?: NullableStringFieldUpdateOperationsInput | string | null
    yaoci?: NullableStringFieldUpdateOperationsInput | string | null
    interpretation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterDataCreateInput = {
    char: string
    stroke: number
    pinyin?: string | null
    wuxing?: string | null
    kangxiStroke?: number | null
  }

  export type CharacterDataUncheckedCreateInput = {
    id?: number
    char: string
    stroke: number
    pinyin?: string | null
    wuxing?: string | null
    kangxiStroke?: number | null
  }

  export type CharacterDataUpdateInput = {
    char?: StringFieldUpdateOperationsInput | string
    stroke?: IntFieldUpdateOperationsInput | number
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    wuxing?: NullableStringFieldUpdateOperationsInput | string | null
    kangxiStroke?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CharacterDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    char?: StringFieldUpdateOperationsInput | string
    stroke?: IntFieldUpdateOperationsInput | number
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    wuxing?: NullableStringFieldUpdateOperationsInput | string | null
    kangxiStroke?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CharacterDataCreateManyInput = {
    id?: number
    char: string
    stroke: number
    pinyin?: string | null
    wuxing?: string | null
    kangxiStroke?: number | null
  }

  export type CharacterDataUpdateManyMutationInput = {
    char?: StringFieldUpdateOperationsInput | string
    stroke?: IntFieldUpdateOperationsInput | number
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    wuxing?: NullableStringFieldUpdateOperationsInput | string | null
    kangxiStroke?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CharacterDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    char?: StringFieldUpdateOperationsInput | string
    stroke?: IntFieldUpdateOperationsInput | number
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    wuxing?: NullableStringFieldUpdateOperationsInput | string | null
    kangxiStroke?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DivinationRecordListRelationFilter = {
    every?: DivinationRecordWhereInput
    some?: DivinationRecordWhereInput
    none?: DivinationRecordWhereInput
  }

  export type TokenBalanceNullableRelationFilter = {
    is?: TokenBalanceWhereInput | null
    isNot?: TokenBalanceWhereInput | null
  }

  export type TokenUsageListRelationFilter = {
    every?: TokenUsageWhereInput
    some?: TokenUsageWhereInput
    none?: TokenUsageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DivinationRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalPurchased?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenBalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalPurchased?: SortOrder
  }

  export type TokenBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalPurchased?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalPurchased?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenBalanceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalPurchased?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TokenUsageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenUsageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
  }

  export type TokenUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenUsageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenUsageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokens?: SortOrder
    cost?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DivinationRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    inputData?: SortOrder
    result?: SortOrder
    detailResult?: SortOrder
    isPaid?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type DivinationRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cost?: SortOrder
  }

  export type DivinationRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    inputData?: SortOrder
    result?: SortOrder
    detailResult?: SortOrder
    isPaid?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type DivinationRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    inputData?: SortOrder
    result?: SortOrder
    detailResult?: SortOrder
    isPaid?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type DivinationRecordSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cost?: SortOrder
  }

  export type GuaDataCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    summary?: SortOrder
    guaci?: SortOrder
    yaoci?: SortOrder
    interpretation?: SortOrder
  }

  export type GuaDataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GuaDataMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    summary?: SortOrder
    guaci?: SortOrder
    yaoci?: SortOrder
    interpretation?: SortOrder
  }

  export type GuaDataMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    summary?: SortOrder
    guaci?: SortOrder
    yaoci?: SortOrder
    interpretation?: SortOrder
  }

  export type GuaDataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CharacterDataCountOrderByAggregateInput = {
    id?: SortOrder
    char?: SortOrder
    stroke?: SortOrder
    pinyin?: SortOrder
    wuxing?: SortOrder
    kangxiStroke?: SortOrder
  }

  export type CharacterDataAvgOrderByAggregateInput = {
    id?: SortOrder
    stroke?: SortOrder
    kangxiStroke?: SortOrder
  }

  export type CharacterDataMaxOrderByAggregateInput = {
    id?: SortOrder
    char?: SortOrder
    stroke?: SortOrder
    pinyin?: SortOrder
    wuxing?: SortOrder
    kangxiStroke?: SortOrder
  }

  export type CharacterDataMinOrderByAggregateInput = {
    id?: SortOrder
    char?: SortOrder
    stroke?: SortOrder
    pinyin?: SortOrder
    wuxing?: SortOrder
    kangxiStroke?: SortOrder
  }

  export type CharacterDataSumOrderByAggregateInput = {
    id?: SortOrder
    stroke?: SortOrder
    kangxiStroke?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DivinationRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<DivinationRecordCreateWithoutUserInput, DivinationRecordUncheckedCreateWithoutUserInput> | DivinationRecordCreateWithoutUserInput[] | DivinationRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DivinationRecordCreateOrConnectWithoutUserInput | DivinationRecordCreateOrConnectWithoutUserInput[]
    createMany?: DivinationRecordCreateManyUserInputEnvelope
    connect?: DivinationRecordWhereUniqueInput | DivinationRecordWhereUniqueInput[]
  }

  export type TokenBalanceCreateNestedOneWithoutUserInput = {
    create?: XOR<TokenBalanceCreateWithoutUserInput, TokenBalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenBalanceCreateOrConnectWithoutUserInput
    connect?: TokenBalanceWhereUniqueInput
  }

  export type TokenUsageCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput> | TokenUsageCreateWithoutUserInput[] | TokenUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenUsageCreateOrConnectWithoutUserInput | TokenUsageCreateOrConnectWithoutUserInput[]
    createMany?: TokenUsageCreateManyUserInputEnvelope
    connect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
  }

  export type DivinationRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DivinationRecordCreateWithoutUserInput, DivinationRecordUncheckedCreateWithoutUserInput> | DivinationRecordCreateWithoutUserInput[] | DivinationRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DivinationRecordCreateOrConnectWithoutUserInput | DivinationRecordCreateOrConnectWithoutUserInput[]
    createMany?: DivinationRecordCreateManyUserInputEnvelope
    connect?: DivinationRecordWhereUniqueInput | DivinationRecordWhereUniqueInput[]
  }

  export type TokenBalanceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TokenBalanceCreateWithoutUserInput, TokenBalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenBalanceCreateOrConnectWithoutUserInput
    connect?: TokenBalanceWhereUniqueInput
  }

  export type TokenUsageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput> | TokenUsageCreateWithoutUserInput[] | TokenUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenUsageCreateOrConnectWithoutUserInput | TokenUsageCreateOrConnectWithoutUserInput[]
    createMany?: TokenUsageCreateManyUserInputEnvelope
    connect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DivinationRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<DivinationRecordCreateWithoutUserInput, DivinationRecordUncheckedCreateWithoutUserInput> | DivinationRecordCreateWithoutUserInput[] | DivinationRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DivinationRecordCreateOrConnectWithoutUserInput | DivinationRecordCreateOrConnectWithoutUserInput[]
    upsert?: DivinationRecordUpsertWithWhereUniqueWithoutUserInput | DivinationRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DivinationRecordCreateManyUserInputEnvelope
    set?: DivinationRecordWhereUniqueInput | DivinationRecordWhereUniqueInput[]
    disconnect?: DivinationRecordWhereUniqueInput | DivinationRecordWhereUniqueInput[]
    delete?: DivinationRecordWhereUniqueInput | DivinationRecordWhereUniqueInput[]
    connect?: DivinationRecordWhereUniqueInput | DivinationRecordWhereUniqueInput[]
    update?: DivinationRecordUpdateWithWhereUniqueWithoutUserInput | DivinationRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DivinationRecordUpdateManyWithWhereWithoutUserInput | DivinationRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DivinationRecordScalarWhereInput | DivinationRecordScalarWhereInput[]
  }

  export type TokenBalanceUpdateOneWithoutUserNestedInput = {
    create?: XOR<TokenBalanceCreateWithoutUserInput, TokenBalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenBalanceCreateOrConnectWithoutUserInput
    upsert?: TokenBalanceUpsertWithoutUserInput
    disconnect?: TokenBalanceWhereInput | boolean
    delete?: TokenBalanceWhereInput | boolean
    connect?: TokenBalanceWhereUniqueInput
    update?: XOR<XOR<TokenBalanceUpdateToOneWithWhereWithoutUserInput, TokenBalanceUpdateWithoutUserInput>, TokenBalanceUncheckedUpdateWithoutUserInput>
  }

  export type TokenUsageUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput> | TokenUsageCreateWithoutUserInput[] | TokenUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenUsageCreateOrConnectWithoutUserInput | TokenUsageCreateOrConnectWithoutUserInput[]
    upsert?: TokenUsageUpsertWithWhereUniqueWithoutUserInput | TokenUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenUsageCreateManyUserInputEnvelope
    set?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    disconnect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    delete?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    connect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    update?: TokenUsageUpdateWithWhereUniqueWithoutUserInput | TokenUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUsageUpdateManyWithWhereWithoutUserInput | TokenUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenUsageScalarWhereInput | TokenUsageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DivinationRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DivinationRecordCreateWithoutUserInput, DivinationRecordUncheckedCreateWithoutUserInput> | DivinationRecordCreateWithoutUserInput[] | DivinationRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DivinationRecordCreateOrConnectWithoutUserInput | DivinationRecordCreateOrConnectWithoutUserInput[]
    upsert?: DivinationRecordUpsertWithWhereUniqueWithoutUserInput | DivinationRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DivinationRecordCreateManyUserInputEnvelope
    set?: DivinationRecordWhereUniqueInput | DivinationRecordWhereUniqueInput[]
    disconnect?: DivinationRecordWhereUniqueInput | DivinationRecordWhereUniqueInput[]
    delete?: DivinationRecordWhereUniqueInput | DivinationRecordWhereUniqueInput[]
    connect?: DivinationRecordWhereUniqueInput | DivinationRecordWhereUniqueInput[]
    update?: DivinationRecordUpdateWithWhereUniqueWithoutUserInput | DivinationRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DivinationRecordUpdateManyWithWhereWithoutUserInput | DivinationRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DivinationRecordScalarWhereInput | DivinationRecordScalarWhereInput[]
  }

  export type TokenBalanceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TokenBalanceCreateWithoutUserInput, TokenBalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenBalanceCreateOrConnectWithoutUserInput
    upsert?: TokenBalanceUpsertWithoutUserInput
    disconnect?: TokenBalanceWhereInput | boolean
    delete?: TokenBalanceWhereInput | boolean
    connect?: TokenBalanceWhereUniqueInput
    update?: XOR<XOR<TokenBalanceUpdateToOneWithWhereWithoutUserInput, TokenBalanceUpdateWithoutUserInput>, TokenBalanceUncheckedUpdateWithoutUserInput>
  }

  export type TokenUsageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput> | TokenUsageCreateWithoutUserInput[] | TokenUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenUsageCreateOrConnectWithoutUserInput | TokenUsageCreateOrConnectWithoutUserInput[]
    upsert?: TokenUsageUpsertWithWhereUniqueWithoutUserInput | TokenUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenUsageCreateManyUserInputEnvelope
    set?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    disconnect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    delete?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    connect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    update?: TokenUsageUpdateWithWhereUniqueWithoutUserInput | TokenUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUsageUpdateManyWithWhereWithoutUserInput | TokenUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenUsageScalarWhereInput | TokenUsageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokenBalanceInput = {
    create?: XOR<UserCreateWithoutTokenBalanceInput, UserUncheckedCreateWithoutTokenBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokenBalanceNestedInput = {
    create?: XOR<UserCreateWithoutTokenBalanceInput, UserUncheckedCreateWithoutTokenBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenBalanceInput
    upsert?: UserUpsertWithoutTokenBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenBalanceInput, UserUpdateWithoutTokenBalanceInput>, UserUncheckedUpdateWithoutTokenBalanceInput>
  }

  export type UserCreateNestedOneWithoutTokenUsageInput = {
    create?: XOR<UserCreateWithoutTokenUsageInput, UserUncheckedCreateWithoutTokenUsageInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenUsageInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTokenUsageNestedInput = {
    create?: XOR<UserCreateWithoutTokenUsageInput, UserUncheckedCreateWithoutTokenUsageInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenUsageInput
    upsert?: UserUpsertWithoutTokenUsageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenUsageInput, UserUpdateWithoutTokenUsageInput>, UserUncheckedUpdateWithoutTokenUsageInput>
  }

  export type UserCreateNestedOneWithoutDivinationRecordsInput = {
    create?: XOR<UserCreateWithoutDivinationRecordsInput, UserUncheckedCreateWithoutDivinationRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDivinationRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDivinationRecordsNestedInput = {
    create?: XOR<UserCreateWithoutDivinationRecordsInput, UserUncheckedCreateWithoutDivinationRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDivinationRecordsInput
    upsert?: UserUpsertWithoutDivinationRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDivinationRecordsInput, UserUpdateWithoutDivinationRecordsInput>, UserUncheckedUpdateWithoutDivinationRecordsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DivinationRecordCreateWithoutUserInput = {
    type: string
    inputData: string
    result: string
    detailResult?: string | null
    isPaid?: boolean
    cost?: number
    createdAt?: Date | string
  }

  export type DivinationRecordUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    inputData: string
    result: string
    detailResult?: string | null
    isPaid?: boolean
    cost?: number
    createdAt?: Date | string
  }

  export type DivinationRecordCreateOrConnectWithoutUserInput = {
    where: DivinationRecordWhereUniqueInput
    create: XOR<DivinationRecordCreateWithoutUserInput, DivinationRecordUncheckedCreateWithoutUserInput>
  }

  export type DivinationRecordCreateManyUserInputEnvelope = {
    data: DivinationRecordCreateManyUserInput | DivinationRecordCreateManyUserInput[]
  }

  export type TokenBalanceCreateWithoutUserInput = {
    balance?: number
    totalPurchased?: number
    updatedAt?: Date | string
  }

  export type TokenBalanceUncheckedCreateWithoutUserInput = {
    id?: number
    balance?: number
    totalPurchased?: number
    updatedAt?: Date | string
  }

  export type TokenBalanceCreateOrConnectWithoutUserInput = {
    where: TokenBalanceWhereUniqueInput
    create: XOR<TokenBalanceCreateWithoutUserInput, TokenBalanceUncheckedCreateWithoutUserInput>
  }

  export type TokenUsageCreateWithoutUserInput = {
    type: string
    tokens: number
    cost: number
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type TokenUsageUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    tokens: number
    cost: number
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type TokenUsageCreateOrConnectWithoutUserInput = {
    where: TokenUsageWhereUniqueInput
    create: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput>
  }

  export type TokenUsageCreateManyUserInputEnvelope = {
    data: TokenUsageCreateManyUserInput | TokenUsageCreateManyUserInput[]
  }

  export type DivinationRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: DivinationRecordWhereUniqueInput
    update: XOR<DivinationRecordUpdateWithoutUserInput, DivinationRecordUncheckedUpdateWithoutUserInput>
    create: XOR<DivinationRecordCreateWithoutUserInput, DivinationRecordUncheckedCreateWithoutUserInput>
  }

  export type DivinationRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: DivinationRecordWhereUniqueInput
    data: XOR<DivinationRecordUpdateWithoutUserInput, DivinationRecordUncheckedUpdateWithoutUserInput>
  }

  export type DivinationRecordUpdateManyWithWhereWithoutUserInput = {
    where: DivinationRecordScalarWhereInput
    data: XOR<DivinationRecordUpdateManyMutationInput, DivinationRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type DivinationRecordScalarWhereInput = {
    AND?: DivinationRecordScalarWhereInput | DivinationRecordScalarWhereInput[]
    OR?: DivinationRecordScalarWhereInput[]
    NOT?: DivinationRecordScalarWhereInput | DivinationRecordScalarWhereInput[]
    id?: IntFilter<"DivinationRecord"> | number
    userId?: IntFilter<"DivinationRecord"> | number
    type?: StringFilter<"DivinationRecord"> | string
    inputData?: StringFilter<"DivinationRecord"> | string
    result?: StringFilter<"DivinationRecord"> | string
    detailResult?: StringNullableFilter<"DivinationRecord"> | string | null
    isPaid?: BoolFilter<"DivinationRecord"> | boolean
    cost?: IntFilter<"DivinationRecord"> | number
    createdAt?: DateTimeFilter<"DivinationRecord"> | Date | string
  }

  export type TokenBalanceUpsertWithoutUserInput = {
    update: XOR<TokenBalanceUpdateWithoutUserInput, TokenBalanceUncheckedUpdateWithoutUserInput>
    create: XOR<TokenBalanceCreateWithoutUserInput, TokenBalanceUncheckedCreateWithoutUserInput>
    where?: TokenBalanceWhereInput
  }

  export type TokenBalanceUpdateToOneWithWhereWithoutUserInput = {
    where?: TokenBalanceWhereInput
    data: XOR<TokenBalanceUpdateWithoutUserInput, TokenBalanceUncheckedUpdateWithoutUserInput>
  }

  export type TokenBalanceUpdateWithoutUserInput = {
    balance?: IntFieldUpdateOperationsInput | number
    totalPurchased?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenBalanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    totalPurchased?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenUsageWhereUniqueInput
    update: XOR<TokenUsageUpdateWithoutUserInput, TokenUsageUncheckedUpdateWithoutUserInput>
    create: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput>
  }

  export type TokenUsageUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenUsageWhereUniqueInput
    data: XOR<TokenUsageUpdateWithoutUserInput, TokenUsageUncheckedUpdateWithoutUserInput>
  }

  export type TokenUsageUpdateManyWithWhereWithoutUserInput = {
    where: TokenUsageScalarWhereInput
    data: XOR<TokenUsageUpdateManyMutationInput, TokenUsageUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenUsageScalarWhereInput = {
    AND?: TokenUsageScalarWhereInput | TokenUsageScalarWhereInput[]
    OR?: TokenUsageScalarWhereInput[]
    NOT?: TokenUsageScalarWhereInput | TokenUsageScalarWhereInput[]
    id?: IntFilter<"TokenUsage"> | number
    userId?: IntFilter<"TokenUsage"> | number
    type?: StringFilter<"TokenUsage"> | string
    tokens?: IntFilter<"TokenUsage"> | number
    cost?: IntFilter<"TokenUsage"> | number
    isPaid?: BoolFilter<"TokenUsage"> | boolean
    createdAt?: DateTimeFilter<"TokenUsage"> | Date | string
  }

  export type UserCreateWithoutTokenBalanceInput = {
    name: string
    email?: string | null
    phone?: string | null
    password?: string | null
    avatar?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    divinationRecords?: DivinationRecordCreateNestedManyWithoutUserInput
    tokenUsage?: TokenUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenBalanceInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    password?: string | null
    avatar?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    divinationRecords?: DivinationRecordUncheckedCreateNestedManyWithoutUserInput
    tokenUsage?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenBalanceInput, UserUncheckedCreateWithoutTokenBalanceInput>
  }

  export type UserUpsertWithoutTokenBalanceInput = {
    update: XOR<UserUpdateWithoutTokenBalanceInput, UserUncheckedUpdateWithoutTokenBalanceInput>
    create: XOR<UserCreateWithoutTokenBalanceInput, UserUncheckedCreateWithoutTokenBalanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenBalanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenBalanceInput, UserUncheckedUpdateWithoutTokenBalanceInput>
  }

  export type UserUpdateWithoutTokenBalanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    divinationRecords?: DivinationRecordUpdateManyWithoutUserNestedInput
    tokenUsage?: TokenUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenBalanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    divinationRecords?: DivinationRecordUncheckedUpdateManyWithoutUserNestedInput
    tokenUsage?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTokenUsageInput = {
    name: string
    email?: string | null
    phone?: string | null
    password?: string | null
    avatar?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    divinationRecords?: DivinationRecordCreateNestedManyWithoutUserInput
    tokenBalance?: TokenBalanceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenUsageInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    password?: string | null
    avatar?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    divinationRecords?: DivinationRecordUncheckedCreateNestedManyWithoutUserInput
    tokenBalance?: TokenBalanceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenUsageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenUsageInput, UserUncheckedCreateWithoutTokenUsageInput>
  }

  export type UserUpsertWithoutTokenUsageInput = {
    update: XOR<UserUpdateWithoutTokenUsageInput, UserUncheckedUpdateWithoutTokenUsageInput>
    create: XOR<UserCreateWithoutTokenUsageInput, UserUncheckedCreateWithoutTokenUsageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenUsageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenUsageInput, UserUncheckedUpdateWithoutTokenUsageInput>
  }

  export type UserUpdateWithoutTokenUsageInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    divinationRecords?: DivinationRecordUpdateManyWithoutUserNestedInput
    tokenBalance?: TokenBalanceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenUsageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    divinationRecords?: DivinationRecordUncheckedUpdateManyWithoutUserNestedInput
    tokenBalance?: TokenBalanceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutDivinationRecordsInput = {
    name: string
    email?: string | null
    phone?: string | null
    password?: string | null
    avatar?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokenBalance?: TokenBalanceCreateNestedOneWithoutUserInput
    tokenUsage?: TokenUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDivinationRecordsInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    password?: string | null
    avatar?: string | null
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokenBalance?: TokenBalanceUncheckedCreateNestedOneWithoutUserInput
    tokenUsage?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDivinationRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDivinationRecordsInput, UserUncheckedCreateWithoutDivinationRecordsInput>
  }

  export type UserUpsertWithoutDivinationRecordsInput = {
    update: XOR<UserUpdateWithoutDivinationRecordsInput, UserUncheckedUpdateWithoutDivinationRecordsInput>
    create: XOR<UserCreateWithoutDivinationRecordsInput, UserUncheckedCreateWithoutDivinationRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDivinationRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDivinationRecordsInput, UserUncheckedUpdateWithoutDivinationRecordsInput>
  }

  export type UserUpdateWithoutDivinationRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenBalance?: TokenBalanceUpdateOneWithoutUserNestedInput
    tokenUsage?: TokenUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDivinationRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenBalance?: TokenBalanceUncheckedUpdateOneWithoutUserNestedInput
    tokenUsage?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DivinationRecordCreateManyUserInput = {
    id?: number
    type: string
    inputData: string
    result: string
    detailResult?: string | null
    isPaid?: boolean
    cost?: number
    createdAt?: Date | string
  }

  export type TokenUsageCreateManyUserInput = {
    id?: number
    type: string
    tokens: number
    cost: number
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type DivinationRecordUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    detailResult?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivinationRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    detailResult?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivinationRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    detailResult?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenBalanceDefaultArgs instead
     */
    export type TokenBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenBalanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenUsageDefaultArgs instead
     */
    export type TokenUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenUsageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DivinationRecordDefaultArgs instead
     */
    export type DivinationRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DivinationRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GuaDataDefaultArgs instead
     */
    export type GuaDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GuaDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterDataDefaultArgs instead
     */
    export type CharacterDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterDataDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}