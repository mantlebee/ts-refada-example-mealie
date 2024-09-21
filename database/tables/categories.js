import { createTableKey, Sqlite3Table } from "@mantlebee/fake-data-only";

import { getColumnsCommon } from "./_common.js";

export const categoriesKey = createTableKey("categories");

export const createCategoriesTable = async (db) =>
  new Sqlite3Table(categoriesKey, getColumnsCommon());
