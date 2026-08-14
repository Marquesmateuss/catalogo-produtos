import React from 'react';

export default function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="produto-card">
      {imagem && <img src={imagem} alt={nome} />}
      <h3>{nome}</h3>
      <p className="preco">R$ {Number(preco).toFixed(2)}</p>
      <p className="descricao">{descricao}</p>
    </div>
  );
}