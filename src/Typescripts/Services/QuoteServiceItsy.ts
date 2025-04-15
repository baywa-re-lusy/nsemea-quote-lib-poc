import { QuoteService } from "./QuoteService";
import { SalesTransactionMixinItsy } from "@nsemea_lib/Services/SalesTransactionMixinItsy";

export class QuoteServiceItsy extends QuoteService{

}

Object.assign(QuoteServiceItsy, SalesTransactionMixinItsy);
