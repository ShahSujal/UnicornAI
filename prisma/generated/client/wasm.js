
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.16.2
 * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
 */
Prisma.prismaVersion = {
  client: "5.16.2",
  engine: "34ace0eb2704183d2c05b60b52fba5c43c13f303"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  clerkId: 'clerkId',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  stripeId: 'stripeId'
};

exports.Prisma.DomainScalarFieldEnum = {
  id: 'id',
  name: 'name',
  icon: 'icon',
  userId: 'userId',
  campaignId: 'campaignId'
};

exports.Prisma.ChatBotScalarFieldEnum = {
  id: 'id',
  welcomeMessage: 'welcomeMessage',
  icon: 'icon',
  background: 'background',
  textColor: 'textColor',
  helpdesk: 'helpdesk',
  domainId: 'domainId'
};

exports.Prisma.BillingsScalarFieldEnum = {
  id: 'id',
  plan: 'plan',
  credits: 'credits',
  userId: 'userId'
};

exports.Prisma.HelpDeskScalarFieldEnum = {
  id: 'id',
  question: 'question',
  answer: 'answer',
  domainId: 'domainId'
};

exports.Prisma.FilterQuestionsScalarFieldEnum = {
  id: 'id',
  question: 'question',
  answered: 'answered',
  domainId: 'domainId'
};

exports.Prisma.CustomerResponsesScalarFieldEnum = {
  id: 'id',
  question: 'question',
  answered: 'answered',
  customerId: 'customerId'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  email: 'email',
  domainId: 'domainId'
};

exports.Prisma.ChatRoomScalarFieldEnum = {
  id: 'id',
  live: 'live',
  mailed: 'mailed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  customerId: 'customerId'
};

exports.Prisma.ChatMessageScalarFieldEnum = {
  id: 'id',
  message: 'message',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  chatRoomId: 'chatRoomId',
  seen: 'seen'
};

exports.Prisma.BookingsScalarFieldEnum = {
  id: 'id',
  date: 'date',
  slot: 'slot',
  email: 'email',
  customerId: 'customerId',
  domainId: 'domainId',
  createdAt: 'createdAt'
};

exports.Prisma.CampaignScalarFieldEnum = {
  id: 'id',
  name: 'name',
  customers: 'customers',
  template: 'template',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  price: 'price',
  image: 'image',
  createdAt: 'createdAt',
  domainId: 'domainId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Plans = exports.$Enums.Plans = {
  STANDARD: 'STANDARD',
  PRO: 'PRO',
  ULTIMATE: 'ULTIMATE'
};

exports.Role = exports.$Enums.Role = {
  user: 'user',
  assistant: 'assistant'
};

exports.Prisma.ModelName = {
  User: 'User',
  Domain: 'Domain',
  ChatBot: 'ChatBot',
  Billings: 'Billings',
  HelpDesk: 'HelpDesk',
  FilterQuestions: 'FilterQuestions',
  CustomerResponses: 'CustomerResponses',
  Customer: 'Customer',
  ChatRoom: 'ChatRoom',
  ChatMessage: 'ChatMessage',
  Bookings: 'Bookings',
  Campaign: 'Campaign',
  Product: 'Product'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
