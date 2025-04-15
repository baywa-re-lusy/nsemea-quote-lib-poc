import { QuoteService } from "./QuoteService";
import { SalesTransactionMixinEssy } from "@nsemea_lib/Services/SalesTransactionMixinEssy";

export class QuoteServiceEssy extends QuoteService{

}

Object.assign(QuoteServiceEssy, SalesTransactionMixinEssy);
