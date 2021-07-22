import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900)
diretor.cadastrarSenha("Henrique")
const gerente = new Gerente("Ricardo", 5000, 12345678901)
gerente.cadastrarSenha("123")

const cliente = new Cliente("lais", 78945612379, "456")
const diretorEstalogado = SistemaAutenticacao.login(diretor,"Henriqu")
const gerenteEstalogado = SistemaAutenticacao.login(gerente,"123")

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456")

console.log(diretorEstalogado, gerenteEstalogado )