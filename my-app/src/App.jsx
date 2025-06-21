import { useState, useEffect } from 'react';
import ProdutoCard from './components/ProdutoCard';
import FormularioProduto from './components/FormularioProduto';
import './estilos.css';



function App() {

  const [loading, setLoading] = useState(true);
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Produto 1', preco: 'R$39', descricao: 'Conforto e acessível', imagem: 'https://placehold.co/300x200?text=Sua+Imagem+Aqui' },
    { id: 2, nome: 'Produto 2', preco: 'R$99', descricao: 'Fácil de manusear', imagem: 'https://placehold.co/300x200?text=Sua+Imagem+Aqui' },
    { id: 3, nome: 'Produto 3', preco: 'R$79', descricao: 'Prática e leve', imagem: 'https://placehold.co/300x200?text=Sua+Imagem+Aqui' }
  ]);

   useEffect(() => {
    setTimeout(() => {
      setProdutos([
    { id: 1, nome: 'Produto 1', preco: 'R$39', descricao: 'Conforto e acessível', imagem: 'https://placehold.co/300x200?text=Sua+Imagem+Aqui' },
    { id: 2, nome: 'Produto 2', preco: 'R$99', descricao: 'Fácil de manusear', imagem: 'https://placehold.co/300x200?text=Sua+Imagem+Aqui' },
    { id: 3, nome: 'Produto 3', preco: 'R$79', descricao: 'Prática e leve', imagem: 'https://placehold.co/300x200?text=Sua+Imagem+Aqui' }
])
      setLoading(false);
   },2000);
  }, []);


  function adicionarProduto(novoProduto) {
    setProdutos([...produtos, { ...novoProduto, id: Date.now() }]);      
    
  }  
    if (loading) {
  return <p>Carregando produtos...</p>;
  }

  return (
  <div className="mb-10">
      <FormularioProduto addProduto={adicionarProduto} />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {produtos.map((produto) => (
        <ProdutoCard
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
          imagem={produto.imagem}
        />
      ))}
    </div>
    </div>
  );
}
export default App
