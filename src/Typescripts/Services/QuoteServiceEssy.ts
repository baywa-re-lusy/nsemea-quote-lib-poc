import { QuoteService } from "./QuoteService";
import { SalesTransactionServiceEssy } from "@nsemea_lib/Services/SalesTransactionServiceEssy";

export class QuoteServiceEssy extends QuoteService{

}

Object.assign(QuoteServiceEssy, SalesTransactionServiceEssy);
