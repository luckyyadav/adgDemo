import { describe, expect, it, test } from "vitest";
import supertest from "supertest";
import app from "../server";

describe("create api", () => {
  it("should not create the api", async () => {
    const response = await supertest(app).post("/api/employee/create").send({
      name: "",
      email: "test11a1a@12.ci",
      phone: 345678,
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      "Something went wrong. fileds missing name"
    );
  });
  it("should not create user", async () => {
    const response = await supertest(app).post("/api/employee/create").send({
      name: "rajesh",
      email: "test11a1a@12.ci",
      phone: 345678,
    });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("user is created");
  });
});
