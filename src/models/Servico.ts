import type Pacote from "./Pacote";

export default interface Servico {
  nome: string;
  pacotes: Pacote[];
}