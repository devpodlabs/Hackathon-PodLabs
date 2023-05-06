## Os participantes devem criar uma pasta com o "NOME DA EQUIPE", criar um arquivo "README.md" com os campos aqui postos e submeter um PR (pull request) do seu projeto inteiro dentro dessa pasta, para serem avaliados corretamente pela comissão do Hackathon.

#### Edital do Hackathon: link
#### Edital dos Temas e Premiações: link

```
Nome da equipe: Morcegos
Nome dos integrantes: Gustavo Gaertner Boehm
Grants aplicados:
```

```
Nome do projeto: Web3DevMarketplace
Pitch:
Web3DevMarketplace é um smart contract que permite a criação e gerenciamento de atividades de desenvolvimento em uma plataforma descentralizada. Com o uso de tokens ERC721, os líderes podem criar novas atividades com recompensas em criptomoedas, e os membros podem se candidatar a essas atividades, realizá-las e receber as recompensas. Além disso, os líderes podem aprovar ou rejeitar as atividades concluídas pelos membros, garantindo a qualidade e a confiabilidade do trabalho. Com transparência e segurança fornecidas pela blockchain, Web3DevMarketplace é uma solução inovadora e eficiente para a coordenação de equipes de desenvolvimento remoto.
Descrição do produto:
O contrato inteligente "Web3DevMarketplace" é um contrato ERC-721 que permite a criação, atribuição, conclusão e aprovação de atividades para membros de uma equipe. O contrato é gerenciado por líderes que criam atividades, enquanto os membros podem atribuir e concluir essas atividades. As atividades criadas têm uma recompensa associada, que é retirada do saldo do contrato quando a atividade é criada e mantida em um saldo bloqueado até que a atividade seja concluída e aprovada pelos líderes. Quando a atividade é aprovada, a recompensa é transferida para o membro que concluiu a atividade.
Como testar/compilar o produto:
Faça o deploy do smart contract usando o seguinte comando:
npx hardhat run scripts/deploy.js --network sepolia

Envie saldo para o contrato para criar as atividades.

Altere o endereço do contrato e a ABI no frontend. Lembre-se de que, como a estrutura está simples, isso precisa ser alterado em dois lugares:

a. No arquivo ContractManager.js, na linha 5.
b. No arquivo App.js, na linha 9.
c. Altere a ABI na pasta utils/Contract.json.

Na pasta do frontend, execute o comando "npm install" em seguinda npm start".

Observação: se quiser testar com alguns usuários no fluxo de aprovação, recomendamos acessar https://sepolia.etherscan.io/ e interagir com o contrato por lá, pois isso ainda não está implementado no nosso front-end.
Dificuldades:
Como se trata do meu primeiro projeto web3, tudo foi um desafio.
Tenho pouca experiencia com react e com solidity, gastei muito tempo entendo como fazer as coisas e fazendo funcionar, cada nova implementação era um desafio novo.
Tendo em vista a minha experiência e o tempo que tive para desenvolver isso estou feliz com o resultado. 
Visão de futuro:
Minha visão para o futuro inclui a adição de novas funcionalidades ao smart contract e a modularização do código para torná-lo mais flexível e escalável. Também estou planejando implementar um novo layout no frontend e aprimorar a estrutura do projeto como um todo.

Uma meta importante para mim é a implementação do IPFS para gerenciar os conteúdos das atividades de forma descentralizada e mais segura. Além disso, quero adicionar um sistema de pontos às atividades, permitindo que os usuários subam de nível e ganhem benefícios exclusivos na plataforma.

Para tornar o processo de aprovação das atividades mais eficiente, estou trabalhando em fluxos alternativos de aprovação que sejam mais flexíveis e personalizáveis para atender às necessidades dos usuários.

Estou animado em usar este projeto como meu primeiro case de desenvolvimento na web3 e aprender com as experiências e desafios que encontrarei ao longo do caminho.
