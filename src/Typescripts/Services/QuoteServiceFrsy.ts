import { QuoteService } from "./QuoteService";
import { SalesTransactionServiceFrsy } from "@nsemea_lib/Services/SalesTransactionServiceFrsy";

export class QuoteServiceFrsy extends QuoteService{

}

Object.assign(QuoteServiceFrsy, SalesTransactionServiceFrsy);
