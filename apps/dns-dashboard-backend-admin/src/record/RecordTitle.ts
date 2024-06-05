import { Record as TRecord } from "../api/record/Record";

export const RECORD_TITLE_FIELD = "value";

export const RecordTitle = (record: TRecord): string => {
  return record.value?.toString() || String(record.id);
};
