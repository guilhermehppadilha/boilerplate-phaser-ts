# Boilerplate Phaser 3 + React + TypeScript

Este é um boilerplate de **alta performance** e **arquitetura escalável** projetado para desenvolvedores independentes que buscam publicar jogos em múltiplas plataformas (Web/Poki, iOS, Android e Steam/Desktop) utilizando uma única base de código.

A filosofia deste projeto é a **separação total de responsabilidades**: o **Phaser 3** foca estritamente no Core Loop e renderização gráfica, enquanto o **React 18** assume a gestão de interfaces de usuário (UI), estado global e integração com APIs nativas.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Finalidade |
| :--- | :--- |
| **Phaser 3** | Motor de jogo 2D e renderização WebGL/Canvas. |
| **React 18** | Camada de UI (Menus, HUD, Lojas) e gestão de ciclo de vida. |
| **TypeScript** | Tipagem estrita para segurança de lógica e manutenção. |
| **Tailwind CSS v4** | Estilização ultra-rápida via engine nativa do Vite. |
| **Zustand** | Gerenciamento de estado global (Moedas, Progresso, Configurações). |
| **Capacitor** | Ponte nativa para publicação em iOS e Android. |
| **Electron** | Wrapper para distribuição Desktop (Steam/Epic Games). |
| **Vite** | Build tool de última geração com suporte a HMR instantâneo. |

---

## ✨ Principais Diferenciais

* **Poki SDK Ready:** Integração nativa com o `PokiService` para anúncios, monitoramento de gameplay e carregamento.
* **Safe LocalStorage:** Wrapper de persistência que evita crashes em navegadores no modo anônimo (exigência técnica da Poki).
* **Path Aliases:** Importações limpas e escaláveis utilizando o prefixo `@/` para apontar para a raiz do projeto.
* **Haptics Engine:** Feedback tátil (vibração) integrado via Capacitor para aumentar a retenção mobile.
* **Safe Areas (Notch):** Suporte nativo para Dynamic Island e entalhes de câmeras através de variáveis CSS adaptativas.
* **Modular Audio Manager:** Sistema de áudio centralizado que sincroniza o estado de 'Mute' entre a UI e o Motor de Jogo.

---

## 📂 Estrutura de Pastas

```text
/src
  /components        # UI em React (Menus, Modais, HUD)
  /game              # Lógica do Motor de Jogo (Phaser)
    /config          # Configurações de Main, Física e Asset Manifest
    /events          # EventBus centralizado para comunicação React <-> Phaser
    /scenes          # Cenas do jogo (Boot, Preloader, MainMenu, GameScene)
    /systems         # Sistemas agnósticos (PokiService, AudioManager)
  /hooks             # React Hooks (useGameEvent, useMobileLifecycle)
  /store             # Zustand Stores (Estado Global e UI)
  /utils             # Utilitários nativos (Haptics, Helpers)
/vite                # Configurações de Build para Dev e Prod
```

---

## 🚀 Como Começar

### Pré-requisitos
* **pnpm** (recomendado pela eficiência de cache e velocidade).
* Node.js 18 ou superior.

### Instalação
```bash
# Clone o repositório
git clone https://github.com/guilhermehppadilha/boilerplate-phaser-ts.git

# Instale as dependências
pnpm install
```

### Comandos Disponíveis
* `pnpm run dev`: Inicia o servidor de desenvolvimento (Vite) com Hot Reload.
* `pnpm run build`: Gera a versão otimizada para produção na pasta `/dist`.
* `npx cap sync`: Sincroniza o código web com os projetos nativos (iOS/Android).
* `npx cap open ios`: Abre o projeto no Xcode.

---

## 🕹️ Integração Poki SDK

O boilerplate já inclui o `PokiService`. Para utilizá-lo, basta chamar os métodos estáticos nos momentos chave:

* **Início da Partida:** `PokiService.gameplayStart()`
* **Fim da Partida/Pause:** `PokiService.gameplayStop()`
* **Anúncio de Intervalo:** `await PokiService.commercialBreak()`

> **Pro-Tip:** O `commercialBreak` retorna uma Promise que você deve aguardar antes de retomar a música ou a física do jogo para garantir uma experiência de usuário fluida.

---

## 📱 Publicação Mobile e Desktop

Este projeto utiliza o **Capacitor** para converter o build web em binários nativos.
1.  Para Android: `npx cap add android`
2.  Para iOS: `npx cap add ios`
3.  Para Steam (Electron): `npx cap add @capacitor-community/electron`

---

## 📝 Boas Práticas Implementadas

1.  **Event Driven Architecture:** Phaser e React nunca se tocam diretamente; eles se comunicam através do `EventBus`.
2.  **Asset Manifesto:** Todos os assets são declarados em um Enum centralizado para evitar erros de digitação e facilitar o preloading.
3.  **Performance Mobile:** O uso de functional components no React e classes otimizadas no Phaser garante que o WebGL Context seja limpo corretamente, evitando *memory leaks*.

---

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar para seus próprios jogos comerciais.