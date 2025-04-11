/**
 * Netsuite Quote record type
 */
import * as record from 'N/record';
import { SalesTransaction} from "@nsemea_lib/Entities/SalesTransaction";

export class Quote extends SalesTransaction{
    override recordType() {
        return record.Type.ESTIMATE;
    }

}
