db.produtos.updateMany(
  { nome: { $eq: "Quarteirão com Queijo" } },
  { $pop: { ingredientes: -1 } },
  { upsert: true },
);

db.produtos.find(
  {}, { nome: 1, ingredientes: 1, _id: 0 },
);