# Banco de Dados Relacional e Nao Relacional

> As diferenças entre bancos de dados relacionais e não relacionais estão relacionadas à forma como os dados são organizados, armazenados e acessados. Aqui estão algumas diferenças-chave e exemplos de cada tipo:

*Banco de Dados Relacional:*

- **Organização dos dados**: Os bancos de dados relacionais organizam os dados em tabelas com linhas (registros) e colunas (atributos). As tabelas têm esquemas predefinidos que definem a estrutura dos dados, incluindo os tipos de dados e as relações entre as tabelas.
- **Relacionamentos**: Os bancos de dados relacionais permitem estabelecer relacionamentos entre as tabelas usando chaves primárias e chaves estrangeiras. Isso permite a criação de consultas complexas que envolvem várias tabelas.
- **Consistência e integridade**: Os bancos de dados relacionais aplicam regras de consistência e integridade para garantir que os dados sejam válidos e coerentes. Isso inclui restrições de chave primária, chave estrangeira e outras regras definidas pelo esquema.
- **Exemplos**: MySQL, PostgreSQL, Oracle, Microsoft SQL Server são exemplos de bancos de dados relacionais.

*Banco de Dados Não Relacional (NoSQL):*

- **Organização dos dados**: Os bancos de dados não relacionais (NoSQL) podem adotar diferentes modelos de dados, como documentos, grafos, chave-valor e colunas amplas. Cada modelo tem sua própria forma de estruturar e armazenar os dados.
- **Flexibilidade**: Os bancos de dados NoSQL são projetados para serem mais flexíveis em termos de esquema e estrutura dos dados. Isso permite adicionar ou modificar campos em documentos ou adicionar novos atributos sem a necessidade de alterar um esquema rígido.
- **Escala horizontal**: Os bancos de dados NoSQL geralmente são projetados para escalar horizontalmente, distribuindo os dados em vários servidores. Isso os torna adequados para aplicativos que exigem alta disponibilidade e escalabilidade.
- **Desempenho**: Os bancos de dados NoSQL são otimizados para fornecer alto desempenho em cargas de trabalho específicas, como leitura intensiva, gravação intensiva ou consultas complexas.
- **Exemplos**: MongoDB, Cassandra, Redis, Neo4j são exemplos de bancos de dados NoSQL.

É importante destacar que a escolha entre um banco de dados relacional ou não relacional depende das necessidades específicas do projeto, incluindo requisitos de escalabilidade, flexibilidade de esquema, desempenho e capacidade de consulta. Cada tipo de banco de dados tem seus pontos fortes e é adequado para diferentes casos de uso.