import { AbstractRepository } from "@app/common/database/abstract.repository";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ReservationDocument } from "./models/reservation.schema";

@Injectable()
export class ReeservationsRepository extends AbstractRepository<ReservationDocument> {
    protected readonly logger = new Logger(ReeservationsRepository.name);

    constructor(
        @InjectModel(ReservationDocument.name) reservationModel: Model<ReservationDocument>
    ){
        super(reservationModel)
    }
}