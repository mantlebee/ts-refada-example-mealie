import {
  BooleanColumn,
  createTableKey,
  Sqlite3Table,
} from "@mantlebee/fake-data-only";

import { getColumnsCommon } from "./_common.js";

export const toolsKey = createTableKey("tools");

export const createToolsTable = async (db) =>
  new Sqlite3Table(toolsKey, [
    ...getColumnsCommon(),
    new BooleanColumn("on_hand"),
  ]);
