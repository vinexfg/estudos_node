import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

const usuarios = [];

fastify.post("/usuarios", async (requestAnimationFrame, reply) => {
  const { nome, email, sena };
});
