import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => c.text("Beans!"))

export default app