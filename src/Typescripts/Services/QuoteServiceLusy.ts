import {QuoteService} from "./QuoteService";
import {SalesTransactionMixinLusy} from "@nsemea_lib/Services/SalesTransactionMixinLusy";
import {SalesTransaction} from "@nsemea_lib/Entities/SalesTransaction";

export class QuoteServiceLusy extends QuoteService {

    override presetFieldsFromAddress(salesTransaction: SalesTransaction) {
        super.presetFieldsFromAddress(salesTransaction);
        SalesTransactionMixinLusy.presetFieldsFromAddressLusy(salesTransaction)
    }


}

Object.assign(QuoteServiceLusy.prototype, SalesTransactionMixinLusy);
