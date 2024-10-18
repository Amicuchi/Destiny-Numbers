# Números do Destino

Este é um projeto desenvolvido em React que permite calcular e entender o significado do seu "Número do Destino" com base na sua data de nascimento, um conceito da numerologia. O projeto inclui informações detalhadas sobre como os números influenciam nossas vidas e como realizar o cálculo do número do destino.

## Índice

- [Introdução](#introdução)
- [Funcionalidades](#funcionalidades)
- [Como Calcular o Número do Destino](#como-calcular-o-número-do-destino)
- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas](#rotas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Introdução

A numerologia é um estudo que atribui significados aos números e como eles influenciam aspectos importantes de nossa personalidade e trajetória de vida.

Este projeto oferece uma ferramenta simples para calcular seu Número do Destino e fornece uma explicação detalhada sobre o significado desse número.

## Funcionalidades

- **Explicação sobre Numerologia:** Introdução aos Números do Destino e sua relevância.
- **Cálculo do Número do Destino:** A partir da data de nascimento do usuário.
- **Exibição de Explicações Detalhadas:** Sobre cada número calculado.
- **Página de Contato:** Onde os usuários podem entrar em contato com o desenvolvedor.

## Como Calcular o Número do Destino

A soma de todos os dígitos da data de nascimento reduzida a um número de 1 a 9, ou aos números mestres 11, 22, ou 33, revela o Número do Destino.

### Exemplo de cálculo

Se você nasceu em 15 de agosto de 1990:

- Dia: 1 + 5 = 6
- Mês: 0 + 8 = 8
- Ano: 1 + 9 + 9 + 0 = 19 → 1 + 9 = 10 → 1 + 0 = 1
- Soma final: 6 + 8 + 1 = 15 → 1 + 5 = 6

O número do destino é **6**.

## Instalação

Para rodar o projeto localmente:

1. Clone este repositório:

    ```bash
    git clone https://github.com/Amicuchi/Destiny-Numbers.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd numeros-do-destino
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute o projeto:

    ```bash
    npm start
    ```

## Uso

Depois de rodar o projeto, você pode navegar pelas seguintes funcionalidades:

- **Explicação:** Página inicial que introduz o conceito dos Números do Destino.
- **Como calcular:** Página que detalha o processo de cálculo.
- **Calcular número:** Página onde o usuário insere sua data de nascimento e obtém o Número do Destino.
- **Contato:** Página de contato com o desenvolvedor.

## Rotas

- `/` - Página principal com a explicação sobre Numerologia e Números do Destino.
- `/how-calculate` - Instruções sobre como calcular o Número do Destino.
- `/calculation` - Calculadora de Números do Destino baseada na data de nascimento.
- `/number/:num` - Exibição de detalhes sobre o número calculado.
- `/contact` - Página de contato com o desenvolvedor.

## Contribuição

Contribuições são bem-vindas! Se você tem sugestões, encontrou bugs ou quer melhorar alguma funcionalidade, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
