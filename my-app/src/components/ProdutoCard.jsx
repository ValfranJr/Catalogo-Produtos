import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #319795;
  color: #fff;
  border-radius: 0.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 0.75rem;
  font-size: 0.875rem;

  &:hover {
    background-color: #38b2ac;
  }
`;
const imagem = styled.img`
  width: 100%;
  height: 12rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;
const Card = styled.div`
  backgound-color: #fff;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  pading: 0.5rem;
  margin: 0.25rem;
  max-width: 24rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Titulo = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  color: #2d3748;
`;
const Descricao = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #2d3748;
  margin-top: 0.5rem;
  text-align: center;
`;
const Preco = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-top: 0.75rem;
  color: #319795;
`;

function ProdutoCard({ nome, preco, descricao, imagem }) {
  return (
    <Card>
      <Titulo>
        {nome}
      </Titulo>
      <imagem>
        <img src={imagem} alt={nome} />
      </imagem>

      <Descricao>{descricao}</Descricao>
      <Preco>{preco}</Preco>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  );
}

export default ProdutoCard;
