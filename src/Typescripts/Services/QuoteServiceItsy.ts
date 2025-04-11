import { QuoteService } from "./QuoteService";
import { SalesTransactionServiceItsy } from "@nsemea_lib/Services/SalesTransactionServiceItsy";

export class QuoteServiceItsy extends QuoteService{

}

Object.assign(QuoteServiceItsy, SalesTransactionServiceItsy);
