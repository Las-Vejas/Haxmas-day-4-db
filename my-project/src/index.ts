import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => c.text("Vejas' Christmas Recipe API"))

export default app