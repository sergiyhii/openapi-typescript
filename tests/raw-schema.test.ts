import openapiTS from "../src/index";

describe("rawSchema", () => {
  it("v2", async () => {
    const v2schema = {
      User: {
        type: "object",
        properties: {
          name: { type: "string", description: "user name" },
          email: { type: "string", description: "user email" },
        },
        required: ["name", "email"],
      },
    };

    expect(await openapiTS(v2schema, { rawSchema: true, version: 2 })).toBe(`/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface definitions {
  User: {
    /** user name */
    name: string;
    /** user email */
    email: string;
  };
}

export interface external {}
`);
  });

  it("v3", async () => {
    const v3schema = {
      User: {
        type: "object",
        properties: {
          name: { type: "string", description: "user name" },
          email: { type: "string", description: "user email" },
        },
        additionalProperties: false,
        required: ["name", "email"],
      },
    };

    expect(await openapiTS(v3schema, { rawSchema: true, version: 3 })).toBe(`/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface schemas {
  User: {
    /** user name */
    name: string;
    /** user email */
    email: string;
  };
}

export interface external {}
`);
  });
});