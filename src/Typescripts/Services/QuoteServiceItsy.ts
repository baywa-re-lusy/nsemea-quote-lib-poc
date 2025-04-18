import {QuoteService} from "./QuoteService";
import {SalesTransactionMixinItsy} from "@nsemea_lib/Services/SalesTransactionMixinItsy";
import {SalesTransaction} from "@nsemea_lib/Entities/SalesTransaction";


export class QuoteServiceItsy extends QuoteService {
    override presetFieldsFromAddress(salesTransaction: SalesTransaction) {
        super.presetFieldsFromAddress(salesTransaction);
        SalesTransactionMixinItsy.presetFieldsFromAddressItsy(salesTransaction)
    }

}

Object.assign(QuoteServiceItsy.prototype, SalesTransactionMixinItsy);
