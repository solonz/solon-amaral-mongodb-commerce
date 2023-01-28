db.produtos.updateMany(
  { nome: { $eq: "Big Mac" } },
  { $addToSet: { ultimaModificacao: {
    $currentDate: { field: true, "cancellation.date": { $type: "timestamp" } } },
  } },
);

db.produtos.find({
  ultimaModificacao: { $exists: true },
}, { nome: 1, _id: 0 });