import { QuoteService } from "./QuoteService";
import { SalesTransactionMixinLusy } from "@nsemea_lib/Services/SalesTransactionMixinLusy";

export class QuoteServiceLusy extends QuoteService{

}

Object.assign(QuoteServiceLusy, SalesTransactionMixinLusy);
