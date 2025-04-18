import {QuoteService} from "./QuoteService";
import {SalesTransactionMixinEssy} from "@nsemea_lib/Services/SalesTransactionMixinEssy";
import {SalesTransaction} from "@nsemea_lib/Entities/SalesTransaction";

export class QuoteServiceEssy extends QuoteService {
    override presetFieldsFromAddress(salesTransaction: SalesTransaction) {
        super.presetFieldsFromAddress(salesTransaction);
        SalesTransactionMixinEssy.presetFieldsFromAddressEssy(salesTransaction);
    }

}

Object.assign(QuoteServiceEssy.prototype, SalesTransactionMixinEssy);

export interface QuoteServiceEssy {
    validateReservationQuantityEssy(): boolean;

    validateShippingWeightLimit(): void;
}
