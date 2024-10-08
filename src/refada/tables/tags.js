import { createTableKey, Table } from "@mantlebee/ts-refada";

import { getColumnsCommon } from "./_common.js";

export const tagsKey = createTableKey("tags");

export const createTagsTable = async (db) =>
  new Table(tagsKey, getColumnsCommon());
