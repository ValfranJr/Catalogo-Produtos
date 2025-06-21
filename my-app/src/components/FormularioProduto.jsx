import { useState } from 'react';

function FormularioProduto({addProduto}){
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const novoProduto = { nome, preco, descricao, imagem };
        addProduto(novoProduto);
        // Limpar os campos após inserir
        setNome('');
        setPreco('');
        setDescricao('');
        setImagem('');
    }
    return(
    <div className=''>
        <h2 className="bg-white text-xl text-center max-w-md mx-auto my-5">Cadastro de Produtos</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6rounded-lg shadow-md max-w-md mx-auto my-5">

            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1 ">Nome:</label>
            <input placeholder='Nome do produto' className="block w-full p-2 border rounded mb-4" type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} required/>

            <label htmlFor="preco" className="block text-sm font-medium text-gray-700 mb-1">Preço (R$)</label>            
            <input placeholder='Preço em R$' className="block w-full p-2 border rounded mb-4" type="text" name="preco" value={preco} onChange={e => setPreco(e.target.value)} required/>

            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">Descrição:</label>
            <input placeholder='Breve descrição do produto' className="block w-full p-2 border rounded mb-4" type="text" name="descricao" value={descricao} onChange={e => setDescricao(e.target.value)} required/>

            <label htmlFor="imagem" className="block text-sm font-medium text-gray-700 mb-1">Endereço da Imagem:</label>
            <input placeholder='Insira o caminho da sua imagem' className="block w-full p-2 border rounded mb-4" type="text" name="imagem" value={imagem} onChange={(e) => setImagem(e.target.value)} required/>

            <button className="block mx-auto bg-teal-600 text-white py-2 px-5 rounded hover:bg-teal-500" type="submit">Cadastrar</button>
        </form>
    </div>
)
}

export default FormularioProduto