import { QuoteService } from "./QuoteService";
import { SalesTransactionMixinFrsy } from "@nsemea_lib/Services/SalesTransactionMixinFrsy";
export class QuoteServiceFrsy extends QuoteService{

}

Object.assign(QuoteServiceFrsy, SalesTransactionMixinFrsy);
