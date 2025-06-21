function ProdutoCard({ nome, preco, descricao, imagem }) {
  return(
      <div className="bg-white rounded-lg shadow-md p-2 m-1 max-w-sm mx-auto flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-800 mt-3 text-center mb-2">{nome}</h3>
          <img className="w-full h-48 rounded-t-lg" src={imagem} alt={nome} />
          <p className="text-sm text-gray-600 mt-2 text-center">{descricao}</p>
          <span className="text-xl font-bold text-teal-600 mt-3">{preco}</span>
      </div>
  )
}

export default ProdutoCard