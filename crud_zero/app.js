import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

const usuarios = [];

fastify.post("/usuarios", async (request, reply) => {
  const { nome, email, senha } = request.body;
  const usuario = { id: usuarios.length + 1, nome, email, senha };
  usuarios.push(usuario);
  reply.code(201).send(usuario);
});

fastify.get("/usuarios", async (request, reply) => {
  return usuarios;
});

fastify.get("/usuarios/:id", async (request, reply) => {
  const { id } = request.params;
  const usuario = usuarios.find((u) => u.id === Number(id));
  if (!usuario) return reply.code(404).send({ erro: "Usuário não encontrado" });
  return usuario;
});

fastify.put("/usuarios/:id", async (request, reply) => {
  const { id } = request.params;
  const index = usuarios.findIndex((u) => u.id === Number(id));
  if (index === -1) return reply.code(404).send({ erro: "Usuário não encontrado" });
  usuarios[index] = { ...usuarios[index], ...request.body };
  return usuarios[index];
});

fastify.delete("/usuarios/:id", async (request, reply) => {
  const { id } = request.params;
  const index = usuarios.findIndex((u) => u.id === Number(id));
  if (index === -1) return reply.code(404).send({ erro: "Usuário não encontrado" });
  usuarios.splice(index, 1);
  reply.code(204).send();
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
