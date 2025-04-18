import {QuoteService} from "./QuoteService";
import {SalesTransactionMixinFrsy} from "@nsemea_lib/Services/SalesTransactionMixinFrsy";
import {SalesTransaction} from "@nsemea_lib/Entities/SalesTransaction";

export class QuoteServiceFrsy extends QuoteService {
    override presetFieldsFromAddress(salesTransaction: SalesTransaction) {
        super.presetFieldsFromAddress(salesTransaction);
        SalesTransactionMixinFrsy.presetFieldsFromAddressFrsy(salesTransaction)
    }

}

Object.assign(QuoteServiceFrsy, SalesTransactionMixinFrsy);

