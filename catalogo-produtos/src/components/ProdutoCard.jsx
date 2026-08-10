function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} />

      <div className="produto-info">
        <h3>{nome}</h3>

        <p className="descricao">{descricao}</p>

        <p className="preco">
          R$ {Number(preco).toFixed(2).replace(".", ",")}
        </p>
      </div>
    </div>
  );
}

export default ProdutoCard;