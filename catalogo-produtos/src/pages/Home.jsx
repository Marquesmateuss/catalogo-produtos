import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const [formulario, setFormulario] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });

  useEffect(() => {
    const carregarProdutos = setTimeout(() => {
      const produtosIniciais = [
        {
          id: 1,
          nome: "Notebook Gamer",
          preco: 4500,
          descricao: "Notebook potente para jogos e tarefas pesadas.",
          imagem:
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 2,
          nome: "Smartphone",
          preco: 2200,
          descricao: "Smartphone moderno com excelente desempenho.",
          imagem:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 3,
          nome: "Fone Bluetooth",
          preco: 350,
          descricao: "Fone sem fio com ótima qualidade de áudio.",
          imagem:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
        },
      ];

      setProdutos(produtosIniciais);
      setCarregando(false);
    }, 1500);

    return () => clearTimeout(carregarProdutos);
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formulario.nome || !formulario.preco || !formulario.descricao) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const novoProduto = {
      id: Date.now(),
      nome: formulario.nome,
      preco: formulario.preco,
      descricao: formulario.descricao,
      imagem:
        formulario.imagem ||
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    };

    setProdutos([...produtos, novoProduto]);

    setFormulario({
      nome: "",
      preco: "",
      descricao: "",
      imagem: "",
    });
  }

  return (
    <main>
      <section className="hero">
        <h1>Catálogo de Produtos</h1>
        <p>Confira nossos produtos e cadastre novos itens.</p>
      </section>

      <section className="cadastro">
        <h2>Cadastrar Produto</h2>

        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nome">Nome do produto *</label>

            <input
              type="text"
              id="nome"
              name="nome"
              value={formulario.nome}
              onChange={handleChange}
              placeholder="Digite o nome"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="preco">Preço *</label>

            <input
              type="number"
              id="preco"
              name="preco"
              value={formulario.preco}
              onChange={handleChange}
              placeholder="Digite o preço"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="descricao">Descrição *</label>

            <textarea
              id="descricao"
              name="descricao"
              value={formulario.descricao}
              onChange={handleChange}
              placeholder="Digite a descrição"
              required
            ></textarea>
          </div>

          <div className="campo">
            <label htmlFor="imagem">URL da imagem</label>

            <input
              type="url"
              id="imagem"
              name="imagem"
              value={formulario.imagem}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <button type="submit">Adicionar Produto</button>
        </form>
      </section>

      <section className="catalogo">
        <h2>Produtos</h2>

        {carregando ? (
          <p className="carregando">Carregando produtos...</p>
        ) : (
          <div className="produtos-grid">
            {produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                imagem={produto.imagem}
                descricao={produto.descricao}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;