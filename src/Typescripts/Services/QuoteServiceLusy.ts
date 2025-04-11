import { QuoteService } from "./QuoteService";
import { SalesTransactionServiceLusy } from "@nsemea_lib/Services/SalesTransactionServiceLusy";

export class QuoteServiceLusy extends QuoteService{

}

Object.assign(QuoteServiceLusy, SalesTransactionServiceLusy);
