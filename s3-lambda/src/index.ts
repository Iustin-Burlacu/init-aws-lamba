import {DynamoDBStreamEvent, DynamoDBStreamHandler} from 'aws-lambda';
import KSUID from "ksuid";
import {Log} from "./logic/log";

export const lambdaHandler: DynamoDBStreamHandler = async (event: DynamoDBStreamEvent) => {
    let logId: string = KSUID.randomSync().string;
    const log: Log = new Log(["LogDynamoDB", logId], process.env.DEBUG, logId);
    log.info("DynamoDB");
    try {
        log.info(event);
        for (const record of event.Records) {
            switch (record.eventName) {
                case 'INSERT':
                    await procedureExecutionStreamHandler(record.dynamodb);
                    break;
                default:
                    log.debug('Default');
                    break;
            }
        }
    } catch (e) {
        log.error(e);
    }
};
